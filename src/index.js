// ITERATION 1

function updateSubtotal(product) {
  let price = document.querySelector('.price span');
  let qty = document.querySelector('.quantity input');
  let subtotalPrice = price.innerHTML * qty.value;
  // Update value subtotal
  document.querySelector('.subtotal span').innerHTML = subtotalPrice;  
  console.log(subtotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product');
  console.log(products);
  for (let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
  }

  //console.log(products);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
