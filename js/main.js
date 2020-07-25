var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('producCategory');
var productDescInput = document.getElementById('productDesc');

function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    description: productDescInput.value,
  };
  console.log(product);
}

let friends = ['ahmed', 'Ali', 'Duaa', 'Samaa', 'Mohamed'];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
