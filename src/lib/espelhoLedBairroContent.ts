// Variação estável por bairro, compartilhada pela página e pelos metadados pré-gerados.
export const LED_BAIRRO_DESCRICOES = [
  (nome: string) => `Espelhos com LED sob medida em ${nome} valorizam banheiros e lavabos. Conheça modelos orgânicos e retos com iluminação personalizada e acionamento Touch ou sensor. Solicite um projeto para seu espaço.`,
  (nome: string) => `Procurando espelho com LED em ${nome}? Escolha um formato sob medida, luz quente, neutra ou fria e opções práticas de acionamento. A Projeto Vidros ajuda a definir a solução ideal para o seu ambiente.`,
  (nome: string) => `Os espelhos orgânicos com LED trazem contornos fluidos e iluminação indireta para banheiros e lavabos em ${nome}. Veja os modelos da Projeto Vidros e peça um orçamento para a sua medida.`,
  (nome: string) => `Espelhos LED retos em ${nome}: formatos retangulares, quadrados ou ovais para banheiros e espaços de maquiagem. Combine iluminação frontal ou traseira com o acabamento que combina com seu projeto.`,
  (nome: string) => `Seu projeto em ${nome} pode ganhar um espelho LED feito sob medida. A Projeto Vidros oferece formatos orgânicos e retos, com escolhas de iluminação e acionamento para diferentes ambientes.`,
  (nome: string) => `Espelhos com LED em ${nome} unem reflexão e iluminação no mesmo projeto. Compare modelos orgânicos e retos, luz frontal ou traseira, e escolha a peça mais adequada ao seu espaço.`,
  (nome: string) => `Precisa de um espelho LED em ${nome}? Descubra modelos sob medida para banheiro, lavabo ou sala e converse com a Projeto Vidros sobre formato, medidas e iluminação.`,
  (nome: string) => `Para banheiros em ${nome}, um espelho com LED pode unir luz confortável e praticidade. Consulte opções de iluminação indireta, acionamento Touch e desembaçador conforme o modelo escolhido.`,
  (nome: string) => `Um espelho retroiluminado transforma o lavabo em ${nome}. Explore formatos orgânicos e retos, iluminação em tons diferentes e dimensões pensadas para a sua bancada.`,
  (nome: string) => `Espelho com LED sob medida em ${nome}: encontre o equilíbrio entre acabamento, iluminação e funcionalidade. Solicite um orçamento de modelo orgânico ou reto para o seu ambiente.`,
];

export function pickLedBairroDescricao(slug: string, nome: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return LED_BAIRRO_DESCRICOES[hash % LED_BAIRRO_DESCRICOES.length](nome);
}

export const ledBairroTitle = (nome: string) => `Espelhos com LED em ${nome} sob Medida | Projeto Vidros`;