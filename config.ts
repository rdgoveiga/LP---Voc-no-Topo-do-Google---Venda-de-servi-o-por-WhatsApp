
/**
 * ARQUIVO DE CONFIGURAÇÃO CENTRAL
 */

export const CONFIG = {
  // Configurações do Negócio/Autor
  author: {
    name: "Rodrigo Veiga",
    title: "Estrategista Digital",
    image: "https://lpgmn-assets.vercel.app/images/autor.webp", 
    bio: [
      "Olá, eu sou Rodrigo Veiga. Nos últimos 10 anos, ajudei centenas de pequenas, médias e grandes empresas a saírem do completo anonimato digital para se tornarem líderes em suas regiões.",
      "Percebi um padrão: a maioria dos empresários excelentes (como você) tem serviços/produtos incríveis, mas falham na hora de serem encontrados. Eles deixam dinheiro na mesa todos os dias para concorrentes que apenas 'sabem jogar o jogo'.",
      "Desenvolvi o **Método Você no Topo do Google** para ser o caminho definitivo que eu gostaria de ter tido quando comecei. Sem jargões técnicos complicados, sem promessas vazias. Apenas estratégia pura, aplicada e validada."
    ],
    authorQuote: "Minha missão é democratizar o acesso ao topo das pesquisas. Seu negócio merece ser visto.",
    // A propriedade abaixo foi mantida como 'quote' para compatibilidade com o componente Author.tsx
    quote: "Minha missão é democratizar o acesso ao topo das pesquisas. Seu negócio merece ser visto."
  },

  // Configurações do Meta (Facebook)
  meta: {
    pixelId: "1125948262882408",
    accessToken: "EAAl7vzG21UoBQnwpSotxZAdZAYcoyVkyHz2muFevxJv5ldvVsZAfetXCmOGK2wNt7b2eO2fy3MFsCK4BO1JgxrfnpB5WCEtqZCFwjq7kIZAZBIzsOzR3ZB0TV11i2J6xi71p4lK8h5xZCb8YCtsuLBLimxSXCOeR131C9JSHql3R2gzJJhSLR7WjMyPeZCfLZCgQZDZD",
    testEventCode: "TEST14315" 
  },

  // Configurações Visuais
  images: {
    heroBackground: "https://lpgmn-assets.vercel.app/images/hero.webp",
  },

  // Links de Conversão
  links: {
    whatsapp: "https://wa.me/5521985899548?text=Oi%20Rodrigo%2C%20vi%20o%20seu%20site%20e%20quero%20saber%20se%20minha%20empresa%20consegue%20chegar%20no%20Top%201%20da%20minha%20regi%C3%A3o.%20Como%20funciona%20o%20diagn%C3%B3stico%3F",
    webhookUrl: "https://script.google.com/macros/s/AKfycbwGsmaRHksfCJyYDE01GNVPI0vYGf74ZdyXvL5kaqTh4k1RwX3IeFTw1EcOvXbH18v6IQ/exec" // Novo webhook do Google Sheets do usuário
  }
};
