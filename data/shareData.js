export function getProduct(productId){
  let matchingProduct;
    
  products.forEach((product) => {
    if (product.id === productId){
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id:"11",
    name:"經典鋼筆",
    content: "精緻造型順暢書寫，是時尚且實用的熱賣鋼筆",
    price: "150",
    image: "image/product/1pen.jpg", 
  },

  {
    id:"12",
    name:"色鉛筆",
    content: "無毒環保適合各種紙張，為您的插畫和藝術創作增添豐富層次",
    price: "100",
    image: "image/product/2colorpen.jpg", 
  },

  {
    id:"13",
    name:"狼豪毛筆",
    content: "精緻狼豪毛筆，讓您輕鬆揮灑書法之美，經典和藝術的完美結合。",
    price: "250",
    image: "image/product/3pen.jpg", 
  }, 
  {
    id:"14",
    name:"2024手帳",
    content: "新的一年用兼具實用性和風格的手帳月曆，來組織您的生活計畫未來。",
    price: "299",
    image: "image/product/4calandar.jpg", 
  },
  {
    id:"15",
    name:"聖誕卡片",
    content: "創意無限的聖誕卡片，為節日送上溫馨祝福，讓身邊的人可以感到心暖暖",
    price: "199",
    image: "image/product/5card.png", 
  },

  {
    id:"16",
    name:"甘布林油畫顏料",
    content: "美國進口甘布林 24 油畫顏料專業精選系列 ",
    price: "599",
    image: "image/product/6paint.jpg", 
  },  
]  

export const news = [
  {
    date:"2023/11/13",
    title:"【藝文活動】一日水彩體驗",
    content: "我們與在地的畫室合作舉辦一日水彩體驗活動，讓大小朋友可以有機會重拾畫筆，無論您是新手還是有經驗的畫家都歡迎參加，探索水彩的世界。",
    image: "image/news/1classroom.jpg", 
  },
  {
    date:"2023/11/15-2023/11/28",
    title:"【展覽系列】 日本文具大賞",
    content: "我們第一次日本文具廠商合作，把獲得了日本文具大賞獎項的產品展示在店裡。希望藉由這個展覽，讓大家可以了解日本文具的優秀設計和創意，並提供購買這些優質產品的機會。",
    image: "image/news/2pen.jpg",
  },

  {
    date:"2023/11/30-2023/12/25",
    title:"【聖誕限定】 文具禮品驚喜組",
    content: "為慶祝聖誕節，我們推出了一個特別的文具禮品驚喜組。這個組合將包括各種特別的文具和聖誕主題的驚喜，成為送禮或自用的絕佳選擇。",
    image: "image/news/3greenstationery.jpg",
  },

  {
    date:"2023/12/01-2024/01/15",
    title:"【新品到貨】 精美2024月曆桌曆，為生活添色。",
    content: "我們的最新到貨包括2024年的月曆和桌曆。這些產品不僅實用，還擁有精美的設計，可為您的辦公室或家居增添美感。",
    image: "image/news/4calandar.jpg",
  },

  {
    date:"2024/01/20-2023/02/28",
    title:"【優惠活動】 文具用品9折",
    content: "2024年即將到來，而我們提供了一項令人興奮的文具優惠活動。現在，您可以以所有文具商品享有9折優惠，這是一個難得的機會，讓您購買所需的文具，同時節省費用。別錯過這個機會，為新一年備齊您所需的文具用品！",
    image: "image/news/5stationery.png",
  },
]
