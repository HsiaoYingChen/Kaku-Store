import {cart} from '../../data/cart.js';

export function renderHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const HeaderHTML = `
  <header>
    <div class="header-part">
      <div class="logo-container">
        <a href="index.html">
        <img src="image/logo.png" alt="Kaku Logo" width="70" height="90"></a>
      </div>

      <div class="header-right-section">
        <a href="#"><i class="fa-regular fa-user"></i></a>

        <a class="cart-link header-link" href="checkout.html"><i class="fa-solid fa-cart-shopping"></i>
        <div class="cart-quantity js-cart-quantity">${cartQuantity}</div></a>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="about.html">關於我們</a></li>
        <li><a href="news.html">最新消息</a></li>
        <li><a href="product.html">商品資訊</a></li>
        <li><a href="contact.html">聯絡我們</a></li>
      </ul>
    </nav> 
  </header>
  `;

  document.querySelector('.js-header-box')
    .innerHTML = HeaderHTML;
}