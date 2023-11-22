const news = [
    {
      date:"2023/11/13",
      title:"【藝文活動】一日水彩體驗",
      content: "我們與在地的畫室合作舉辦一日水彩體驗活動，讓大小朋友可以有機會重拾畫筆，無論您是新手還是有經驗的畫家都歡迎參加，探索水彩的世界。",
      image: "image/news/classroom.jpg", 
    },
    {
      date:"2023/11/15-2023/11/28",
      title:"【展覽系列】 日本文具大賞",
      content: "我們第一次日本文具廠商合作，把獲得了日本文具大賞獎項的產品展示在店裡。希望藉由這個展覽，讓大家可以了解日本文具的優秀設計和創意，並提供購買這些優質產品的機會。",
      image: "image/news/classroom.jpg",
    },

    {
      date:"2023/11/30-2023/12/25",
      title:"【聖誕限定】 文具禮品驚喜組",
      content: "為慶祝聖誕節，我們推出了一個特別的文具禮品驚喜組。這個組合將包括各種特別的文具和聖誕主題的驚喜，成為送禮或自用的絕佳選擇。",
      image: "image/news/classroom.jpg",
    },

    {
      date:"2023/12/01-2024/01/15",
      title:"【新品到貨】 精美2024月曆桌曆，為生活添色。",
      content: "我們的最新到貨包括2024年的月曆和桌曆。這些產品不僅實用，還擁有精美的設計，可為您的辦公室或家居增添美感。",
      image: "image/news/classroom.jpg",
    },

    {
      date:"2024/01/20-2023/02/28",
      title:"【優惠活動】 文具用品9折",
      content: "2024年即將到來，而我們提供了一項令人興奮的文具優惠活動。現在，您可以以所有文具商品享有9折優惠，這是一個難得的機會，讓您購買所需的文具，同時節省費用。別錯過這個機會，為新一年備齊您所需的文具用品！",
      image: "image/news/classroom.jpg",
    },
]


let newsHTML = '';

news.forEach((news) => {
	newsHTML += `
  <div class="news-container">  
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


