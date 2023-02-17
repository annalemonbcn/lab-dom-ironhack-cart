// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let qty = product.querySelector('.quantity input');
  let subtotalPrice = price.innerHTML * qty.value;
  // Update value subtotal
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  // Return each subtotalPrice
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let totalPrice = 0;
  // Save all products in a nodeList
  let products = document.querySelectorAll('.product');
  // Loop products
  for (let i = 0; i < products.length; i++){
    // Save each individual subtotalPrice
    totalPrice += updateSubtotal(products[i]);
  }
  // ITERATION 3
  // Update value total-value
  document.querySelector('#total-value span').innerHTML = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
   // Delete tr from currentTarget
   target.closest('.product').remove();
   // Re-calculate totalPrice
   calculateAll();
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  // Get values
  let productName = document.querySelector('.create-product input[type=text]');
  let productPrice = document.querySelector('.create-product input[type=number]');
  const totalCells = 5;

  // Create structure
  let tbody = document.querySelector('#cart tbody');
  let newRow = tbody.insertRow();
  newRow.className = 'product';
  // Creating cells
  for(let i = 0; i < totalCells; i++){
    // Add content to cells
    let newCell = newRow.insertCell();
    switch(i){
      // Product name
      case 0:
        newCell.classList.add('name');
        newCell.innerHTML = productName.value;
        break;
      // Price
      case 1:
        newCell.classList.add('price');
        newCell.innerHTML = '$<span>' + Number(productPrice.value).toFixed(2) + '</span>';
        break;
      // Qty
      case 2:
        newCell.classList.add('quantity');
        newCell.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity">';
        break;
      // Subtotal
      case 3:
        newCell.classList.add('subtotal');
        newCell.innerHTML = '$<span>0</span>';
        break;
      // Btn remove
      case 4:
        newCell.classList.add('action');
        newCell.innerHTML = '<button onclick="removeProduct(event)" class="btn btn-remove">Remove</button>';
        break;
    }  
  }
  // Reset input values
  productName.value = '';
  productPrice.value = '0'
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // Add event to "remove" btns
  let removeItemBtns = document.querySelectorAll('.btn-remove');
  removeItemBtns.forEach(function(btn){
    btn.addEventListener('click', removeProduct);
  });

  // Add event to "create product" btn
  let createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});