// menu.js

const menuItems = [
  {
    category: "Frappes",
    items: [
      {
        name: "Double Choco Frappe",
        desc: "A creamy blend of dark chocolate and milk.",
        note: "Perfect for chocolate lovers. Contains dairy.",
        price: 150
      },
      {
        name: "Flakes Frappe",
        desc: "Crunchy chocolate flakes blended with ice cream.",
        note: "Contains nuts; not ideal for nut allergy.",
        price: 145
      },
      {
        name: "Caramel Frappe",
        desc: "Sweet caramel with smooth espresso.",
        note: "Can be made sugar-free upon request.",
        price: 160
      }
    ]
  },
  {
    category: "Black Coffee",
    items: [
      {
        name: "Pure Black",
        desc: "Strong and bold, made from freshly ground beans.",
        note: "Best for those who prefer no sugar or milk.",
        price: 95
      },
      {
        name: "Cold Brew",
        desc: "Smooth and less acidic, steeped for 12 hours.",
        note: "Low sugar; great for sensitive stomachs.",
        price: 110
      },
      {
        name: "House Blend",
        desc: "Our signature roast with balanced flavor.",
        note: "Contains caffeine; choose decaf if preferred.",
        price: 120
      }
    ]
  },
  {
    category: "Pastries",
    items: [
      {
        name: "Blueberry Muffin",
        desc: "Soft muffin loaded with real blueberries.",
        note: "Contains gluten and dairy.",
        price: 90
      },
      {
        name: "Chocolate Croissant",
        desc: "Flaky pastry filled with chocolate.",
        note: "Best served warm; contains butter.",
        price: 95
      },
      {
        name: "Classic Cheesecake",
        desc: "Creamy baked cheesecake with buttery crust.",
        note: "Contains dairy and eggs.",
        price: 120
      }
    ]
  }
];

let orders = [];
let total = 0;

// Function to add items to the order
function addToOrder(item, price) {
  alert(`You ordered {item}!`);
  orders.push(item);
  total += price;

  document.getElementById("order-list").innerText = "You ordered: " + orders.join(", ");
  document.getElementById("total").innerText = "Total: ₱" + total;
}

// Function to dynamically generate the menu
function generateMenu() {
  const menuList = document.getElementById("menu-list");
  menuItems.forEach(category => {
    const div = document.createElement("div");
    div.classList.add("menu-category");

    div.innerHTML = `
      <h3>${category.category}</h3>
      <ul>
        ${category.items.map(item => `
          <li>
            <strong>{item.name}</strong> – {item.desc}
            <em>{item.note}</em>
            <span class="price">₱{item.price}</span>
            <button onclick="addToOrder('{item.name}', {item.price})">Order Now</button>
          </li>
        `).join('')}
      </ul>
    `;

    menuList.appendChild(div);
  });
}

// Generate the menu when the page loads
document.addEventListener("DOMContentLoaded", generateMenu);
