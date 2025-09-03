// script.js

// Show a welcome message when the page loads
window.onload = function () {
    alert("Welcome to Java Heaven! Enjoy browsing our menu.");
};

// Change the footer text dynamically
document.addEventListener("DOMContentLoaded", function () {
    let footer = document.querySelector("p");
    footer.innerHTML = "&copy; 2025 JAVA HEAVEN. Freshly Brewed Happiness!";
});

// Add interactivity to menu items
let menuItems = document.querySelectorAll("li");

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        alert("You selected: " + item.textContent);
    });
});