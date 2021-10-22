const drawingBoard = document.getElementById("drawingBoard")
const clearButton = document.getElementById("clear")
const colorButton = document.getElementById('color')
const chaosButton = document.getElementById("chaos")
const eraserButton = document.getElementById('eraser')
const slider = document.getElementById("slider")



const baseBoardSize = 16
const baseMode = 'color'
const baseColor = '#333'

let boardSize = baseBoardSize
let mode = baseMode
let color = baseColor

clearButton.onclick = () => clearBoard()

function clearBoard () {
    drawingBoard.innerHTML = ""
    console.log('clearing board!')
    changeMode('color')
    createBoard(boardSize)
}

function createBoard(size) {
    drawingBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    drawingBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i=0; i < (size**2); i++) {
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.addEventListener("mouseover", changeColor)
        drawingBoard.appendChild(pixel)
    }
    pixels = Array.from(document.querySelectorAll('.pixel'))
}

colorButton.onclick = () => changeMode('color')
chaosButton.onclick = () => changeMode('chaos')
eraserButton.onclick = () => changeMode('eraser')

function changeMode (newMode) {
    mode = newMode
    if (mode =='color') {
        colorButton.classList.add('active')
        eraserButton.classList.remove('active')
        chaosButton.classList.remove('active')
    }
    else if (mode == 'eraser'){
        eraserButton.classList.add('active')
        chaosButton.classList.remove('active')
        colorButton.classList.remove('active')
    }
    else if (mode == 'chaos') {
        chaosButton.classList.add('active')
        eraserButton.classList.remove('active')
        colorButton.classList.remove('active')
    }
}

function changeColor() {
    if (mode === 'color') {
        this.style.backgroundColor = color
    }
    else if (mode === 'eraser') {
        this.style.backgroundColor = "#ededed"
    }
    else if (mode === 'chaos') {
        this.style.backgroundColor = getRandomColor()
    }
}

function getRandomColor () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

slider.oninput = function () {
    changeBoardSize()
}

function changeBoardSize() {
    let size = slider.value
    document.getElementById("sliderValue").innerHTML = `${size} x ${size}`
    boardSize = size;
}


createBoard(boardSize)