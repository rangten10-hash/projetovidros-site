// Catálogo de 10 serviços especializados apresentados em /projetos
// e usados como base para as variações rotativas de conteúdo nas
// landing pages regionais /projetos/:bairro.

import {
  AppWindow,
  ShieldCheck,
  Home,
  Store,
  Eye,
  ChefHat,
  WashingMachine,
  Building2,
  HardHat,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

export interface ProjetoServico {
  id: number;
  titulo: string;
  descricao: string;
  Icon: LucideIcon;
}

export const PROJETO_SERVICOS: ProjetoServico[] = [
  {
    id: 1,
    titulo: "Janelas de Vidro Temperado",
    descricao:
      "Luminosidade, isolamento acústico e alta resistência contra ventos e impactos. Ideais para quartos, salas e escritórios com design moderno.",
    Icon: AppWindow,
  },
  {
    id: 2,
    titulo: "Guarda-Corpo de Vidro Temperado Laminado",
    descricao:
      "Segurança máxima para sacadas, varandas e escadas, combinando rigidez e proteção total de acordo com as normas técnicas.",
    Icon: ShieldCheck,
  },
  {
    id: 3,
    titulo: "Envidraçamento de Sacadas",
    descricao:
      "Proteção contra chuva, vento e poeira, integrando sua varanda aos ambientes com sistemas de abertura total e vedação acústica premium.",
    Icon: Home,
  },
  {
    id: 4,
    titulo: "Portas para Lojas",
    descricao:
      "Soluções robustas e elegantes para comércios, com molas de piso hidráulicas, puxadores em inox e sistemas de alta segurança e fluxo.",
    Icon: Store,
  },
  {
    id: 5,
    titulo: "Vitrine de Lojas",
    descricao:
      "Visibilidade máxima para o seu negócio com vidros de grande porte com alta transparência e segurança, projetados para destacar seus produtos.",
    Icon: Eye,
  },
  {
    id: 6,
    titulo: "Divisórias de Cozinha",
    descricao:
      "Separação moderna e higiênica de ambientes, bloqueando gordura e odores sem perder a integração visual e a passagem de luz natural.",
    Icon: ChefHat,
  },
  {
    id: 7,
    titulo: "Divisórias de Lavanderia",
    descricao:
      "Otimização sob medida para áreas de serviço, dividindo os ambientes de forma limpa com vidros opacos, jateados ou incolores.",
    Icon: WashingMachine,
  },
  {
    id: 8,
    titulo: "Divisórias de Escritórios",
    descricao:
      "Soluções corporativas para criar salas de reunião e estações de trabalho privativas, mantendo a sofisticação, amplitude e isolamento acústico.",
    Icon: Building2,
  },
  {
    id: 9,
    titulo: "Vidro para sua Obra",
    descricao:
      "Atendimento completo para construtores e engenheiros, fornecendo painéis fixos, coberturas, espelhos e fechamentos técnicos direto da fábrica.",
    Icon: HardHat,
  },
  {
    id: 10,
    titulo: "Cobertura de Vidro",
    descricao:
      "Estruturas metálicas integradas a vidros laminados de segurança, perfeitas para cobrir garagens, corredores e áreas gourmet com proteção UV.",
    Icon: Umbrella,
  },
];
