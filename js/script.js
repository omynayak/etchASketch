// Project: Etch-A-Sketch
/* 
Goal: Make a 16x16 grid of square shaped divs sitting within a 960px*960px parent div
      and make it such that when the mouse hovers onto a div it changes colour to some value, 
      leaving behind a pretty trail of colours
Additional: Also add a button that when clicked prompts the user to input a dimension of their choice 
            and then start the thing afresh with this new dimension
*/


// Constants
const MAMA_SIZE = 960;

// DOM element references
const mamaDiv = document.getElementById("mama-div");
const button = document.getElementById("dimBut");

// Default grid dimension
let dimension = 16;

/**
 * Generates a square grid of (dimension x dimension) div elements inside the parent container.
 * Each div changes to a random color when hovered over.
 */
function generateGrid() {
    mamaDiv.innerHTML = ""; // Clear existing grid
    const size = MAMA_SIZE / dimension; // Compute size of each cell

    for (let i = 0; i < dimension * dimension; i++) {
        const babyDiv = document.createElement("div");
        babyDiv.setAttribute("style", `width: ${size}px; height: ${size}px; background-color: white;`);

        babyDiv.addEventListener("mouseover", () => {
            babyDiv.style.backgroundColor = randomRGB();
        });

        mamaDiv.appendChild(babyDiv);
    }
}

/**
 * Returns a randomly generated RGB color string.
 * Returns a random rgb(r, g, b) string.
 */
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

/**
 * Prompts the user for a new grid dimension and regenerates the grid.
 */
function requestNewDimensions() {
    do {
        dimension = Number(prompt("Enter new dimensions (between 1 and 25):"));
    } while (dimension <= 0 || dimension > 25 || isNaN(dimension));

    generateGrid();
}

// Initialize default grid
generateGrid();

// Register event listener for dimension input button
button.addEventListener("click", requestNewDimensions);
