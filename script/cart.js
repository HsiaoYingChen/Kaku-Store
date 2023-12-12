export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [{
    productId:'11',
    quantity:2,
  },{
    productId:'12',
    quantity:1,
  }];
}


export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

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
    matchingItem.quantity += quantity;
  } else{
      cart.push({
      productId: productId,
      quantity: quantity
    });
  }			
  
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}