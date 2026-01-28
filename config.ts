
/**
 * ARQUIVO DE CONFIGURAÇÃO CENTRAL
 * 
 * Ajustado para evitar erros de construção de URL em ambientes restritos.
 */

export const CONFIG = {
  // Configurações do Negócio/Autor
  author: {
    name: "Rodrigo Veiga",
    title: "Especialista em SEO Local",
    // Caminho relativo simples que o navegador resolve a partir da raiz
    image: "autor.jpg", 
    bio: [
      "Olá, eu sou Rodrigo Veiga. Nos últimos 10 anos, ajudei centenas de pequenos e médios negócios a saírem do completo anonimato digital para se tornarem líderes em suas regiões.",
      "Percebi um padrão: a maioria dos empresários excelentes (como você) tem produtos incríveis, mas falham na hora de serem encontrados. Eles deixam dinheiro na mesa todos os dias para concorrentes que apenas 'sabem jogar o jogo'.",
      "Desenvolvi o Método Você no Topo do Google™ para ser o caminho definitivo que eu gostaria de ter tido quando comecei. Sem jargões técnicos complicados, sem promessas vazias. Apenas estratégia pura, aplicada e validada."
    ],
    quote: "Minha missão é democratizar o acesso ao topo das pesquisas. Seu negócio merece ser visto."
  },

  // Configurações Visuais
  images: {
    // Caminho relativo direto para o arquivo que está na raiz do seu repositório
    heroBackground: "header.jpg",
  },

  // Links de Conversão
  links: {
    whatsapp: "https://wa.me/5521985899548?text=Olá! Gostaria de saber mais sobre o Método Você no Topo do Google."
  }
};
