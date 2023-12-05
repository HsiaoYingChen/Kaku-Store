import{news}from "./shareData.js";
import{products}from "./shareData.js";
import{initializeLogin}from"./lightbox.js"
initializeLogin('js-login', 'header-right-section');

let hpNewsHtml = '';

// 之後補上過濾篩選
for(let i=0; i<3; i++) {
	hpNewsHtml += `
  <div class="news-box">  
      <div class="news-image-container">
          <img class="news-image" src="${news[i].image}">
      </div>

      <div class="news-detail-container">
        <div class="news-title">
          ${news[i].title}
        </div>
      </div>  
  </div>       
        `;
}
document.querySelector('.js-news-grid').innerHTML = hpNewsHtml;


// 之後補上過濾篩選
let hpProductsHtml = '';

for(let i=0; i<4; i++) {
	hpProductsHtml += `
  <div class="product-box">  
    <div class="product-image-container">
      <img class="product-image" src="${products[i].image}">
    </div>

    <div class="product-detail-container">
      <div class="product-name">
        ${products[i].name}
      </div>

      <div class="product-content">
        ${products[i].content}
      </div>
    </div>
  </div>
        `;
}

document.querySelector('.js-product-grid').innerHTML = hpProductsHtml;
