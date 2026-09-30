/**
 * CONFIGURAÇÃO GERAL DA HAMBURGUERIA
 */

export interface BurgerItem {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
}

export const BURGER_CONFIG = {
  brandName: "BURGER HOUSE",
  tagline: "Burger artesanal. Sabor de verdade.",
  whatsappRaw: "5534999999999", // Apenas dígitos para o link
  whatsappMessage: "Olá! Vim pelo site e gostaria de fazer um pedido 🍔",
  instagramUrl: "https://instagram.com/burgerhouse",
  address: "Av. Gastronômica, 1420 • Bairro Nobre",
  openingHours: "Terça a Domingo • 18:30 às 23:45",
  
  // Logotipo oficial
  logoUrl: "/assets/logo/logo.webp",
  logoFallback: "https://i.postimg.cc/zBHTqkPB/IMG-6985.webp",

  // 8 Burgers reais, apetitosos, sem preços
  burgers: [
    {
      id: "classic-smash",
      name: "CLASSIC SMASH",
      description: "Blend angus prensado com crosta crocante, queijo prato fundido, picles da casa e molho secreto no brioche.",
      image: "/assets/burgers/burger-01.webp",
      badge: "Mais Pedido",
    },
    {
      id: "bacon-fire",
      name: "BACON FIRE",
      description: "Blend 180g na brasa, fatias generosas de bacon artesanal crocante, cheddar inglês e barbecue rústico.",
      image: "/assets/burgers/burger-02.webp",
      badge: "Defumado na Brasa",
    },
    {
      id: "cheddar-monster",
      name: "CHEDDAR MONSTER",
      description: "Duplo smash 2x100g, cascata de creme de cheddar fundido, cebola caramelizada e aioli defumado.",
      image: "/assets/burgers/burger-03.webp",
      badge: "Cremoso Supremo",
    },
    {
      id: "double-black",
      name: "DOUBLE BLACK",
      description: "Dois suculentos hambúrgueres grelhados no fogo alto, queijo gouda cremoso e farofa de bacon crocante.",
      image: "/assets/burgers/burger-06.webp",
      badge: "Edição Especial",
    },
    {
      id: "crispy-chicken",
      name: "CRISPY CHICKEN",
      description: "Sobrecoxa desossada empanada ultra crocante, salada coleslaw fresca, queijo derretido e maionese picante.",
      image: "/assets/burgers/burger-05.webp",
      badge: "Extra Crocante",
    },
    {
      id: "house-special",
      name: "HOUSE SPECIAL",
      description: "Blend 200g de costela e fraldinha, provolone tostado no maçarico, geleia de pimenta e rúcula fresca.",
      image: "/assets/burgers/burger-07.webp",
      badge: "Receita do Chefe",
    },
    {
      id: "artisan-cheeseburger",
      name: "ARTISAN CHEESE",
      description: "A clássica combinação americana elevada: carne suculenta, queijo derretendo e brioche dourado na manteiga.",
      image: "/assets/burgers/burger-04.webp",
      badge: "Puro Sabor",
    },
    {
      id: "smoke-master",
      name: "SMOKE MASTER",
      description: "Três lâminas finas de smash, triplo queijo, picles artesanal crocante e maionese de chimichurri.",
      image: "/assets/burgers/burger-08.webp",
      badge: "Triplo Smash",
    }
  ] as BurgerItem[],

  // Detalhes Macro para o Ato 03
  details: [
    {
      word: "CARNE.",
      subtitle: "Blend nobre grelhado no fogo alto com crosta caramelizada perfeita.",
      image: "/assets/burgers/detail-carne.webp",
    },
    {
      word: "CHEDDAR.",
      subtitle: "Queijo fundido na hora, derretendo por cada camada suculenta.",
      image: "/assets/burgers/detail-cheddar.webp",
    },
    {
      word: "BACON.",
      subtitle: "Corte artesanal curado, defumado em lenha e estalando de crocante.",
      image: "/assets/burgers/detail-bacon.webp",
    },
    {
      word: "MOLHO.",
      subtitle: "Cremoso, autoral e com aquele equilíbrio que faz você querer repetir.",
      image: "/assets/burgers/detail-molho.webp",
    }
  ]
};

export const getWhatsAppUrl = (customText?: string) => {
  const text = customText || BURGER_CONFIG.whatsappMessage;
  return `https://wa.me/${BURGER_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`;
};
