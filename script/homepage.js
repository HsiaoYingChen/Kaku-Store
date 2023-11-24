import{news}from "./shareData.js";
import{products}from "./shareData.js";

let hpNewsHtml = '';

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
