import {cart, removeFromCart} from './cart.js';
import {products} from './shareData.js';

let cartSummaryHTML = ''; 

cart.forEach((cartItem) =>{
  const productId = cartItem.productId;

  let matchingProduct;

products.forEach((product) => {
  if (product.id === productId){
    matchingProduct = product;
  }
});

  
cartSummaryHTML +=  `
  <div class="cart-item-container">
    <div class="delivery-date">
      出貨日期: 2023/12/25
    </div>

    <div class="cart-item-details-grid">
    <img class="product-image"
      src="${matchingProduct.image}">

    <div class="cart-item-details">
      <div class="product-name">
        ${matchingProduct.name}
      </div>
      <div class="product-price">
        $${matchingProduct.price}
      </div>

      <div class="product-quantity">
        <div class="quantity-control">
          <span class="minus-quantity-link link-primary">
            <i class="fa-solid fa-minus"></i>
          </span>
          <span>
            數量 <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            <i class="fa-solid fa-plus "></i>
          </span>
        </div>
          <span class="delete-quantity-link link-primary
            js-delete-link" data-product-id="${matchingProduct.id}">
            移除
          </span>
      </div>
    </div>

    <div class="delivery-options">
      <div class="delivery-options-title">
        請選擇運費:
      </div>
      <div class="delivery-option">
        <input type="radio" checked
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            2023/12/30
          </div>
          <div class="delivery-option-price">
            免運
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            2023/12/28
          </div>
          <div class="delivery-option-price">
            $30 - 運費
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            2023/12/26
          </div>
          <div class="delivery-option-price">
            $60 - 運費
          </div>
        </div>
      </div>
    </div>
    </div>     
  </div>
 `;
});

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
    });
  });
