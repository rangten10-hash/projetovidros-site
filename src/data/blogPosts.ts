import bannerBoxSeguro from "@/assets/banner-mobile-seguranca.webp";
import boxAteTeto from "@/assets/blog-box-ate-teto.webp";
import kitRetoRose from "@/assets/blog-kit-reto-rose.webp";
import divisoriaUniqueAntes from "@/assets/blog-divisoria-unique-antes.webp";
import divisoriaUniqueDepois from "@/assets/blog-divisoria-unique-depois.webp";
import espelhoHallAntes from "@/assets/blog-espelho-hall-antes.webp";
import espelhoHall from "@/assets/blog-espelho-hall-depois.webp";
import guiaBoxFlex from "@/assets/blog-guia-box-flex.webp";
import guiaBoxTransfer from "@/assets/blog-guia-box-transfer.webp";
import guiaBoxAbrir from "@/assets/blog-guia-box-abrir.webp";
import guiaBoxFrontal from "@/assets/blog-guia-box-frontal.webp";
import guiaBoxPisoTeto from "@/assets/blog-guia-box-piso-teto.webp";
import guiaBoxElegance from "@/assets/blog-guia-box-elegance.webp";
import guiaBoxCanto from "@/assets/blog-guia-box-canto.webp";
import flexSemBox from "@/assets/blog-flex-sem-box.webp";
import flexFechado from "@/assets/blog-flex-fechado.webp";
import flexAberto from "@/assets/blog-flex-aberto.webp";
import espelhoCapa from "@/assets/blog-espelho-capa.webp";
import espelhoPainelSala from "@/assets/blog-espelho-painel-sala.webp";
import espelhoPainelHall from "@/assets/blog-espelho-painel-hall.webp";
import espelhoBanheiroLed from "@/assets/blog-espelho-banheiro-led.webp";
import espelhoLapidado from "@/assets/blog-espelho-lapidado.webp";
import espelhoBizote from "@/assets/blog-espelho-bizote.webp";
import vidracariaZonaNorte from "@/assets/blog-vidracaria-zona-norte.webp";
import vidracariaZonaOeste from "@/assets/blog-vidracaria-zona-oeste.webp";
import vidracariaZonaLeste from "@/assets/blog-vidracaria-zona-leste.webp";
import vidracariaZonaSul from "@/assets/blog-vidracaria-zona-sul.webp";
import versatik3Fechado from "@/assets/blog-versatik-3-folhas-fechado.webp";
import versatik3Aberto from "@/assets/blog-versatik-3-folhas-aberto.webp";
import eleganceFlexGoldCapa from "@/assets/blog-elegance-flex-gold-capa.webp";
import eleganceFlexGoldFechado from "@/assets/blog-elegance-flex-gold-fechado.webp";
import eleganceFlexGoldAberto from "@/assets/blog-elegance-flex-gold-aberto.webp";
import boxCantoKitRetoCapa from "@/assets/blog-box-canto-kit-reto-capa.webp";
import boxCantoKitRetoMateria from "@/assets/blog-box-canto-kit-reto-materia.webp";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  /** Array of content blocks rendered in order */
  content: BlogBlock[];
  cta?: {
    label: string;
    href: string;
  };
  metaDescription: string;
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: { strong?: string; text: string }[] }
  | { type: "image"; src: string; alt: string };

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

export const blogPosts: BlogPost[] = [
  {
    slug: "box-canto-kit-reto-cromado-piso-teto",
    title: "Box de Canto Kit Reto Cromado: Elegância Piso a Teto e Abertura Ampla",
    excerpt:
      "Box de canto com Kit Reto Cromado e fechamento piso a teto: sofisticação, abertura central ampla e Película Box+Seguro para banheiros em L.",
    image: boxCantoKitRetoCapa,
    imageAlt:
      "Box de canto com Kit Reto Cromado piso a teto instalado pela Projeto Vidros",
    date: "2026-05-18",
    author: "Projeto Vidros",
    metaDescription:
      "Box de Canto Kit Reto Cromado piso a teto: design minimalista, abertura central, conforto térmico e Película Box+Seguro. Projeto sob medida da Projeto Vidros.",
    cta: {
      label: "Falar com Especialista no WhatsApp",
      href: WHATSAPP_URL,
    },
    content: [
      {
        type: "paragraph",
        text: "Se você possui um banheiro com disposição em L e busca uma solução que una sofisticação visual e aproveitamento inteligente de espaço, o Box de Canto com Kit Reto Cromado e fechamento Piso a Teto é a escolha ideal. Este projeto transforma o canto do seu banheiro em uma cabine de banho moderna, clean e extremamente segura.",
      },
      {
        type: "image",
        src: boxCantoKitRetoMateria,
        alt: "Box de canto com Kit Reto Cromado piso a teto em banheiro com disposição em L",
      },
      { type: "heading", text: "O Charme do Acabamento Cromado e Design Reto" },
      {
        type: "paragraph",
        text: "O Kit Reto Cromado é um dos favoritos para projetos de alto padrão devido ao seu brilho e linhas minimalistas:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Estética Contemporânea:",
            text: "O acabamento cromado traz luminosidade ao ambiente, combinando perfeitamente com metais sanitários modernos.",
          },
          {
            strong: "Abertura Central (Ângulo):",
            text: "O sistema de duas portas de correr que se encontram no centro proporciona uma entrada ampla e confortável, ideal para banheiros onde a circulação lateral é limitada.",
          },
        ],
      },
      { type: "heading", text: "Vantagens do Fechamento Piso a Teto" },
      {
        type: "paragraph",
        text: "Ao optar por levar o vidro até o gesso, você eleva o nível de funcionalidade do seu projeto:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Preservação do Mobiliário:",
            text: "O vapor fica confinado na área do banho, protegendo seus armários de madeira e espelhos da umidade excessiva e do mofo.",
          },
          {
            strong: "Banheiro Sempre Organizado:",
            text: "Esqueça o banheiro todo molhado ou embaçado após o uso. A condensação ocorre dentro do box, mantendo a área externa seca.",
          },
          {
            strong: "Conforto Térmico:",
            text: "Desfrute de um banho muito mais relaxante, com a temperatura interna preservada, criando um efeito de spa particular.",
          },
        ],
      },
      { type: "heading", text: "Segurança Total: Tecnologia Box+Seguro" },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, a estética nunca caminha sozinha. Este projeto conta com a aplicação da nossa exclusiva Película de Segurança Box+Seguro.",
      },
      {
        type: "paragraph",
        text: "A segurança da sua família está sempre em primeiro lugar. Com este reforço, mesmo em caso de um impacto extremo que leve à quebra do vidro temperado, todos os fragmentos permanecem colados à película. Isso evita ferimentos e garante a tranquilidade necessária para o dia a dia, especialmente em casas com crianças ou idosos.",
      },
    ],
  },
  {
    slug: "box-elegance-flex-piso-teto-gold-luxo-protecao",
    title: "Box Elegance Flex Piso a Teto Gold: O ápice do Luxo, Espaço e Proteção",
    excerpt:
      "Box articulado Elegance Flex com fechamento piso a teto e acabamento ouro: até 90% de abertura, design minimalista e Película Box+Seguro.",
    image: eleganceFlexGoldCapa,
    imageAlt:
      "Box Elegance Flex piso a teto com acabamento dourado instalado pela Projeto Vidros",
    date: "2026-05-17",
    author: "Projeto Vidros",
    metaDescription:
      "Box Elegance Flex Piso a Teto Gold: sistema articulado com 90% de abertura, acabamento ouro e Película Box+Seguro. Projeto sob medida da Projeto Vidros.",
    cta: {
      label: "Falar com Especialista no WhatsApp",
      href: WHATSAPP_URL,
    },
    content: [
      {
        type: "paragraph",
        text: "Se você busca o que há de mais sofisticado e moderno no mercado de vidraçaria, o Box Elegance Flex com fechamento Piso a Teto na cor Ouro (Dourado) é a escolha definitiva. Este projeto foi desenvolvido para quem não abre mão do design minimalista e da funcionalidade inteligente, transformando o banheiro em um ambiente digno de revista.",
      },
      {
        type: "image",
        src: eleganceFlexGoldFechado,
        alt: "Box Elegance Flex piso a teto fechado com perfis e ferragens em acabamento ouro",
      },
      {
        type: "heading",
        text: "Design Minimalista: Sem Roldanas ou Trilhos e na Cor Ouro",
      },
      {
        type: "paragraph",
        text: "Diferente dos sistemas tradicionais, este modelo se destaca pelo visual clean e sofisticado:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Sem Roldanas Aparentes e Trilhos:",
            text: "O mecanismo articulado é discreto, focado na fluidez do movimento e na limpeza visual do vidro.",
          },
          {
            strong: "Acabamento Ouro (Dourado):",
            text: "A cor dourada traz um ar de exclusividade e elegância, combinando perfeitamente com metais de alto padrão e projetos de iluminação modernos.",
          },
        ],
      },
      {
        type: "heading",
        text: "Máxima Abertura: Até 90% de Aproveitamento do Vão",
      },
      {
        type: "paragraph",
        text: "A grande vantagem técnica do sistema Flex é a sua capacidade de articulação. Enquanto um box de correr comum libera apenas 50% do espaço, o sistema Flex permite uma abertura de até 90%.",
      },
      {
        type: "paragraph",
        text: "Isso o torna a solução perfeita para vãos pequenos, garantindo uma passagem ampla, confortável e acessível, onde cada centímetro é aproveitado.",
      },
      {
        type: "image",
        src: eleganceFlexGoldAberto,
        alt: "Box Elegance Flex aberto mostrando a articulação e o aproveitamento de até 90% do vão",
      },
      {
        type: "heading",
        text: "Benefícios do Fechamento Piso a Teto",
      },
      {
        type: "paragraph",
        text: "O fechamento total até o gesso não é apenas uma escolha estética, é uma decisão inteligente para a preservação do seu imóvel:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Preservação dos Móveis:",
            text: "Ao confinar o vapor dentro da área de banho, você evita que a umidade atinja diretamente os gabinetes de madeira e armários, impedindo que estufem ou criem mofo.",
          },
          {
            strong: "Banheiro Seco e Organizado:",
            text: "O vapor condensa dentro do box e escorre pela parede interna, mantendo o restante do banheiro livre de umidade, com espelhos limpos e sem a sensação de \"névoa\".",
          },
          {
            strong: "Efeito Sauna e Conforto:",
            text: "Mantém a temperatura interna muito mais agradável, proporcionando um banho relaxante e terapêutico.",
          },
        ],
      },
      {
        type: "heading",
        text: "Segurança Inegociável: Película Box+Seguro",
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, o cuidado com quem você ama vem em primeiro lugar. Por isso, este projeto conta com a aplicação da Película de Segurança Box+Seguro.",
      },
      {
        type: "paragraph",
        text: "Em caso de quebra acidental, a película mantém todos os fragmentos de vidro unidos, evitando que se espalhem pelo chão e causem acidentes. É a união perfeita entre a beleza do acabamento dourado e a proteção real que sua família merece.",
      },
    ],
  },
  {
    slug: "box-versatik-3-folhas-banheiros-pequenos",
    title: "Box Versatik 3 Folhas: A Solução Inteligente para Banheiros Pequenos e Apertados",
    excerpt:
      "Sistema Versatik de 3 folhas (1 fixa e 2 móveis) abre 66% do vão e resolve banheiros onde pia ou vaso ficam próximos do box.",
    image: versatik3Fechado,
    imageAlt:
      "Box Versatik de 3 folhas com perfil preto fechado em banheiro compacto instalado pela Projeto Vidros",
    date: "2026-05-16",
    author: "Projeto Vidros",
    metaDescription:
      "Box Versatik 3 folhas: 66% de abertura para banheiros pequenos com pia ou vaso próximo ao box. Solução sob medida da Projeto Vidros em São Paulo.",
    cta: {
      label: "Falar com Especialista no WhatsApp",
      href: WHATSAPP_URL,
    },
    content: [
      {
        type: "heading",
        text: "O desafio do projeto",
      },
      {
        type: "paragraph",
        text: "Muitos clientes enfrentam o mesmo dilema: um banheiro onde a pia ou o vaso sanitário ficam muito próximos da entrada do box. Nesses casos, um box de abrir (de giro) bateria na louça, e um box de correr comum de 2 folhas deixa a passagem muito estreita, dificultando o uso no dia a dia.",
      },
      {
        type: "image",
        src: versatik3Fechado,
        alt: "Box Versatik 3 folhas fechado em banheiro compacto com perfil preto",
      },
      {
        type: "heading",
        text: "A Solução Personalizada Projeto Vidros",
      },
      {
        type: "paragraph",
        text: "Nesta semana, identificamos exatamente esse problema na casa de uma cliente. A solução foi a instalação do Sistema Versatik de 3 Folhas (1 fixa e 2 móveis).",
      },
      {
        type: "paragraph",
        text: "Como funciona? Diferente do padrão, onde metade do espaço fica fechado, o Versatik de 3 folhas permite que as duas portas corram para trás da folha fixa.",
      },
      {
        type: "paragraph",
        text: "Resultado: Você ganha 66% de abertura do vão, contra os 45% de um box comum.",
      },
      {
        type: "image",
        src: versatik3Aberto,
        alt: "Box Versatik 3 folhas aberto mostrando a passagem ampla conquistada com o sistema",
      },
      {
        type: "heading",
        text: "Vantagens Técnicas Identificadas",
      },
      {
        type: "list",
        items: [
          {
            strong: "Livre de Obstáculos:",
            text: "Ideal para banheiros onde a porta não pode abrir para fora ou para dentro por causa da proximidade da pia ou vaso.",
          },
          {
            strong: "Passagem Ampla:",
            text: "Perfeito para quem busca conforto e acessibilidade, mesmo em metragens reduzidas.",
          },
          {
            strong: "Estética Moderna:",
            text: "Trilhos finos e deslizamento suave que valorizam o acabamento do banheiro.",
          },
        ],
      },
      {
        type: "heading",
        text: "Segurança em Primeiro Lugar: Tecnologia Box+Seguro",
      },
      {
        type: "paragraph",
        text: "Mais do que design e aproveitamento de espaço, o nosso compromisso é com a integridade da sua casa. Por isso, neste projeto do Versatik 3 Folhas, aplicamos a exclusiva Película Box+Seguro.",
      },
      {
        type: "paragraph",
        text: "Sabemos que a segurança da sua família está sempre em primeiro lugar. Com essa tecnologia, caso ocorra qualquer impacto forte e o vidro venha a se quebrar, os fragmentos ficam presos à película, evitando que se espalhem pelo banheiro e causem acidentes. É a tranquilidade de ter um banheiro sofisticado com a proteção que seus filhos e familiares merecem.",
      },
      {
        type: "paragraph",
        text: '"Lindo por fora, ultra seguro por dentro. Película Box+Seguro aplicada! ✅"',
      },
      {
        type: "paragraph",
        text: "Tem um banheiro com layout desafiador? Nossa equipe técnica avalia o seu vão e indica a melhor solução sob medida.",
      },
    ],
  },
  {
    slug: "vidracaria-zona-sul-sao-paulo-design-luxo-sob-medida",
    title: "Vidraçaria na Zona Sul: Design de Luxo e Projetos sob Medida",
    excerpt:
      "Box, espelhos LED, portas e divisórias de vidro sob medida em Itaim Bibi, Moema, Vila Nova Conceição, Brooklin e toda a Zona Sul de São Paulo.",
    image: vidracariaZonaSul,
    imageAlt:
      "Porta de vidro temperado instalada pela Projeto Vidros em residência de alto padrão na Zona Sul de São Paulo",
    date: "2026-05-15",
    author: "Projeto Vidros",
    metaDescription:
      "Vidraçaria na Zona Sul de SP: box premium, espelhos LED, portas e divisórias de vidro sob medida em Itaim Bibi, Moema, Vila Nova Conceição, Brooklin e mais.",
    content: [
      {
        type: "paragraph",
        text: "A Zona Sul de São Paulo é o epicentro do design, da arquitetura moderna e dos grandes centros corporativos. Para acompanhar o padrão de bairros como Moema, Itaim Bibi e Vila Nova Conceição, a Projeto Vidros oferece um atendimento exclusivo, focado em detalhes impecáveis e na máxima qualidade técnica.",
      },
      {
        type: "image",
        src: vidracariaZonaSul,
        alt: "Porta de vidro temperado em ambiente sofisticado na Zona Sul de São Paulo",
      },
      {
        type: "paragraph",
        text: "Com sede no Imirim e uma logística otimizada, nossa equipe atende prontamente todas as subdivisões da Zona Sul, levando o que há de mais moderno em vidros e espelhos.",
      },
      { type: "heading", text: "Atendimento Premium por Região" },
      {
        type: "list",
        items: [
          { strong: "Eixo de Luxo e Negócios:", text: "atendemos com exclusividade o Itaim Bibi, Vila Olímpia, Brooklin e Vila Nova Conceição. Projetos ideais para apartamentos de alto padrão e divisórias de vidro para escritórios corporativos." },
          { strong: "Áreas Nobres e Residenciais:", text: "soluções personalizadas para Moema, Jardim Paulista, Campo Belo, Panamby e Chácara Flora. Foco em espelhos decorativos e box de alto padrão." },
          { strong: "Região Central e Tradicional:", text: "atendimento ágil na Vila Mariana, Paraíso, Chácara Klabin, Saúde e Vila Clementino, unindo tradição e modernidade." },
          { strong: "Eixo Histórico e em Expansão:", text: "projetos sob medida para o Ipiranga, Sacomã, Jabaquara e arredores, com foco em renovação de ambientes e segurança." },
        ],
      },
      { type: "heading", text: "Soluções que Valorizam seu Imóvel na Zona Sul" },
      {
        type: "paragraph",
        text: "Nosso catálogo foi pensado para clientes exigentes que buscam durabilidade e estética:",
      },
      {
        type: "list",
        items: [
          { strong: "Box de Banheiro de Alto Padrão:", text: "sistemas como o Elegance e o Versatik, que transformam o banheiro em um ambiente de spa." },
          { strong: "Espelhos com LED e Cristais Premium:", text: "utilizamos apenas espelhos Guardian e Cebrace, com lapidação de precisão para closets e salas de jantar." },
          { strong: "Divisórias de Vidro para Escritórios:", text: "instalações limpas e modernas para o dinâmico mercado corporativo da Vila Olímpia e Santo Amaro." },
          { strong: "Portas e Janelas sob Medida:", text: "vidros temperados e laminados que oferecem isolamento acústico e visual clean." },
          { strong: "Divisórias Cozinha x Lavanderia:", text: "a solução perfeita para otimizar apartamentos modernos no Brooklin e Vila Mariana." },
        ],
      },
      { type: "heading", text: "A Diferença Técnica da Projeto Vidros" },
      {
        type: "paragraph",
        text: "Em uma região que não aceita erros, a nossa tecnologia de medição a laser e nossa nota 100 de SEO garantem que você está contratando uma empresa que preza pela eficiência digital e pela perfeição na obra. Com 5.0 estrelas no Google, somos a escolha de quem não abre mão da qualidade na Zona Sul.",
      },
      {
        type: "paragraph",
        text: "Precisa de um orçamento exclusivo para o seu endereço na Zona Sul? Nossa equipe técnica está pronta para transformar seu ambiente com a sofisticação que ele merece.",
      },
    ],
    cta: {
      label: "Falar com Especialista na Zona Sul via WhatsApp",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20sobre%20a%20vidraçaria%20na%20Zona%20Sul%20e%20gostaria%20de%20um%20orçamento.",
    },
  },
  {
    slug: "vidracaria-zona-leste-sao-paulo-box-vidro-sob-medida",
    title: "Vidraçaria na Zona Leste: Box de Banheiro e Projetos em Vidro sob Medida",
    excerpt:
      "Box de banheiro, espelhos, portas e divisórias de vidro sob medida no Tatuapé, Mooca, Penha, Vila Formosa e toda a Zona Leste de São Paulo.",
    image: vidracariaZonaLeste,
    imageAlt:
      "Box de vidro instalado pela Projeto Vidros em banheiro de alto padrão na Zona Leste de São Paulo",
    date: "2026-05-15",
    author: "Projeto Vidros",
    metaDescription:
      "Vidraçaria na Zona Leste de SP: box de vidro, espelhos LED, portas, janelas e divisórias sob medida no Tatuapé, Mooca, Penha, Vila Formosa e mais.",
    content: [
      {
        type: "paragraph",
        text: "Qualidade, design e segurança para quem busca o melhor na Zona Leste de São Paulo. A Projeto Vidros, referência em vidraçaria técnica com sede no Imirim, traz para a Zona Leste toda a sua expertise em instalações de alto padrão. Se você está reformando seu apartamento no Tatuapé ou construindo sua casa no Jardim Anália Franco, nossa equipe está pronta para entregar soluções que unem estética e durabilidade.",
      },
      {
        type: "image",
        src: vidracariaZonaLeste,
        alt: "Box de vidro premium instalado em banheiro moderno na Zona Leste de São Paulo",
      },
      { type: "heading", text: "Atendimento Completo na Zona Leste" },
      {
        type: "paragraph",
        text: "Nossa logística eficiente permite atender com agilidade os principais bairros da região, garantindo prazos curtos e instalação profissional:",
      },
      {
        type: "list",
        items: [
          { strong: "Tatuapé e Jardim Anália Franco:", text: "soluções de alto padrão para apartamentos e casas." },
          { strong: "Mooca e Belém:", text: "projetos residenciais e comerciais com acabamento impecável." },
          { strong: "Vila Prudente e Vila Formosa:", text: "atendimento ágil para reformas e novas obras." },
          { strong: "Carrão e Penha:", text: "box, espelhos e divisórias sob medida com instalação limpa." },
        ],
      },
      { type: "heading", text: "Especialistas em Box de Vidro e Muito Mais" },
      {
        type: "paragraph",
        text: "O box de banheiro é o cartão de visitas do seu projeto. Trabalhamos com o que há de mais moderno para transformar seu banheiro em um verdadeiro spa:",
      },
      {
        type: "list",
        items: [
          { strong: "Box de Vidro Premium:", text: "sistemas Elegance (roldanas aparentes), Versatik (vãos amplos) e o prático Box Flex para otimização de espaços reduzidos." },
          { strong: "Espelhos de Alta Qualidade:", text: "cristais Guardian e Cebrace com acabamento bisotê e opções de Espelho com LED para iluminação perfeita." },
          { strong: "Portas e Janelas de Vidro:", text: "máxima segurança com vidro temperado ou laminado sob medida." },
          { strong: "Divisórias de Ambiente:", text: "ideal para separar cozinha e lavanderia ou criar salas privativas em escritórios." },
          { strong: "Soluções para Lojas:", text: "fachadas em vidro, vitrines e portas de loja com resistência superior." },
        ],
      },
      { type: "heading", text: "Por que escolher a Projeto Vidros?" },
      {
        type: "paragraph",
        text: "Além de sermos especialistas em vidro, investimos em tecnologia para facilitar sua vida. Nosso site possui nota máxima em SEO, garantindo que você nos encontre sempre que precisar de qualidade. Com medição técnica precisa e atendimento personalizado, cuidamos de cada detalhe do seu projeto na Zona Leste.",
      },
      { type: "heading", text: "Agende seu Orçamento na Zona Leste" },
      {
        type: "paragraph",
        text: "Transforme seu ambiente hoje mesmo com a Projeto Vidros. Clique no botão do WhatsApp e fale com nosso especialista!",
      },
    ],
    cta: {
      label: "Falar com Especialista na Zona Leste via WhatsApp",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20sobre%20a%20vidraçaria%20na%20Zona%20Leste%20e%20gostaria%20de%20um%20orçamento.",
    },
  },
  {
    slug: "vidracaria-zona-oeste-sao-paulo-projetos-vidro-design",
    title: "Vidraçaria na Zona Oeste: Projetos de Vidro e Design em Todos os Bairros",
    excerpt:
      "Divisórias para escritório, box, espelhos e portas de vidro sob medida em Pinheiros, Perdizes, Lapa, Morumbi e toda a Zona Oeste de São Paulo.",
    image: vidracariaZonaOeste,
    imageAlt:
      "Divisórias de vidro para escritório instaladas pela Projeto Vidros na Zona Oeste de São Paulo",
    date: "2026-05-15",
    author: "Projeto Vidros",
    metaDescription:
      "Vidraçaria na Zona Oeste de SP: divisórias para escritório, box, espelhos, portas e fachadas sob medida em Pinheiros, Perdizes, Lapa, Morumbi e mais.",
    content: [
      {
        type: "paragraph",
        text: "Se você está na Zona Oeste de São Paulo, sabe que a região é um dos principais eixos de inovação e sofisticação da cidade. Seja para um apartamento moderno em Perdizes, uma casa em Alto de Pinheiros ou um escritório em Pinheiros, a Projeto Vidros oferece a agilidade e a qualidade técnica que o seu projeto exige.",
      },
      {
        type: "image",
        src: vidracariaZonaOeste,
        alt: "Divisórias para escritório em vidro temperado instaladas na Zona Oeste de São Paulo",
      },
      { type: "heading", text: "Atendimento Especializado na Zona Oeste" },
      {
        type: "paragraph",
        text: "Nossa equipe atende com prontidão todos os bairros da região, garantindo medição técnica precisa e instalação limpa:",
      },
      {
        type: "list",
        items: [
          { strong: "Pinheiros, Itaim Bibi e Jardim Paulista:", text: "foco em design moderno e soluções corporativas." },
          { strong: "Perdizes, Vila Leopoldina e Lapa:", text: "ideal para quem busca renovar o lar com segurança e elegância." },
          { strong: "Butantã, Jaguaré e Rio Pequeno:", text: "atendimento ágil para residências e novos condomínios." },
          { strong: "Morumbi, Alto de Pinheiros e Barra Funda:", text: "projetos de grande porte e acabamentos premium." },
        ],
      },
      { type: "heading", text: "O que a Projeto Vidros oferece para a sua região?" },
      {
        type: "paragraph",
        text: "Levamos nosso catálogo completo de soluções em vidro temperado e laminado para toda a Zona Oeste:",
      },
      {
        type: "list",
        items: [
          { strong: "Divisórias para Escritório:", text: "a solução inteligente para dividir ambientes com elegância, garantindo isolamento acústico e um visual sofisticado." },
          { strong: "Box de Vidro para Banheiro:", text: "modelos Elegance, Versatik e o sistema Flex (articulado), perfeito para otimizar banheiros em bairros com alta densidade imobiliária." },
          { strong: "Espelhos sob Medida e LED:", text: "valorize seu ambiente com cristais de alta qualidade (Guardian e Cebrace) e iluminação integrada." },
          { strong: "Portas e Janelas de Vidro:", text: "projetos personalizados que unem segurança e estética para casas e apartamentos." },
          { strong: "Divisórias Cozinha x Lavanderia:", text: "design funcional para manter a integração dos espaços com organização." },
          { strong: "Fachadas e Portas de Loja:", text: "soluções resistentes para o comércio pulsante da Zona Oeste." },
        ],
      },
      { type: "heading", text: "Por que somos a sua melhor escolha?" },
      {
        type: "paragraph",
        text: "Diferente das lojas tradicionais, a Projeto Vidros utiliza tecnologia de ponta para garantir que seu projeto seja entregue com perfeição.",
      },
      {
        type: "paragraph",
        text: "Precisa de um orçamento para o seu imóvel na Zona Oeste? Nossos especialistas estão prontos para transformar sua ideia em realidade.",
      },
    ],
    cta: {
      label: "Falar com Especialista na Zona Oeste via WhatsApp",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20sobre%20a%20vidraçaria%20na%20Zona%20Oeste%20e%20gostaria%20de%20um%20orçamento.",
    },
  },
  {
    slug: "vidracaria-zona-norte-sao-paulo-atendimento-completo",
    title: "Vidraçaria na Zona Norte: Atendimento Completo em Todos os Bairros",
    excerpt:
      "Sediada no Imirim, a Projeto Vidros atende toda a Zona Norte de São Paulo com box, espelhos, portas, divisórias e fachadas sob medida.",
    image: vidracariaZonaNorte,
    imageAlt:
      "Vidraçaria na Zona Norte de São Paulo - Projeto Vidros com atendimento em todos os bairros",
    date: "2026-05-15",
    author: "Projeto Vidros",
    metaDescription:
      "Vidraçaria na Zona Norte de SP: box de vidro, espelhos, portas, divisórias e fachadas sob medida. Atendimento em Santana, Tucuruvi, Imirim, Freguesia do Ó e mais.",
    content: [
      {
        type: "paragraph",
        text: "Se você está buscando uma vidraçaria que combine precisão técnica, materiais de primeira linha e um atendimento que realmente entende a dinâmica de São Paulo, a Projeto Vidros é a sua parceira ideal.",
      },
      {
        type: "paragraph",
        text: "Com sede estrategicamente localizada no Imirim, nossa equipe circula diariamente por toda a Zona Norte, levando soluções sob medida para residências, condomínios e comércios.",
      },
      {
        type: "image",
        src: vidracariaZonaNorte,
        alt: "Vidraçaria na Zona Norte com atendimento completo em todos os bairros",
      },
      { type: "heading", text: "Onde Atendemos na Zona Norte?" },
      {
        type: "paragraph",
        text: "Não importa se você está em um apartamento moderno ou em uma casa tradicional, nós chegamos com agilidade aos principais bairros da região, como:",
      },
      {
        type: "list",
        items: [
          { strong: "Santana e Jardim São Paulo:", text: "atendimento ágil em prédios residenciais e comerciais." },
          { strong: "Tucuruvi e Parada Inglesa:", text: "instalações em casas e apartamentos de médio e alto padrão." },
          { strong: "Vila Guilherme e Vila Maria:", text: "soluções para residências e comércios da região." },
          { strong: "City América e Parque Toronto:", text: "especialistas em condomínios como o Unique Green." },
          { strong: "Freguesia do Ó e Limão:", text: "box, espelhos e portas sob medida." },
          { strong: "Lauzane Paulista e Mandaqui:", text: "projetos residenciais com acabamento premium." },
        ],
      },
      { type: "heading", text: "O que a Projeto Vidros faz por você?" },
      {
        type: "paragraph",
        text: "Nossa especialidade é transformar o vidro em um elemento de segurança, design e funcionalidade. Confira nossa linha completa de serviços:",
      },
      {
        type: "list",
        items: [
          { strong: "Box de Vidro para Banheiro:", text: "do padrão ao luxo, incluindo os sistemas Elegance, Versatik e o prático Box Flex (articulado) para otimização de espaço." },
          { strong: "Espelhos sob Medida:", text: "cristais de alta qualidade (Guardian e Cebrace) com lapidação de precisão, acabamento bisotê e os modernos Espelhos com LED." },
          { strong: "Portas e Janelas de Vidro:", text: "projetos em vidro temperado ou laminado que garantem isolamento e elegância." },
          { strong: "Divisórias de Ambiente:", text: "ideais para separar Cozinha x Lavanderia ou criar Divisórias para Escritório com um visual clean." },
          { strong: "Comercial e Fachadas:", text: "projetamos e instalamos Fachadas de Loja e Portas de Vidro de alta resistência para o seu negócio." },
        ],
      },
      { type: "heading", text: "Por que nos escolher?" },
      {
        type: "paragraph",
        text: "Diferente das lojas que estão paradas no tempo, a Projeto Vidros investe em tecnologia — desde a medição a laser até o nosso site (que possui nota máxima de performance no Google). Isso se traduz em um serviço mais rápido, limpo e com a confiança de quem tem 5 estrelas de avaliação pelos próprios vizinhos da Zona Norte.",
      },
      {
        type: "paragraph",
        text: "Precisa de um orçamento para o seu projeto? Não importa o bairro, nossa equipe técnica está pronta para te atender.",
      },
    ],
    cta: {
      label: "Falar com Especialista no WhatsApp",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20sobre%20a%20vidraçaria%20na%20Zona%20Norte%20e%20gostaria%20de%20um%20orçamento.",
    },
  },
  {
    slug: "espelhos-decorativos-banheiro-amplitude-qualidade",
    title:
      "Espelhos Decorativos e para Banheiro: Amplitude e Qualidade Superior em Cada Detalhe",
    excerpt:
      "Cristais Guardian e Cebrace nas espessuras 4mm, 5mm e 6mm. Lapidação, bisotê e LED sob medida para banheiros, salas e halls em São Paulo.",
    image: espelhoCapa,
    imageAlt:
      "Espelho decorativo sob medida em sala de jantar com cristal Guardian instalado pela Projeto Vidros",
    date: "2026-05-05",
    author: "Projeto Vidros",
    metaDescription:
      "Espelhos decorativos e para banheiro sob medida em São Paulo. Cristais Guardian e Cebrace 4mm, 5mm e 6mm com lapidação, bisotê e LED. Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "Seja para ampliar uma sala de jantar ou para transformar o visual do seu banheiro, a escolha do espelho certo vai muito além da estética. Na Projeto Vidros, acreditamos que a durabilidade e a nitidez do reflexo dependem diretamente da procedência do cristal.",
      },
      { type: "heading", text: "As Melhores Marcas do Mercado" },
      {
        type: "paragraph",
        text: "Para garantir que seu espelho não apresente manchas ou distorções com o passar do tempo, trabalhamos exclusivamente com as marcas líderes mundiais: Guardian e Cebrace. Esses fabricantes são referência em resistência à oxidação, o que é fundamental, especialmente para espelhos de banheiro que ficam expostos à umidade constante.",
      },
      {
        type: "image",
        src: espelhoPainelSala,
        alt: "Painel de espelhos decorativos em hall de entrada com acabamento bisotê",
      },
      { type: "heading", text: "Espessuras para Cada Projeto" },
      {
        type: "paragraph",
        text: "Cada ambiente exige uma resistência específica para garantir a segurança e o alinhamento perfeito da peça:",
      },
      {
        type: "list",
        items: [
          { strong: "4mm:", text: "Ideal para espelhos menores ou colados diretamente em painéis de madeira." },
          { strong: "5mm:", text: "A espessura mais versátil, oferecendo excelente equilíbrio entre peso e resistência para a maioria dos projetos residenciais." },
          { strong: "6mm:", text: "Recomendada para espelhos de grandes dimensões ou fixados com botões, garantindo uma planicidade impecável e maior segurança estrutural." },
        ],
      },
      {
        type: "image",
        src: espelhoPainelHall,
        alt: "Painel de espelhos em hall de elevador com cristal de alta qualidade",
      },
      { type: "heading", text: "Transforme seu Banheiro e sua Casa" },
      {
        type: "paragraph",
        text: "Nossos espelhos para banheiro podem ser personalizados com lapidação, bisotê ou iluminação LED, sempre respeitando as medidas exatas do seu espaço. Já para as áreas decorativas, como salas e halls, projetamos painéis que levam sofisticação e claridade para todo o imóvel.",
      },
      {
        type: "image",
        src: espelhoBanheiroLed,
        alt: "Espelho de banheiro com iluminação LED retroiluminada instalado pela Projeto Vidros",
      },
      {
        type: "image",
        src: espelhoLapidado,
        alt: "Espelho de banheiro com acabamento em lapidação reta",
      },
      {
        type: "image",
        src: espelhoBizote,
        alt: "Espelho de banheiro com acabamento bisotê e bordas chanfradas",
      },
      { type: "heading", text: "Por que escolher a Projeto Vidros em São Paulo?" },
      {
        type: "paragraph",
        text: "Combinamos a experiência de quem domina o mercado técnico com a utilização de materiais premium. Além da instalação especializada, oferecemos consultoria para definir qual a melhor marca e espessura para a sua necessidade específica.",
      },
      {
        type: "paragraph",
        text: "Quer valorizar seu ambiente com o melhor espelho de São Paulo? Entre em contato agora pelo WhatsApp: (11) 91548-5945 e solicite seu orçamento com a equipe da Projeto Vidros!",
      },
    ],
    cta: {
      label: "FALAR COM UM PROJETISTA NO WHATSAPP",
      href: "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20espelhos%20sob%20medida.",
    },
  },
  {
    slug: "box-flex-articulado-banheiros-pequenos-sao-paulo",
    title:
      "Box Flex Articulado: A Solução Inteligente para Banheiros Pequenos em São Paulo",
    excerpt:
      "Vão estreito? O Box Flex Articulado abre até 90% do espaço com vidro temperado 8mm e película de segurança. Ideal para apartamentos compactos.",
    image: flexFechado,
    imageAlt:
      "Box Flex Articulado com vidro temperado e ferragens pretas instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-04",
    author: "Projeto Vidros",
    metaDescription:
      "Box Flex Articulado da Projeto Vidros: solução para banheiros pequenos em São Paulo. Abertura de até 90% do vão, vidro 8mm e película de segurança.",
    content: [
      {
        type: "paragraph",
        text: "Você já desistiu de ter um box de vidro porque o vão do seu banheiro é muito estreito? Se o espaço para entrada é menor que 1 metro, o box de correr tradicional acaba roubando metade da passagem, tornando o banho desconfortável.",
      },
      {
        type: "paragraph",
        text: "Para resolver esse problema, a Projeto Vidros traz o Box Flex (ou Box Articulado), a tecnologia que está revolucionando os apartamentos compactos e reformas inteligentes.",
      },
      {
        type: "image",
        src: flexSemBox,
        alt: "Banheiro compacto antes da instalação do Box Flex, com vão estreito e área de banho aberta",
      },
      { type: "heading", text: "O que é o Box Flex?" },
      {
        type: "paragraph",
        text: "Diferente dos modelos de correr, o Box Flex funciona com um sistema de dobradiças centrais. Isso permite que as folhas de vidro se dobrem uma sobre a outra, garantindo uma abertura de até 90% do vão. Se você tem um espaço de 80cm, terá quase 80cm livres para passar!",
      },
      {
        type: "image",
        src: flexFechado,
        alt: "Box Flex Articulado fechado, mostrando o design clean sem trilho superior",
      },
      {
        type: "heading",
        text: "Por que escolher o Box Articulado da Projeto Vidros?",
      },
      {
        type: "list",
        items: [
          {
            strong: "Ganho de Espaço Real:",
            text: "Ideal para vãos a partir de 60cm, onde nenhum outro box funciona com eficiência.",
          },
          {
            strong: "Segurança em Primeiro Lugar:",
            text: "Utilizamos vidro temperado de 8mm e, como padrão da nossa empresa, aplicamos a película de segurança anti-estilhaço.",
          },
          {
            strong: "Design Sem Trilho Superior:",
            text: "O visual é extremamente moderno e clean, pois não utiliza aquela barra de alumínio no topo, deixando o banheiro com aspecto mais amplo.",
          },
          {
            strong: "Suavidade no Uso:",
            text: "As dobradiças de metal nobre garantem que o abrir e fechar seja silencioso e leve.",
          },
        ],
      },
      {
        type: "image",
        src: flexAberto,
        alt: "Box Flex Articulado aberto, com as folhas de vidro dobradas liberando até 90% do vão",
      },
      { type: "heading", text: "Banheiro SPA e Conforto" },
      {
        type: "paragraph",
        text: "O Box Flex não é apenas funcional; ele é elegante. Ao eliminar os trilhos pesados, você ganha um ambiente com estética minimalista. Além disso, a vedação técnica da Projeto Vidros garante que a água fique exatamente onde deve: dentro da área de banho.",
      },
      { type: "heading", text: "Atendimento em São Paulo" },
      {
        type: "paragraph",
        text: "Se você mora na capital ou região metropolitana e precisa otimizar o espaço do seu banheiro com qualidade técnica e segurança, a Projeto Vidros é especialista na instalação de modelos articulados.",
      },
      {
        type: "paragraph",
        text: "Deseja um orçamento para o seu Box Flex? Fale agora com nossa equipe pelo WhatsApp (11) 91548-5945 ou visite nosso portfólio no site!",
      },
    ],
    cta: {
      label: "FALAR COM UM PROJETISTA NO WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
  {
    slug: "box-banheiro-beleza-seguranca-familia",
    title:
      "🛡️ Box de Banheiro: A Beleza que você quer com a Segurança que sua família precisa",
    excerpt:
      "Box até o teto, Kit Reto e a tecnologia BOX + SEGURO: como unir alto padrão e proteção real contra acidentes em São Paulo.",
    image: bannerBoxSeguro,
    imageAlt:
      "Box de banheiro com vidro temperado e película BOX + SEGURO instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Box de banheiro até o teto com Kit Reto e película BOX + SEGURO: alto padrão e segurança real contra acidentes. Atendimento em toda São Paulo.",
    content: [
      {
        type: "paragraph",
        text: "Ter um banheiro moderno, com um Box até o Teto e ferragens de alto padrão como o Kit Reto, é o sonho de muitos moradores em São Paulo. Mas, além da estética, existe um fator que não pode ser deixado de lado: a segurança real contra acidentes.",
      },
      {
        type: "heading",
        text: "Por que a película BOX + SEGURO é indispensável?",
      },
      {
        type: "paragraph",
        text: "Mesmo o vidro temperado sendo muito resistente, em caso de uma quebra rara por impacto ou torção, os cacos podem se espalhar, causando riscos de cortes. É aqui que entra a nossa tecnologia BOX + SEGURO.",
      },
      {
        type: "paragraph",
        text: "Ao instalar a película BOX + SEGURO, garantimos que:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Zero queda de vidro:",
            text: "Em caso de quebra, os cacos ficam totalmente presos na película, mantendo a estrutura no lugar até a troca.",
          },
          {
            strong: "Proteção Invisível:",
            text: "Ela não altera a transparência ou a beleza do seu vidro; você nem percebe que ela está lá.",
          },
          {
            strong: "Tranquilidade Total:",
            text: "Ideal para casas com crianças, idosos ou pets, onde a segurança não pode ser negociada.",
          },
        ],
      },
      {
        type: "heading",
        text: "Atendimento Exclusivo em São Paulo",
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, somos especialistas em levar essa tecnologia para as regiões mais exigentes de SP. Se você mora no Itaim Bibi, Moema, Pinheiros, Alphaville, Pacaembu ou em qualquer bairro da Zona Norte (como Imirim e Santana), nós vamos até você para realizar a medição técnica e a instalação profissional.",
      },
      {
        type: "paragraph",
        text: "Não transforme seu momento de relaxamento em uma preocupação. Escolha o box mais seguro do mercado com acabamento premium.",
      },
    ],
    cta: {
      label: "QUERO O BOX MAIS SEGURO – ORÇAMENTO VIA WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
  {
    slug: "box-ate-o-teto-efeito-spa",
    title: "Box até o Teto: Transforme seu Banheiro em um SPA Particular",
    excerpt:
      "Descubra como o box até o teto retém o calor, evita o mofo e traz sofisticação absoluta para o seu projeto.",
    image: boxAteTeto,
    imageAlt:
      "Box de banheiro até o teto com ferragens cromadas Kit Reto instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Saiba por que o box até o teto é a maior tendência para banheiros de luxo em SP. Conforto térmico e design exclusivo pela Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "Você já sentiu aquele choque térmico ao sair do banho em um dia frio? O segredo dos projetos de alto padrão no Itaim e em Alphaville para resolver isso é o Box até o Teto.",
      },
      { type: "heading", text: "Conforto Térmico e Higiene" },
      {
        type: "list",
        items: [
          {
            strong: "Efeito Sauna:",
            text: "Ao fechar o vão até o teto, o vapor fica retido, mantendo a temperatura agradável durante todo o banho.",
          },
          {
            strong: "Adeus ao Mofo:",
            text: "O vapor não se espalha pelo banheiro, preservando a pintura e os móveis do ambiente.",
          },
        ],
      },
      { type: "heading", text: "Estética Minimalista" },
      {
        type: "paragraph",
        text: "Utilizando ferragens modernas como o Kit Reto, o visual fica limpo e sofisticado, ideal para quem busca um design clean e contemporâneo.",
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, realizamos a medição técnica precisa para que o fechamento seja perfeito, garantindo segurança e beleza em toda a Zona Norte e regiões nobres de São Paulo.",
      },
    ],
    cta: {
      label: "QUERO MEU BOX ATÉ O TETO – ORÇAMENTO VIA WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
  {
    slug: "kit-reto-rose-design-exclusivo",
    title: "Kit Reto Rose: O Design do Futuro para seu Banheiro",
    excerpt:
      "Conheça o luxo do acabamento Rose com altura fora de padrão de 2,10m. Elegância e linhas minimalistas que arquitetos amam.",
    image: kitRetoRose,
    imageAlt: "Box com Kit Reto Rose e altura personalizada de 2,10m",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Box com Kit Reto Rose em São Paulo. Altura personalizada de 2,10m para um visual clean e elegante. Projetos exclusivos Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "Se você busca fugir do comum, o Kit Reto Rose é a escolha ideal. Com linhas minimalistas e um acabamento sofisticado, ele transforma o visual do banheiro em um ambiente de revista.",
      },
      { type: "heading", text: "Altura fora de padrão: O diferencial de 2,10m" },
      {
        type: "paragraph",
        text: "Diferente dos boxes convencionais, este projeto da Projeto Vidros foi executado com 2,10m de altura. Essa medida personalizada traz uma imponência maior ao espaço e um acabamento muito mais harmônico com o revestimento do banheiro.",
      },
      { type: "heading", text: "Por que arquitetos amam o Kit Reto?" },
      {
        type: "list",
        items: [
          {
            strong: "Visual Clean:",
            text: "Ferragens com linhas retas que trazem modernidade absoluta.",
          },
          {
            strong: "Acabamento Premium:",
            text: "O tom Rose Gold é tendência em decorações de alto padrão em bairros como Itaim Bibi e Moema.",
          },
          {
            strong: "Personalização Técnica:",
            text: "Executamos projetos sob medida que fogem das medidas padrão de mercado.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, somos especialistas em tirar do papel esses projetos que exigem precisão técnica e um olhar atento ao design.",
      },
    ],
    cta: {
      label: "CONSULTAR MODELOS E PREÇOS",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20sobre%20o%20Kit%20Reto%20Rose%20de%202,10m.%20Gostaria%20de%20um%20orçamento.",
    },
  },
  {
    slug: "divisoria-versatik-truck-unique-green",
    title: "Divisória de Cozinha: 66% de Abertura e Vão Livre no Unique Green",
    excerpt:
      "Veja como instalamos uma porta de 3 folhas com sistema Versatik Truck, garantindo passagem livre e design integrado.",
    image: divisoriaUniqueDepois,
    imageAlt:
      "Porta divisória de cozinha em vidro pontilhado no condomínio Unique Green",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Instalação de divisória Versatik Truck no Unique Green. Vidro pontilhado 8mm, perfil cinza fosco e sistema sem trilho inferior.",
    content: [
      {
        type: "paragraph",
        text: "Em apartamentos modernos como os do Condomínio Unique Green, otimizar o espaço entre a cozinha e a lavanderia é essencial. Recentemente, entregamos uma solução que une funcionalidade extrema e estética.",
      },
      {
        type: "image",
        src: divisoriaUniqueAntes,
        alt: "Cozinha do Unique Green antes da instalação da divisória de vidro",
      },
      { type: "heading", text: "O Sistema Versatik Truck Acesso Livre" },
      {
        type: "paragraph",
        text: "O grande diferencial deste projeto é o uso do Kit Versatik Truck. Esse sistema permite dividir o vão em 3 folhas de vidro, onde as portas correm de forma simultânea. Isso proporciona uma abertura de 66% da passagem, ideal para vãos menores.",
      },
      {
        type: "image",
        src: divisoriaUniqueDepois,
        alt: "Divisória Versatik Truck em vidro pontilhado instalada no Unique Green",
      },
      { type: "heading", text: "Segurança e Estética" },
      {
        type: "list",
        items: [
          {
            strong: "Sem trilhos no chão:",
            text: "O sistema Acesso Livre elimina trilhos inferiores, evitando tropeços e facilitando a limpeza.",
          },
          {
            strong: "Design Integrado:",
            text: "Utilizamos o acabamento Cinza Fosco para combinar perfeitamente com os móveis planejados do cliente.",
          },
          {
            strong: "Privacidade:",
            text: "O vidro temperado pontilhado de 8mm garante a divisão visual sem barrar a entrada de luz natural.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, focamos em ferragens premium que resolvem problemas de espaço com elegância. Atendemos toda a região de Pirituba e arredores com medição técnica especializada.",
      },
    ],
    cta: {
      label: "QUERO UMA DIVISÓRIA ASSIM – WHATSAPP",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20da%20porta%20no%20Unique%20Green%20e%20queria%20um%20orçamento%20parecido.",
    },
  },
  {
    slug: "espelho-sob-medida-hall-entrada",
    title: "Espelho no Hall de Entrada: Amplitude e Iluminação Imediata",
    excerpt:
      "Veja como um espelho 4mm lapidado sob medida transformou o hall de entrada deste apartamento, trazendo sofisticação e profundidade.",
    image: espelhoHall,
    imageAlt: "Espelho 4mm lapidado instalado em hall de entrada sob medida",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Benefícios do espelho sob medida no hall de entrada. Instalação de espelho 4mm lapidado em São Paulo pela Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "O hall de entrada é o cartão de visitas da sua casa. Muitas vezes negligenciado, esse espaço pode ganhar vida nova com o uso estratégico de espelhos sob medida.",
      },
      {
        type: "image",
        src: espelhoHallAntes,
        alt: "Hall de entrada antes da instalação do espelho sob medida",
      },
      { type: "heading", text: "Por que investir em um espelho no Hall?" },
      {
        type: "list",
        items: [
          {
            strong: "Sensação de Amplitude:",
            text: "O espelho 'dobra' o tamanho do ambiente, ideal para corredores e halls estreitos.",
          },
          {
            strong: "Mais Iluminação:",
            text: "Ele reflete a luz natural e artificial, deixando todo o apartamento mais claro e convidativo.",
          },
          {
            strong: "Funcionalidade:",
            text: "O famoso 'check-up' visual antes de sair de casa.",
          },
        ],
      },
      {
        type: "image",
        src: espelhoHall,
        alt: "Hall de entrada depois da instalação do espelho 4mm lapidado sob medida",
      },
      { type: "heading", text: "Qualidade Projeto Vidros" },
      {
        type: "paragraph",
        text: "Neste projeto, utilizamos um espelho de 4mm com acabamento lapidado, cortado exatamente de acordo com o vão do cliente. O resultado é um encaixe perfeito que se integra à arquitetura do imóvel.",
      },
      {
        type: "paragraph",
        text: "Atendemos toda a capital de São Paulo com medição técnica para garantir que o seu projeto saia do papel com a máxima precisão.",
      },
    ],
    cta: {
      label: "SOLICITAR ORÇAMENTO DE ESPELHO",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20do%20espelho%20no%20hall%20e%20gostaria%20de%20um%20orçamento%20sob%20medida.",
    },
  },
  {
    slug: "guia-completo-box-banheiro-ideal",
    title: "Guia Completo: Como Escolher o Box de Banheiro Ideal para sua Casa",
    excerpt:
      "Espaço, funcionalidade e segurança: veja como escolher o box certo para o seu banheiro com 30 anos de experiência da Projeto Vidros.",
    image: guiaBoxPisoTeto,
    imageAlt:
      "Box de banheiro do piso ao teto com perfil preto instalado pela Projeto Vidros",
    date: "2026-05-03",
    author: "Projeto Vidros",
    metaDescription:
      "Guia completo para escolher o box de banheiro ideal: Flex, Transfer, Abrir, Correr, Piso ao Teto, Elegance e Canto. Consultoria Projeto Vidros em SP.",
    content: [
      {
        type: "paragraph",
        text: "Escolher o box de banheiro vai muito além da estética. É uma decisão que envolve aproveitamento de espaço, funcionalidade e, acima de tudo, a segurança da sua família. Com 30 anos de experiência no mercado, nós da Projeto Vidros preparamos este guia para ajudar você a entender qual modelo se adapta melhor ao seu projeto.",
      },
      { type: "heading", text: "1. Pequenos Vãos (até 1,00m de largura)" },
      {
        type: "paragraph",
        text: "Para banheiros compactos, cada centímetro conta. Se o seu espaço é limitado, estas são as melhores opções:",
      },
      {
        type: "image",
        src: guiaBoxFlex,
        alt: "Box Flex articulado para pequenos espaços",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Flex (Articulado):",
            text: "É o campeão de abertura, proporcionando até 90% de passagem livre no vão. Ideal para quem precisa de acessibilidade e conforto em espaços reduzidos.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxTransfer,
        alt: "Box Versatik Transfer com 3 folhas e abertura de 66% do vão",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Versatik Transfer (3 Folhas):",
            text: "Uma excelente alternativa para quem não gosta do modelo articulado. Com 1 folha fixa e 2 de correr simultâneas, ele oferece 66% de abertura, unindo modernidade e praticidade.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxAbrir,
        alt: "Box de abrir tradicional com porta de 55cm",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box de Abrir Tradicional:",
            text: "Composto por uma parte fixa e uma porta de abrir de 55 cm, é uma das opções mais tradicionais e escolhidas pelo excelente custo-benefício.",
          },
        ],
      },
      { type: "heading", text: "2. Vãos Frontais (acima de 0,90m de largura)" },
      {
        type: "paragraph",
        text: "Para vãos padrão, o modelo de correr é o mais indicado pela sua durabilidade e facilidade de uso.",
      },
      {
        type: "image",
        src: guiaBoxFrontal,
        alt: "Box frontal de correr com Kit Reto branco instalado pela Projeto Vidros",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Tradicional de Correr:",
            text: "O modelo mais utilizado nos lares brasileiros, com 1 folha fixa e 1 de correr.",
          },
          {
            strong: "Design do Kit:",
            text: "Você pode optar pelo Kit Redondo (estilo clássico) ou pelo atual Kit Reto, que traz linhas minimalistas e modernas para o ambiente.",
          },
        ],
      },
      { type: "heading", text: "3. Soluções específicas e design premium" },
      {
        type: "paragraph",
        text: "Se você busca um diferencial estético ou funcional, considere estes modelos:",
      },
      {
        type: "image",
        src: guiaBoxPisoTeto,
        alt: "Box do piso ao teto com perfil preto criando efeito SPA",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box do Piso ao Teto:",
            text: "O queridinho dos arquitetos. Indicado para banheiros com janela dentro da área de banho, ele retém o vapor, evita a umidade no restante do banheiro e protege seus móveis e teto, criando uma verdadeira experiência de SPA.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxElegance,
        alt: "Box Elegance com roldanas aparentes em acabamento preto",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Elegance:",
            text: "Para quem busca sofisticação, o modelo com roldanas aparentes é uma escolha robusta e muito elegante.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxCanto,
        alt: "Box de canto em L com perfil preto e Kit Reto",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box de Canto (ou em L):",
            text: "A solução inteligente para banheiros menores que exigem o aproveitamento máximo da área disponível.",
          },
        ],
      },
      { type: "heading", text: "4. O diferencial de segurança Projeto Vidros" },
      {
        type: "paragraph",
        text: "Independente do modelo escolhido, a segurança não é opcional. Na Projeto Vidros, somos referência no uso da película anti-estilhaço. Em caso de quebra, os fragmentos de vidro ficam presos à película, evitando acidentes e garantindo a tranquilidade da sua casa.",
      },
      { type: "heading", text: "Dúvidas na escolha?" },
      {
        type: "paragraph",
        text: "Aqui na Projeto Vidros, nossos projetistas estão prontos para oferecer uma consultoria técnica e orientar você na melhor escolha para o seu espaço.",
      },
    ],
    cta: {
      label: "FALAR COM UM PROJETISTA NO WHATSAPP",
      href: "https://wa.me/5511915485945?text=Olá,%20li%20o%20guia%20de%20box%20de%20banheiro%20e%20gostaria%20de%20uma%20consultoria%20com%20um%20projetista.",
    },
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
