// import {calculateCartQuantity} from "./cart.js";

export function updateCartQuantity(){
 const cartQuantity = calculateCartQuantity();
 document.querySelector('.js-cart-quantity')
   .innerHTML = cartQuantity;
}