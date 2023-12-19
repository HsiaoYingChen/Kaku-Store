import {products} from "../data/shareData.js";
import {cart, addToCart, calculateCartQuantity} from "../data/cart.js";
import {renderHeader} from './header.js';
renderHeader();

let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
    <div class="product-box">  
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-detail-container">
        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-price">
          $${product.price}
        </div>

        <div class="product-quantity-container">
										<select class="js-quantity-selector-${product.id}">
												<option selected value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
										</select>
							</div>

      <div class="product-spacer"></div>

							<div class="added-to-cart js-added-to-cart-${product.id}">
									<img src="image/icons/checkmark.png">
							已加入
							</div>

							<div class="added-to-cart">
									<span class="js-btn-added-to cart"></span>
							</div>

							<button class="btn-add-to-cart 
									btn-primary js-add-to-cart"
									data-product-id="${product.id}">
									<span>加入購物車<i class="fa-solid fa-cart-shopping"></i></span>
							</button>
					</div>		  
</div>      
      `;
})

document.querySelector('.js-product-grid').
innerHTML = productsHTML;

function updateCartQuantity(){
  const cartQuantity = calculateCartQuantity();
  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}

updateCartQuantity();

document.querySelectorAll('.js-add-to-cart')
		.forEach((button) => {
				button.addEventListener('click', () => {
					const productId = button.dataset.productId;
					// const {productId} = button.dataset(進階寫法);
					addToCart(productId);
					updateCartQuantity();

					const addedMessage = document.querySelector(
							`.js-added-to-cart-${productId}`);

					addedMessage.classList.add('added-to-cart-visible');
					
					// 之後補上計時器控制
					setTimeout(() => {
							addedMessage.classList.remove('added-to-cart-visible');
					}, 2000);
				})
		})

