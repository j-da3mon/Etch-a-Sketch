console.log("Welcome to Etch-a-Sketch!")

// seleect the container div

let container = document.querySelector(".container");

// function to append ?? x ?? grid squares

function makeGrid(num1, num2) {

     // reset container div for user-defined grids
        
     container.innerHTML = "";

    for (let i = 0; i < (num1 * num2); i++) {

        // create box element

        let box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("id", "grid-box");
        
        console.log(i)

        // append box element to container
        
        container.appendChild(box);
    }
}

// initialize grid

makeGrid(16, 16)

// add event lister for grid size button

let spsGrid = document.querySelector(".sps-grid")
spsGrid.addEventListener('pointerdown', (event) => {
    let gridVar = prompt("Please enter the number of squares per side for the new grid.");
    makeGrid(gridVar, gridVar);

    // refire event listerners for user-defined grid

    let boxHover = document.querySelectorAll("#grid-box");

    boxHover.forEach((gridBox) => {
    gridBox.addEventListener("pointerover", (event) => {
        gridBox.setAttribute("style", "background: black;");
    })

    gridBox.addEventListener("pointerout", (event) => {
        gridBox.setAttribute("style", "default");
    })
})
} )

// add event listener for hover effect

let boxHover = document.querySelectorAll("#grid-box");

boxHover.forEach((gridBox) => {
    gridBox.addEventListener("pointerover", (event) => {
        gridBox.setAttribute("style", "background: black;");
    })

    gridBox.addEventListener("pointerout", (event) => {
        gridBox.setAttribute("style", "default");
    })
})
