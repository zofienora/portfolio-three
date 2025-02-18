document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");


    // Array of facts about you
const facts = [
    "I love coding in the early morning hours.",
    "I enjoy watching the sunrise.",
    "I dream of traveling to Japan someday.",
    "Tea over Coffee.",
    "Airports are one of my favorite places — I find the energy there inspiring.",
    "City Walks are my Happy Place.",
    "I love moss, I think it is beautiful.",
    "I’m convinced that JavaScript is a bit like magic—there’s always something new to discover!",
    "Movies, fashion and architecture often give me ideas for my projects.",
    "No matter how much I learn, z-index always finds a way to surprise me.",
    "I’ve learned more about math from CSS transforms than I ever did in school.",
    "Lorem ipsum is my second language at this point.",
    "I know I’m a frontend dev because I get emotional over good typography.",
    "I treat clean code like art—it has to be beautiful and functional.",
    "“If it’s not responsive, it’s not done.”"
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
    }, 5000);
}

// Add click event listener to the button
button.addEventListener('click', generateFact);

// ------------------------------------------------------------------------

const square = document.getElementById('randomSquare');
const main = document.querySelector('main');

let posX = Math.random() * (main.offsetWidth - 50); // Zufällige Startposition X
let posY = Math.random() * (main.offsetHeight - 50); // Zufällige Startposition Y
let angle = Math.random() * 360; // Zufälliger Startwinkel

let speedX = (Math.random() - 0.5) * 1; // Zufällige Geschwindigkeit in X-Richtung (±2px pro Frame)
let speedY = (Math.random() - 0.5) * 1; // Zufällige Geschwindigkeit in Y-Richtung (±2px pro Frame)
let rotationSpeed = Math.random() * 1 + 0; // Zufällige Rotationsgeschwindigkeit (zwischen 1 und 6 Grad pro Frame)

function moveSquare() {
    // Berechnung der neuen Position
    posX += speedX;
    posY += speedY;

    // Berechnung der neuen Rotation
    angle += rotationSpeed;

    // Verhindern, dass das Quadrat den Bildschirm verlässt
    if (posX < 0 || posX > main.offsetWidth - 50) {
        speedX = -speedX; // Richtungsumkehr bei Bildschirmrand
    }
    if (posY < 0 || posY > main.offsetHeight - 50) {
        speedY = -speedY; // Richtungsumkehr bei Bildschirmrand
    }

    // Setzen der neuen Position und Rotation
    square.style.transform = `translate(${posX}px, ${posY}px) rotate(${angle}deg)`;

    // Wiederholen der Bewegung
    requestAnimationFrame(moveSquare); // Optimierte, kontinuierliche Animation
}

// Start der Bewegung
moveSquare();


// ------------functions for open and closing nav sidebar--------------------


    const navbar = document.getElementById("navbar");
    const openButton = document.getElementById("openSidebar");
    const closeButton = document.getElementById("closeSidebar");

    function openSidebar() {
        console.log("Opening Sidebar...");
        navbar.classList.add("show");
    }

    function closeSidebar() {
        console.log("Closing Sidebar...");
        navbar.classList.remove("show");
    }

    // Attach event listeners
    openButton.addEventListener("click", openSidebar);
    closeButton.addEventListener("click", closeSidebar);

       // Select all the anchor tags inside the navbar (sidebar)
       const navLinks = document.querySelectorAll("#navbar a");

       // Close sidebar when any link is clicked
       navLinks.forEach(link => {
           link.addEventListener("click", () => {
               closeSidebar();
           });
       });

   // Optional: If you want smooth scroll behavior for anchor links, you can add this
   navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Prevent default anchor link behavior so you can control the scroll
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        closeSidebar(); // Close the sidebar after navigating
    });
});


});