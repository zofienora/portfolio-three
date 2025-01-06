// Array of facts about you
const facts = [
    "I love coding in the early morning hours",
    "I enjoy watching the sunrise",
    "I dream of traveling to Japan someday",
    "Tea over Coffee",
    "I have a fascination with airports & airplanes",
    "Water is my Happy Place",
    "I love moss, I think it is beautiful",
    "I grew up in the forest",
    "I’m convinced that JavaScript is a bit like magic—there’s always something new to discover!",
    "I'm like collecting design inspiration from nature, fashion, and architecture!",
    "I’m always listening to music while I code"
];

// Get the button and the half-sun container
const button = document.querySelector('.marquee-button');
const halfSun = document.querySelector('.factspop');

// Keep track of the current fact element
let currentFactElement = null;

// Function to generate a random fact
function generateFact() {
    // If a fact is already displayed, remove it immediately
    if (currentFactElement) {
        currentFactElement.remove();
    }

    // Pick a random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // Create a span element for the fact
    const factElement = document.createElement('span');
    factElement.textContent = randomFact;
    factElement.classList.add('fact-display');

    // Append the new fact to the half-sun
    halfSun.appendChild(factElement);

    // Update the reference to the current fact element
    currentFactElement = factElement;

    // Trigger fade-out after 3 seconds
    setTimeout(() => {
        if (currentFactElement === factElement) { // Ensure it's the same fact
            factElement.classList.add('fade-out');
            factElement.addEventListener('transitionend', () => {
                if (currentFactElement === factElement) { // Remove only if it's the same fact
                    factElement.remove();
                    currentFactElement = null; // Reset current fact reference
                }
            });
        }
    }, 3000);
}

// Add click event listener to the button
button.addEventListener('click', generateFact);

// ------------------------------------------------------------------------

