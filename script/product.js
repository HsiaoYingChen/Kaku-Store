import {products} from "./shareData.js";

let productsHTML='';

products.forEach((product)=>{
    productsHTML+=`
    <div class="product-box">  
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-detail-container">
        <div class="products-name">
          ${product.name}
        </div>

        <div class="product-price">
          ${product.price}
        </div>

        <div class="product-quantity-container">
							<select>
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