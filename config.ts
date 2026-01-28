
/**
 * ARQUIVO DE CONFIGURAÇÃO CENTRAL
 * 
 * Para evitar que o site "quebre", usamos strings para os caminhos das imagens.
 * Se você subir os arquivos 'header.jpg' e 'autor.jpg' para a pasta raiz, 
 * eles serão priorizados automaticamente.
 */

export const CONFIG = {
  // Configurações do Negócio/Autor
  author: {
    name: "Rodrigo Veiga",
    title: "Especialista em SEO Local",
    // Caminho para sua foto local
    image: "autor.jpg", 
    // Foto profissional de fallback (caso a sua não seja encontrada)
    fallbackImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
    bio: [
      "Olá, eu sou Rodrigo Veiga. Nos últimos 10 anos, ajudei centenas de pequenos e médios negócios a saírem do completo anonimato digital para se tornarem líderes em suas regiões.",
      "Percebi um padrão: a maioria dos empresários excelentes (como você) tem produtos incríveis, mas falham na hora de serem encontrados. Eles deixam dinheiro na mesa todos os dias para concorrentes que apenas 'sabem jogar o jogo'.",
      "Desenvolvi o Método Você no Topo do Google™ para ser o caminho definitivo que eu gostaria de ter tido quando comecei. Sem jargões técnicos complicados, sem promessas vazias. Apenas estratégia pura, aplicada e validada."
    ],
    quote: "Minha missão é democratizar o acesso ao topo das pesquisas. Seu negócio merece ser visto."
  },

  // Configurações Visuais
  images: {
    heroBackground: "header.jpg",
    // Fundo de alta qualidade (caso o seu não seja encontrado)
    heroFallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },

  // Links de Conversão
  links: {
    whatsapp: "https://wa.me/5521985899548?text=Olá! Gostaria de saber mais sobre o Método Você no Topo do Google."
  }
};
