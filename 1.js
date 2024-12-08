// Example cart data (this could come from local storage, session storage, or an API)
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || 0; // Get the cart count from local storage (or default to 0)

// Get the cart count element and update the text
const cartCountElement = document.getElementById("cartCount");

// Function to update the cart item count
function updateCartCount() {
    // Update the cart count text
    cartCountElement.textContent = cartItems;
}

// Update the cart count initially
updateCartCount();

// Add event listener to the cart to go to the shopping-cart page when clicked
document.getElementById('floatingCart').addEventListener('click', function() {
    window.location.href = '/shopping-cart.html';
});
