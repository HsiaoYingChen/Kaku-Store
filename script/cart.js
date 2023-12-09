export let cart = [{
  productId:'11',
  quantity:2,
},{
  productId:'12',
  quantity:1,
}];

export function addToCart(productId) {
	let matchingItem;

  cart.forEach((cartItem)=>{
    if (productId === cartItem.productId){
      matchingItem =cartItem;
    }
  });
  
  const quantitySelector = document.querySelector
    (`.js-quantity-selector-${productId}`);

  const quantity = Number(quantitySelector.value);

  // 代碼再檢查一次
  if (matchingItem){
    matchingItem.quantity += 1;
  } else{
      cart.push({
      productId: productId,
      quantity: 1
    });
  }				
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}