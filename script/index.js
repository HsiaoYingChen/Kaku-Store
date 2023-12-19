import {news, products} from "../data/shareData.js";
import {renderHeader} from './header.js';
renderHeader();

//過濾篩選
const selectedProductIndexes = [0, 1, 3, 4];

let indexProductsHtml = '';
for (const index of selectedProductIndexes) {
  const currentProduct = products[index];

  if (currentProduct) {
    indexProductsHtml += `
      <div class="product-box">  
        <div class="product-image-container">
          <img class="product-image" src="${currentProduct.image}">
        </div>

        <div class="product-detail-container">
          <div class="product-name">
            ${currentProduct.name}
          </div>

          <div class="product-content">
            ${currentProduct.content}
          </div>
        </div>
      </div>
    `;
  }
}

document.querySelector('.js-product-grid').innerHTML = indexProductsHtml;

//過濾篩選
const selectedNewsIndexes = [0, 2, 3];

let indexNewsHtml = '';
for (const index of selectedNewsIndexes) {
  const currentNews = news[index];

  if (currentNews) {
    indexNewsHtml += `
      <div class="news-box">  
        <div class="news-image-container">
          <img class="news-image" src="${currentNews.image}">
        </div>

        <div class="news-detail-container">
          <div class="news-title">
            ${currentNews.title}
          </div>
        </div>  

        <div class="news-content-container">
          <div class="news-content">
            ${currentNews.content}
          </div>
        </div> 

        <div class="news-readMore-container">
          <a href="news.html">
            <span class="news-readMore">Read More</span>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </a>
        </div> 
      </div>
    `;
  }
}

document.querySelector('.js-news-grid').innerHTML = indexNewsHtml;