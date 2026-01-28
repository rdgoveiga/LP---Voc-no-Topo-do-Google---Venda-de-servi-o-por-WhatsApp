
/**
 * ARQUIVO DE CONFIGURAÇÃO CENTRAL
 * 
 * Para alterar as imagens via GitHub:
 * 1. Faça o upload das suas imagens para a pasta raiz do projeto.
 * 2. Certifique-se de que os nomes dos arquivos sejam exatamente:
 *    - header.jpg (para o topo/fundo principal)
 *    - autor.jpg (para a sua foto na seção do autor)
 * 3. IMPORTANTE: O nome deve ser minúsculo e a extensão .jpg
 */

export const CONFIG = {
  // Configurações do Negócio/Autor
  author: {
    name: "Rodrigo Veiga",
    title: "Especialista em SEO Local",
    // Busca o arquivo autor.jpg na raiz do site
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
    // Busca o arquivo header.jpg na raiz do site
    heroBackground: "header.jpg",
  },

  // Links de Conversão
  links: {
    whatsapp: "https://wa.me/5521985899548?text=Olá! Gostaria de saber mais sobre o Método Você no Topo do Google."
  }
};
