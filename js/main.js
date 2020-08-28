const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productCategoryInput = document.getElementById('producCategory');
const productDescInput = document.getElementById('productDesc');
const tableBody = document.getElementById('tableBody');

const productNameAlert = document.getElementById('productNameAlert');
const productPriceAlert = document.getElementById('productPriceAlert');

let productList;

if (localStorage.getItem('ourProducts') === null) {
  productList = [];
} else {
  productList = JSON.parse(localStorage.getItem('ourProducts'));
  displayProduct(productList);
}

function addProduct() {
  let product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    description: productDescInput.value,
  };
  productList.push(product);
  localStorage.setItem('ourProducts', JSON.stringify(productList));
  displayProduct(productList);
  clearForm();
}

function displayProduct(list) {
  let tBody = '';
  for (let i = 0; i < list.length; i++) {
    tBody += `
      <tr>
        <td>${i}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].description}</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
      </tr>
    `;
  }
  tableBody.innerHTML = tBody;
}

function clearForm() {
  productNameInput.value = '';
  productPriceInput.value = '';
  productCategoryInput.value = '';
  productDescInput.value = '';
}

function deleteProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem('ourProducts', JSON.stringify(productList));
  displayProduct(productList);
}

let searchInput = document.getElementById('searchInput');

function searchProducts() {
  console.log('working');
  let searchTerm = searchInput.value;
  let wantedProducts = [];
  for (let i = 0; i < productList.length; i++) {
    if (
      productList[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ==
      true
    ) {
      wantedProducts.push(productList[i]);
    }
  }
  displayProducts(wantedProducts);
}

// Validation
function validateProductName(productName) {
  let regex = /^[A-Z][a-z]{3,6}$/;
  if (regex.test(productName)) {
    productNameAlert.classList.replace('d-block', 'd-none');
    productNameInput.classList.remove('is-invalid');
    productNameInput.classList.add('is-valid');
  } else {
    productNameAlert.classList.replace('d-none', 'd-block');
    productNameInput.classList.add('is-invalid');
    productNameInput.classList.remove('is-valid');
  }
}

productNameInput.addEventListener('keyup', () => {
  validateProductName(productNameInput.value);
});

// Price Validation
function validateProductPrice(productPrice) {
  let regex = /^([1-9][0-9]{1,3}|10000)$/;
  if (regex.test(productPrice)) {
    productPriceAlert.classList.replace('d-block', 'd-none');
    productPriceInput.classList.remove('is-invalid');
    productPriceInput.classList.add('is-valid');
  } else {
    productPriceAlert.classList.replace('d-none', 'd-block');
    productPriceInput.classList.add('is-invalid');
    productPriceInput.classList.remove('is-valid');
  }
}

productPriceInput.addEventListener('keyup', () => {
  validateProductPrice(productPriceInput.value);
});
