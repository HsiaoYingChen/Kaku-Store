import {cart, removeFromCart, updateDeliveryOption, updateQuantity} from '../../data/cart.js';
import {products, getProduct} from '../../data/shareData.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions, getDeliveryOption, calculateDeliveryDate} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';
import 'https://unpkg.com/dayjs@1.11.10/esm/locale/zh-tw';


dayjs.locale('zh-tw');

export function renderOrderSummary(){
  let cartSummaryHTML = ''; 

  cart.forEach((cartItem) =>{
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;
    
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    
    const dateString = calculateDeliveryDate(deliveryOption);

    cartSummaryHTML +=  `
      <div class="cart-item-container 
      js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          出貨日期: ${dateString}
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
              <button class="minus-quantity-link link-primary 
              js-minus-link" data-product-id="${matchingProduct.id}">-</button>
              
              <input type="text" class="input-quantity js-input-quantity" 
              data-product-id="${matchingProduct.id}" 
              value="${cartItem.quantity}">

              <button class="update-quantity-link link-primary 
              js-plus-link" data-product-id="${matchingProduct.id}">+</button>
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
            <br>7天後不含(周末)出貨免運
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>     
      </div>
    `;
  });

  //運費HTML 用有function 和return 結合兩個HTML
  function deliveryOptionsHTML(matchingProduct,
    cartItem){
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      const dateString = calculateDeliveryDate(deliveryOption);
      const priceString = deliveryOption.price
      === 0 
        ? '免運'
        : `$${deliveryOption.price}`;
      
      const isChecked = deliveryOption.id ===
      cartItem.deliveryOptionId;

      html +=`
        <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              運費- ${priceString}  
            </div>
          </div>
        </div>
      `
    });
    return html;
  }


  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  
  //不要用DOM操作來更新，而是重新產生HTML符合MVC設計方式
  document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      // const container = document.querySelector(
      //   `.js-cart-item-container-${productId}`
      // );
      // container.remove
      renderOrderSummary();
      renderPaymentSummary();
    });  
  });

  document.querySelectorAll('.js-plus-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        
        const quantityInput = container.querySelector(
          `.js-input-quantity`
        );

        const newQuantity = Number(quantityInput.value) + 1;
        updateQuantity(productId, newQuantity);
        
        renderOrderSummary();
        renderPaymentSummary();
      });
    });

  document.querySelectorAll('.js-minus-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      
      const quantityInput = container.querySelector(
        `.js-input-quantity`
      );

      const newQuantity = Math.max(Number(quantityInput.value) - 1, 1);
      updateQuantity(productId, newQuantity);
      
      renderOrderSummary();
      renderPaymentSummary();

      });
    });

  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        // const productId = element.dataset.productId;
        // const deliveryOptionId = element.dataset.deliveryOptionId;
        const {productId, deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);
    
        renderPaymentSummary();
      });
    });
}

renderOrderSummary();