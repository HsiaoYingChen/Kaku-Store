import{news} from "./shareData.js";
import {loadHeader, loadFooter} from './utils/app.js'
document.addEventListener('DOMContentLoaded', function () {
 		loadHeader();
		loadFooter();
});

let newsHTML = '';

news.forEach((news) => {
	newsHTML += `
  <div class="news-box">  
      <div class="news-image-container">
          <img class="news-image" src="${news.image}">
      </div>

      <div class="news-detail-container">
        <div class="news-date">
          ${news.date}
        </div>
          
        <div class="news-title">
          ${news.title}
        </div>

        <div class="news-content">
          ${news.content}
        </div>
      </div>  
  </div>       
        `;
});

document.querySelector('.js-news-grid').
innerHTML = newsHTML;


