import {cart} from '../../data/cart.js';

//cart沒辦法被載入
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
        <a href="login.html"><i class="fa-regular fa-user"></i></a>

        <a class="cart-link header-link" href="checkout.html"><i class="fa-solid fa-cart-shopping"></i>
        <div class="cart-quantity
        js-cart-quantity">${cartQuantity}</div></a>

      </div>
    </div>

    <nav>
      <ul>
        <li><a href="about.html">關於我們</a></li>
        <li><a href="news.html">最新消息</a></li>
        <li><a href="product.html">商品資訊</a></li>
        <li><a href="contact.html">聯絡我們</a></li>
      </ul>
      <div class="nav__btn">
      </div>
    </nav>
      <a class="hambar active" href="#"><i class="fa-solid fa-bars"></i></a>
      <div class="close"><i class="fa-regular fa-circle-xmark"></i></div>
  </header>
  `;

  document.querySelector('.js-header-box')
    .innerHTML = HeaderHTML;
  
    const hambar = document.querySelector('.hambar');
    const close = document.querySelector('.close');
    const nav = document.querySelector('nav');

    hambar.addEventListener('click', function () {
    nav.classList.add('active');
    close.classList.add('active');
    hambar.classList.remove('active');
    });

    close.addEventListener('click', function () {
    nav.classList.remove('active');
    close.classList.remove('active');
    hambar.classList.add('active');
});
}