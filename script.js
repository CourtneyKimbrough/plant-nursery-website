// Thank you after clicking subscribe
function thankyou(event) {
    event.preventDefault();
    alert("Thank you for subscribing.");
}

// Success message after clicking Add to Cart
function success(item) {
    alert(`Item added to the cart: ${item}`);
}

// Array to store cart items
let cartItems = [];

// Add items to cart and update display
function addToCart(item) {
    cartItems.push(item);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartDisplay();
}

// Update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";  // Clear previous content

    if (cartItems.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
    } else {
        cartItems.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            cartList.appendChild(listItem);
        });
    }
}

// Toggle cart visibility (as overlay)
function toggleCart() {
    const cartOverlay = document.getElementById("cart-overlay");
    updateCartDisplay();
    cartOverlay.style.display = (cartOverlay.style.display === "none" || cartOverlay.style.display === "") 
        ? "flex" 
        : "none";
}

// Empty cart
function emptyCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    cartItems = [];
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Cart cleared!");
}

// Process Order
function processOrder() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    cartItems = [];
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Thank you for your order.");
}

// Load cart from session storage
function loadCart() {
    const savedCart = sessionStorage.getItem("cartItems");
    
    // If cart exists, parse and load it
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Load cart when the page loads
window.addEventListener("load", loadCart);

// Thank you message after submitting form
function thankyou(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    // Object to store data
    const formData = {
        firstName: fname,
        lastName: lname,
        phoneNumber: phone,
        email: email,
        feedback: feedback
    };
    // Save the data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData))
    
    alert(`Thank you for your message ${fname}`);
    const form = document.getElementById('contactform');
    form.reset();
}