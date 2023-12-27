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

//getItem From Local Storage 1: step
const getStoredShoppinCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

// setItem to localStorage 2nd step
const setProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppinCart();
  cart[product] = quantity;
  const CartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", CartStringify);
};

// 3rd step: display data from local storage
const displayProductFromLocalStorage = () => {
  const savedProduct = getStoredShoppinCart();
  for (const product in savedProduct) {
    const quantity = savedProduct[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayProductFromLocalStorage();
