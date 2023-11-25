import {products} from "./shareData.js";
import {cart} from "./cart.js"

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
          ${product.price}
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
									加入購物車
							</button>
					</div>		  
</div>      
      `;
})

document.querySelector('.js-product-grid').
innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
		.forEach((button) => {
				button.addEventListener('click', () => {
					const productId = button.dataset.productId;
					// const {productId} = button.dataset(進階寫法);

					let matchingItem;

					cart.forEach((item)=>{
						if (productId === item.productId){
							matchingItem =item;
						}
					});

					const quantitySelector = document.querySelector
						(`.js-quantity-selector-${productId}`);

					const quantity = Number(quantitySelector.value);

					if (matchingItem){
						matchingItem.quantity +=quantity;
					} else{
							cart.push({
						productId: productId,
            //	productId(進階),
						quantity:quantity
							//quantity
						});
					}
					
					let cartQuantity = 0;

					cart.forEach((item) => {
						cartQuantity += item.quantity;
					})

					document.querySelector('.js-cart-quantity')
						.innerHTML = cartQuantity;

          const addedMessage = document.querySelector(
            `.js-added-to-cart-${productId}`);

          addedMessage.classList.add('added-to-cart-visible');

          setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible');
          }, 2000);
				})
		})

