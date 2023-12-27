function addProduct() {
  const productField = document.getElementById("product-field");
  const quantityField = document.getElementById("quantity-field");
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
  setProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
  const productContaienr = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} ${quantity}`;
  productContaienr.appendChild(li);
};

//getItem From Local Storage 1: step {cart key hisabe theke jabe, asign korte hobe sudhu value}
const getStoredShoppinCart = () => {
  //jei name rakhbo data 'cart';
  const storedCart = localStorage.getItem("cart");
  //declear a emty object or initial;
  let cart = {};
  //if cart name kichu thake tahole take parse kore cart variable rakho, nahole return emty cart
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// setItem to localStorage 2nd step
// key: cart , value: product , quantity
const setProductToLocalStorage = (product, quantity) => {
  ///get key cart from getStoredShppingCart function
  const cartValue = getStoredShoppinCart();
  //set value in the cart value, you have to sign cart[product] and set quantity;
  //akhane cart akta object. ar object er vitore man pete hole (variable name [jar man dorkar]) = result/ quantity
  cartValue[product] = quantity;
  //converted stringigy the cart for set localStorage. becouse nothing allow without string
  const CartStringify = JSON.stringify(cartValue);
  localStorage.setItem("cart", CartStringify);
};

// 3rd step: display data from local storage
const displayProductFromLocalStorage = () => {
  const savedProduct = getStoredShoppinCart();
  //to access a object value, that which is stay in variable, : variable name[].

  for (const product in savedProduct) {
    //product er man ace saveProduct er vitore, tai man acces korte hole, variable name[product]== product er man pawa jabe
    const quantity = savedProduct[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayProductFromLocalStorage();
