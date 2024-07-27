console.log("Welcome to Etch-a-Sketch!")

// seleect the container div

let container = document.querySelector(".container");

// function to append ?? x ?? grid squares

function makeGrid(num1, num2) {
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

// create grid

makeGrid(16, 16)

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


