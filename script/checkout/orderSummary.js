import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/shareData.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions, getDeliveryOption, calculateDeliveryDate} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';


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
              name="${matchingProduct.id}" value="${cartItem.quantity}">

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

  // 有問題console.log讀不到id  
  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        renderOrderSummary();
        renderPaymentSummary();
      });  
    });

  // function updateCartQuantity() {
  //   const cartQuantity = calculateCartQuantity()
  //   document.querySelector('.js-cart-quantity')
  //   .innerHTML = `${cartQuantity}`;
   //}
    
  // updateCartQuantity();

  document.querySelectorAll('.js-plus-link')
    .forEach((link) => {
      link.addEventListener('click', (event) => {
        const inputNum = event.currentTarget.parentNode
        .querySelector('.js-input-quantity');
        inputNum.value = parseInt(inputNum.value) + 1;
        // const cartItem = cart.find(item => item.productId === productId);
        // if (cartItem) {
        //   cartItem.quantity = parseInt(inputNum.value) + 1;
        // }
        renderPaymentSummary();
        // console.log('Plus button clicked!');
      });
    });

  document.querySelectorAll('.js-minus-link')
    .forEach((link) => {
      link.addEventListener('click', (event) => {
      const inputNum = event.currentTarget.parentNode
      .querySelector('.js-input-quantity');
      inputNum.value = Math.max(0, parseInt(inputNum.value) - 1);
      // const cartItem = cart.find(item => item.productId === productId);
      // if (cartItem) {
      //   cartItem.quantity = Math.max(0, parseInt(inputNum.value) - 1);
      // }
      // console.log('Minus button clicked!')
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
    
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
}

renderOrderSummary();