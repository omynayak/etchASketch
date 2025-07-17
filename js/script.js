// Project: Etch-A-Sketch
/* 
Goal: Make a 16x16 grid of square shaped divs sitting within a 960px*960px parent div
      and make it such that when the mouse hovers onto a div it changes colour to some value, 
      leaving behind a pretty trail of colours
Additional: Also add a button that when clicked prompts the user to input a dimension of their choice 
            and then start the thing afresh with this new dimension
*/
const MAMA_SIZE = 960
// Let's start with filling up id "mama-div" with her 16 * 16 babies
const mamaDiv = document.getElementById("mama-div")
let dimension = 16
for(let value = 0; value < (dimension*dimension); value++){
    let tempDiv = document.createElement("div")
    // Now that we have the div created we want to try and give it the appropriate default size 
    let size = MAMA_SIZE / dimension
    tempDiv.setAttribute("style",`height:${size}px; width: ${size}px; background-color: white;`)
    mamaDiv.appendChild(tempDiv)
}

// I shall now attach the script file to the html file and see what happens
// It did NOT work for some reason
// 2 main issues: 1. I was setting the dimensions as ${dimension}px instead of ${size}px (stupid I know)
//                2. I hadn't set up a height for the mama div herself. Only a width. Also stupid.


// Next let's setup a variable for the button
const button = document.getElementById("dimBut") // dimBut = "dimension" + "button" btw. Not what you're thinking
// Set up an event listener for when the button gets clicked:
button.addEventListener("click", requestNewDimensions)

let newDimensions = 0
function requestNewDimensions(){
    do{
        newDimensions = Number(prompt("Enter new dimensions (between 0 and 25): "))
    } while(newDimensions <= 0 || newDimensions > 25 || isNaN(newDimensions));
    // I will now run the script and see if it works
    // The prompt did not appear for some reason
    // The issue was that the html file had "dimButton" as the button's ID
}

// So far we've done all the easy work. Now our tasks are the following: 
// 1. Change the number of baby divs to match newDimensions * newDimensions (Do we even need newDimensions or can we make do with dimensions?)
// 2. Randomly generate an rgb value (using : Math.floor(Math.random() * 256)) and append it to the div hovered on
// 3. To execute step 2 I need to know how to even detect if a div is hovered on
// 4. Once we have the div that is hovered on (do I need to assign unique IDs for that?) and the random colour, we simply setAttribute our way 
//    through it

// Let's get this money:

// 1. Generate a grid
function generateGrid(){
    // So first we clean up all the divs already in mama div and define the new size:
    mamaDiv.innerHTML = "";
    let size = MAMA_SIZE / newDimensions;

    //So now we generate divs EXACTLY as we did before (we can probably remove the loop in the beginning and just use this function instead)
    // But for that it would be better if we got rid of newDimensions entirely and just used dimensions
    // I will do it in a future commit
    for(let value = 0; value < (newDimensions*newDimensions); value++){

        //We make the div and give it the basic characteristics:
        let babyDiv = document.createElement("div")
        babyDiv.setAttribute("style",`width: ${size}px; height: ${size}px; background-color: white;`)

        // 3. Detecting when the div is hovered over:
        // We do this by setting up an eventListener for the event "mouseover"
        // Following which we "release it into the wild" = append it to mama where it will continue carrying the eventListener
        // The function attached to the event listener will change the bg colour using the random rgb generator below (spoiler alert!)
        babyDiv.addEventListener("mouseover", () => {
            babyDiv.style.backgroundColor = randomRGB()
        })
        mamaDiv.appendChild(babyDiv)
    }
}

// 2. Random RGB generator:
//Straightforward really.
function randomRGB(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}


// Okay so far we've managed to make a very crude, almost complete version of what we want. Enough for me to make the first commit.
/*
The path ahead is super clear to me:

Next commit:
1. Add call to the generateGrid function in the requestNewDimensions function
2. Add the event listener and random rgb generator in the opening loop
This makes the program fully functioning

(Next + 1) commit:
1. Start with getting rid of newDimension and just using dimensions defaulted to 16
2. Consequently scrap the opening loop and just use the generateGrid function instead
3. Remove these comments and add some robotic, professional comments 🤖 instead 
This makes it a "nice" and "well written programme"

*/
