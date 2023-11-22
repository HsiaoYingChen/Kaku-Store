const products = [
    {
      id:"11",
      name:"經典鋼筆",
      content: "精緻造型順暢書寫，是時尚且實用的熱賣鋼筆",
      price: "$150",
      image: "image/shop/pen.jpg", 
    },

    {
        id:"12",
        name:"色鉛筆",
        content: "無毒環保適合各種紙張，為您的插畫和藝術創作增添豐富層次",
        price: "$100",
        image: "image/news/classroom.jpg", 
      },

      {
        id:"13",
        name:"狼豪毛筆",
        content: "精緻狼豪毛筆，讓您輕鬆揮灑書法之美，經典和藝術的完美結合。",
        price: "$250",
        image: "image/news/classroom.jpg", 
      }, 
      {
        id:"14",
        name:"2024手帳",
        content: "新的一年用兼具實用性和風格的手帳月曆，來組織您的生活計畫未來。",
        price: "$299",
        image: "image/news/classroom.jpg", 
      },
      {
        id:"15",
        name:"聖誕卡片",
        content: "創意無限的聖誕卡片，為節日送上溫馨祝福，讓身邊的人可以感到心暖暖",
        price: "$199",
        image: "image/news/classroom.jpg", 
      },

      {
        id:"16",
        name:"甘布林油畫顏料",
        content: "美國進口甘布林 24 油畫顏料專業精選系列 ",
        price: "$599",
        image: "image/news/classroom.jpg", 
      },
]

let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
    <div class="products-container">  
      <div class="products-image-container">
        <img class="products-image" src="${product.image}">
      </div>

      <div class="products-detail-container">
        <div class="products-name">
          ${products.name}
        </div>

        <div class="products-price">
          ${products.price}
        </div>
      </div>  
</div>      
      `;
})

document.querySelector('.js-products-grid').
innerHTML = productsHTML;