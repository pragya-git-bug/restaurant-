document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const clearCartButton = document.getElementById("clear-cart");

  let cart = [];
  let total = 0;

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const menuItem = button.parentElement;
      const name = menuItem.querySelector("h2").textContent;
      const price = parseFloat(
        menuItem.querySelector(".price").textContent.slice()
      );

      // Add item to cart
      cart.push({ name, price });
      updateCartDisplay();
    });
  });

  clearCartButton.addEventListener("click", () => {
    cart = [];
    total = 0;
    updateCartDisplay();
  });

  function updateCartDisplay() {
    // Clear the existing cart display
    cartItemsList.innerHTML = "";

    // Calculate the total price
    total = cart.reduce((sum, item) => sum + item.price, 0);

    // Display cart items
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `${item.name} - Rs.${item.price.toFixed(2)}`;
      cartItemsList.appendChild(cartItem);
    });

    // Display the total price
    cartTotal.textContent = `Rs.${total.toFixed(2)}`;
  }
});
