import {cart} from'../../data/cart.js';
import {getProduct} from '../../data/shareData.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';

export function renderPaymentSummary(){
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;
    
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.price;
  });

  const total = productPrice + shippingPrice;
  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      訂單摘要
    </div>

    <div class="payment-summary-row">
      <div>數量 (3) :</div>
      <div class="payment-summary-money">
      $${productPrice}</div>
    </div>

    <div class="payment-summary-row">
      <div>運費:</div>
      <div class="payment-summary-money">
      $${shippingPrice}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>訂單金額:</div>
      <div class="payment-summary-money">
      $${total}</div>
    </div>

    <button class="place-order-button button-primary">
      結帳
    </button>
  `
  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
}