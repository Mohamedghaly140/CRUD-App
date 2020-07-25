const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productCategoryInput = document.getElementById('producCategory');
const productDescInput = document.getElementById('productDesc');
const tableBody = document.getElementById('tableBody');

let productList;

if (localStorage.getItem('ourProducts') === null) {
  productList = [];
} else {
  productList = JSON.parse(localStorage.getItem('ourProducts'));
  displayProduct();
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
  displayProduct();
  clearForm();
}

function displayProduct() {
  let tBody = '';
  for (let i = 0; i < productList.length; i++) {
    tBody += `
      <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
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
  displayProduct();
}
