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
    <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
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
            <button class="minus-quantity-link link-primary">-</button>
            <span>
              <span class="quantity-label">${cartItem.quantity}</span>
              </span>
            <button class="update-quantity-link link-primary">+</button>
          </div>
            <button class="delete-quantity-link link-primary
              js-delete-link" data-product-id="${matchingProduct.id}">
              <i class="fa-solid fa-trash-can"></i>
            </button>
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

// 有問題console.log讀不到id  
document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      // console.log(cart);
      
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
    });
      
  });
