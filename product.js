const products = [
    {
      id:"11",
      name:"經典鋼筆",
      content: "精緻造型順暢書寫，是時尚且實用的熱賣鋼筆",
      price: "$150",
      image: "image/product/1pen.jpg", 
    },

    {
      id:"12",
        name:"色鉛筆",
        content: "無毒環保適合各種紙張，為您的插畫和藝術創作增添豐富層次",
        price: "$100",
        image: "image/product/2colorpen.jpg", 
      },

      {
        id:"13",
        name:"狼豪毛筆",
        content: "精緻狼豪毛筆，讓您輕鬆揮灑書法之美，經典和藝術的完美結合。",
        price: "$250",
        image: "image/product/3pen.jpg", 
      }, 
      {
        id:"14",
        name:"2024手帳",
        content: "新的一年用兼具實用性和風格的手帳月曆，來組織您的生活計畫未來。",
        price: "$299",
        image: "image/product/4calandar.jpg", 
      },
      {
        id:"15",
        name:"聖誕卡片",
        content: "創意無限的聖誕卡片，為節日送上溫馨祝福，讓身邊的人可以感到心暖暖",
        price: "$199",
        image: "image/product/5card.png", 
      },

      {
        id:"16",
        name:"甘布林油畫顏料",
        content: "美國進口甘布林 24 油畫顏料專業精選系列 ",
        price: "$599",
        image: "image/product/6paint.jpg", 
      },  
]

let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
    <div class="product-box">  
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-detail-container">
        <div class="products-name">
          ${product.name}
        </div>

        <div class="product-price">
          ${product.price}
        </div>
      </div>  
</div>      
      `;
})

document.querySelector('.js-product-grid').
innerHTML = productsHTML;