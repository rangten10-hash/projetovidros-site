
-- Páginas monitoradas
CREATE TABLE public.seo_tracked_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL UNIQUE,
  label text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Snapshots diários por página
CREATE TABLE public.seo_daily_snapshots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  snapshot_date date NOT NULL,
  clicks integer NOT NULL DEFAULT 0,
  impressions integer NOT NULL DEFAULT 0,
  ctr numeric NOT NULL DEFAULT 0,
  position numeric NOT NULL DEFAULT 0,
  index_status text,
  coverage_state text,
  last_crawl_time timestamptz,
  raw jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (url, snapshot_date)
);

-- Alertas disparados
CREATE TABLE public.seo_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alert_type text NOT NULL,
  severity text NOT NULL DEFAULT 'warning',
  message text NOT NULL,
  details jsonb,
  resolved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_snapshots_url_date ON public.seo_daily_snapshots(url, snapshot_date DESC);
CREATE INDEX idx_alerts_created ON public.seo_alerts(created_at DESC);

-- RLS: tabelas administrativas, sem acesso público
ALTER TABLE public.seo_tracked_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_daily_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_alerts ENABLE ROW LEVEL SECURITY;

-- Sem políticas = ninguém acessa via cliente. Edge function usa service role.

-- Seed das páginas principais
INSERT INTO public.seo_tracked_pages (url, label) VALUES
  ('https://www.projetovidros.com.br/', 'Home'),
  ('https://www.projetovidros.com.br/box-de-banheiro', 'Box de Banheiro'),
  ('https://www.projetovidros.com.br/box-seguro', 'Box +Seguro'),
  ('https://www.projetovidros.com.br/portas-de-vidro', 'Portas de Vidro'),
  ('https://www.projetovidros.com.br/espelhos', 'Espelhos'),
  ('https://www.projetovidros.com.br/espelhos-led', 'Espelhos LED'),
  ('https://www.projetovidros.com.br/projetos', 'Projetos'),
  ('https://www.projetovidros.com.br/blog', 'Blog');

-- Habilita pg_cron e pg_net para agendamento
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;
