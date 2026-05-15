## Monitoramento diário de SEO via Google Search Console

Vou montar uma rotina automática que consulta o GSC todo dia, compara com o dia anterior e envia e-mail para **rangten10@gmail.com** quando detectar problemas.

### O que será criado

**Backend (Lovable Cloud)**
- Tabela `seo_tracked_pages` — lista de URLs principais a monitorar (Home, Box de Banheiro, Box +Seguro, Portas, Espelhos, Espelhos LED, Projetos, Blog, posts).
- Tabela `seo_daily_snapshots` — histórico diário por página: cliques, impressões, posição média, indexada (sim/não), erros de cobertura.
- Tabela `seo_alerts` — registro de alertas disparados (para não duplicar).

**Edge Function `seo-daily-monitor`**
1. Consulta `searchanalytics/query` no GSC (últimos 1 e 7 dias) para cada página rastreada.
2. Consulta `urlInspection/index:inspect` para detectar páginas removidas do índice.
3. Consulta `sitemaps` para erros de cobertura.
4. Salva snapshot na tabela.
5. Compara com snapshot anterior e gera alertas quando:
   - Página sai do índice (status ≠ `PASS` na URL Inspection)
   - Posição média piora >5 posições vs. semana anterior
   - Cliques caem >50% vs. média de 7 dias
   - Sitemap retorna `errors > 0` ou `warnings > 0`
6. Se houver alertas, envia e-mail HTML resumido via Lovable Emails.

**Agendamento**
- pg_cron diário às 09:00 (BRT) chamando a edge function.

**Painel opcional `/admin/seo`** (rota protegida simples, view-only) — para você inspecionar histórico e snapshots quando quiser. Pode ser adicionada depois se preferir.

### Pré-requisitos que vou ativar
- **Lovable Cloud** (banco + cron + edge functions + e-mail)
- **Domínio de e-mail Lovable** (necessário para enviar os alertas)

A conexão com o Google Search Console já está ativa e será reutilizada.

### Detalhes técnicos
- GSC chamado via gateway com `GOOGLE_SEARCH_CONSOLE_API_KEY` (já disponível).
- Propriedade: `sc-domain:projetovidros.com.br`.
- Período de comparação: hoje vs. mesmo dia da semana anterior (D-7).
- E-mail enviado apenas quando há ≥1 alerta, evitando spam diário.
- Snapshots ficam para sempre (úteis para histórico/auditoria).
