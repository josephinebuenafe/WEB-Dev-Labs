let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Watermelon"];

function generateList() {
  const list = document.getElementById("fruit-list");
  list.innerHTML = ""; 

  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1) + ". " + fruits[i];
    list.appendChild(li);
  }
}

function addFruit() {
  const input = document.getElementById("newFruit");
  const newFruit = input.value.trim();

  if (newFruit === "") {
    alert("Please enter a fruit name.");
    return;
  }

  fruits.push(newFruit);
  input.value = "";
  generateList(); 
}
