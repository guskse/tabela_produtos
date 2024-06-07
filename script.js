let productsArr = JSON.parse(localStorage.getItem("productsData")) || [];
console.log("productsArr", productsArr);

// Load data from localStorage when the page loads
window.onload = function () {
  var productsData = JSON.parse(localStorage.getItem("productsData"));
  if (productsData) {
    var table = document.getElementById("products-table");
    productsData.forEach(function (product) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell1.textContent = product.name;
      cell2.textContent = product.codeUN;
      cell3.textContent = product.codeCX;
      cell4.textContent = product.codeKG;
      cell5.textContent = product.weight;
      cell6.textContent = product.price;
    });
  }
};

//print button
const printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", () => {
  print();
});

document
  .getElementById("addProductForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var fruitName = document.getElementById("fruitName").value;
    var fruitCodeUN = document.getElementById("fruitCodeUN").value;
    var fruitCodeCX = document.getElementById("fruitCodeCX").value;
    var fruitCodeKG = document.getElementById("fruitCodeKG").value;
    var fruitWeight = document.getElementById("fruitWeight").value;
    var fruitPrice = document.getElementById("fruitPrice").value;

    // Create a new row
    var table = document.getElementById("products-table");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    // Add values to the cells
    cell1.innerHTML = fruitName;
    cell2.innerHTML = fruitCodeUN;
    cell3.innerHTML = fruitCodeCX;
    cell4.innerHTML = fruitCodeKG;
    cell5.innerHTML = fruitWeight + " kg";
    cell6.innerHTML = "R$ " + fruitPrice;

    let newProductData = {};
    newProductData.name = cell1.innerHTML;
    newProductData.codeUN = cell2.innerHTML;
    newProductData.codeCX = cell3.innerHTML;
    newProductData.codeKG = cell4.innerHTML;
    newProductData.weight = cell5.innerHTML;
    newProductData.price = cell6.innerHTML;

    productsArr.push(newProductData);

    // Save data to localStorage
    localStorage.setItem("productsData", JSON.stringify(productsArr));

    // Reset the form
    document.getElementById("addProductForm").reset();
  });

// Reset the form
document.getElementById("addProductForm").reset();

// Function to clear localStorage on click clear button
document.getElementById("clearBtn").addEventListener("click", function () {
  localStorage.removeItem("productsData");
  location.reload(); // Reload the page after clearing localStorage
});

//CALCULAR CONVERSÃO
let peso = document.getElementById("peso");
let qtd = document.getElementById("qtd");
let preco = document.getElementById("preco");
let transformBtn = document.getElementById("transformBtn");
let total = document.getElementById("total-conversao");

//Convert Form
let convertProductForm = document.querySelector(".convert-form");
convertProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

transformBtn.addEventListener("click", () => {
  if (peso.value && qtd.value && preco.value) {
    total.innerHTML = calculate(preco.value, peso.value, qtd.value);
  } else {
    alert("Preencha todos os campos para fazer a conversão");
  }
});

//calcular o valor total com base no peso (peso * quantidade / preço)
function calculate(price, weight, qty) {
  return ((price / weight) * qty).toFixed(2);
}
