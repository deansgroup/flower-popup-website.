// List of messages
const messages = [
    "You're blooming amazing! 🌸",
    "You make the world more beautiful! 🌷",
    "Hey there, gorgeous! 🌹",
    "You're as radiant as this flower! 🌼",
    "You've got petals of charm! 🌺"
];

// Function to display the flower pop-up
function showFlowerPopup() {
    const popup = document.getElementById('flowerPopup');
    const message = document.getElementById('flowerMessage');

    // Select a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    // Show the popup
    popup.style.display = 'block';
}

// Show the flower popup when the page loads
window.onload = showFlowerPopup;