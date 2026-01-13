console.log("Script Running");

// Create a helper function that moves a penguin across the grid
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
const slide = (sprite, place) => (place <= 6 ? sprite.style.setProperty("grid-column", place) : null);


// Create position variables for each penguin and set them all to 1
let tux_place = 1;
let daisy_place = 1;
let rocky_place = 1;
// Query selectors for all buttons and penguins go here
const tuxbtn = document.querySelector("#tux-button");
const daisybtn = document.querySelector("#daisy-button");
const rockybtn = document.querySelector("#rocky-button");

const tux = document.querySelector("#tux-penguin");
const daisy = document.querySelector("#daisy-penguin");
const rocky = document.querySelector("#rocky-penguin");

const winnerText = document.querySelector("#winner");
// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
const slidetux = () => {
    tux_place += 1;
    slide(tux, tux_place);
    checkWinner(tux_place, "Tux");
    tux.alt = `Tux is at place ${tux_place} out of 6`;
};


// Write the function that moves Daisy forward
const slidedaisy = () => {
    daisy_place += 1;
    slide(daisy, daisy_place);
    checkWinner(daisy_place, "Daisy");
    daisy.alt = `Daisy is at place ${daisy_place} out of 6`;
};


// Write the function that moves Rocky forward
const sliderocky = () => {
    rocky_place += 1;
    slide(rocky, rocky_place);
    checkWinner(rocky_place, "Rocky");
    rocky.alt = `Rocky is at place ${rocky_place} out of 6`;
};


// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
const checkWinner = (position, name) => {
    if (position === 6){
        winnerText.innerHTML = name + " got the fish!🐟"
        tuxbtn.disabled = true;
        daisybtn.disabled = true;
        rockybtn.disabled = true;
    }
}


// Add event listeners for each button
// Each button should trigger its own movement function
tuxbtn.addEventListener("click", slidetux);
daisybtn.addEventListener("click", slidedaisy);
rockybtn.addEventListener("click", sliderocky);