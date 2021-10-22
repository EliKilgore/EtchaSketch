let boardSize = 16


const drawingBoard = document.getElementById("drawingBoard")
const clearButton = document.getElementById("clear")
const slider = document.getElementById("slider")


slider.oninput = function () {
    changeValue()
}

clearButton.onclick = () => clearBoard()

function clearBoard () {
    drawingBoard.innerHTML = ""
    console.log('clearing board!')
    createBoard(boardSize)
}

function createBoard(size) {
    drawingBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    drawingBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i=0; i < (size**2); i++) {
        const pixel = document.createElement("div")
        pixel.addEventListener("mouseover", changeColor)
        drawingBoard.appendChild(pixel)
    }
}

function changeColor() {
    this.style.cssText = "background-color: #333"
}

function changeValue() {
    let size = slider.value
    document.getElementById("sliderValue").innerHTML = `${size} x ${size}`
    console.log(size)
    boardSize = size;
    console.log('board size is ' + boardSize)
}

createBoard(boardSize)