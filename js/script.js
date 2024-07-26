console.log("Welcome to Etch-a-Sketch!")

// seleect the container div

let container = document.querySelector(".container");

// function to append ?? x ?? grid squares

function makeGrid(num1, num2) {
    for (let i = 0; i < (num1 * num2); i++) {

        // create box element

        let box = document.createElement("div");
        box.setAttribute("id", "grid-box");
        
        console.log(i)

        // append box element to container
        
        container.appendChild(box);
    }
}

// create grid

makeGrid(16, 16)

