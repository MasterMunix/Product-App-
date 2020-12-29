//parte donde esta los productos
var productAdd = document.getElementById("productsAdded");
//Form
var form = document.getElementById("addProduct");
form.addEventListener("submit", function (e) {
  addProduct();
  e.preventDefault();
});

//
//forms inputs
var names = document.getElementById("name");
var date = document.getElementById("expirationDate");
var price = document.getElementById("price");
//
//button

//function

function addProduct() {
  //add
  var div = document.createElement("div");
  div.innerHTML =
    '<div class = "card" style="width: 18rem;"> ' +
    '<div class="card-body"> ' +
    '<h4 class = "card-title">' +
    names.value +
    "</h4>" +
    '<p class = "card-text"> Price: ' +
    price.value +
    " $</p>" +
    '<button class = "btn btn-danger" onclick="deleteProduct(event)" id = "delete" > Delete </button> ' +
    "</div> " +
    "</div>";
  productAdd.appendChild(div);
  //
  names.value = "";
  date.value = "";
  price.value = "";
}
//delete
function deleteProduct(event) {
  //Este evento elimina el producto
  event.target.parentElement.parentElement.parentElement.remove();
}
