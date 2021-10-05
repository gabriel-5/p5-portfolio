let gridContainer = document.querySelector("#grid-container");

let material = "brick"

let cellAmount = 48;
let cellSize = 520 / cellAmount;




function gameSetup(n) {

    for (i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div"); //create cells in the DOM
            cell.classList.add("cell");               //applies class "cell" to the cells
            gridContainer.appendChild(cell);          //appends them as a child to the gridContainer div
            cell.style.width = `${cellSize}px`;       //sets height and width depending on initial cellAmount variable
            cell.style.height = `${cellSize}px`;      // this is calculated by taking the width of the gridContainer and dividing
        }                                             // it by the value of cellAmount 
    }

    let cells = document.querySelectorAll(".cell");
    cells.forEach(c => {
        c.addEventListener("mouseover", () => {
            c.classList.add("brick");
        }
        )
    })
}

gameSetup(cellAmount);
