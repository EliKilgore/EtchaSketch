const drawingBoard = document.getElementById("drawingBoard")
const clearButton = document.getElementById("clear")
const slider = document.getElementById("inputValue")

clearButton.addEventListener("click", clearBoard)

function createBoard(size) {
    drawingBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    drawingBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i=0; i < (size**2); i++) {
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.addEventListener("mouseover", changeColor)
        drawingBoard.appendChild(pixel)
    }
}

function clearBoard () {
    drawingBoard.innerHTML = ""
}
function changeColor() {
    this.style.cssText = "background-color: #333"
}

console.log(slider.value)


createBoard(16)