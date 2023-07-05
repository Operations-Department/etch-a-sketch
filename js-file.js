const page = document.getElementById('page');
const container = document.getElementById('container');
const colorPicker = document.getElementById('color-picker');
const color = document.getElementById('color');
const rainbowMode = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const scale = document.getElementById('scale');
const scaleValue = document.getElementById('scale-value');

//makes the grid and puts it into the container div
function makeGrid(n) {

//gets side length of the container
const containerSide = container.offsetWidth;

//get size of each square by dividing container height or width by n
const squareSize = containerSide / n;

//generates rows
for (let rows = 0; rows < n; rows++) {
const row = document.createElement("div");
row.className = "row";

//generates columns
for (let columns = 0; columns < n; columns++) {
const cell = document.createElement("div");
cell.className = "gridsquare";

//sets the height and width of each square in pixels
cell.style.width = squareSize + "px";
cell.style.height = squareSize + "px";

//adds the div into each row yielding a column
row.appendChild(cell);
}
//add the rows with cells(columns) inside to the container
container.appendChild(row);
}
};

//function to generate random colors - to be called by the rainbow button later
const randomColor = () => {
let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

//color mode
color.addEventListener('mouseover', () => {
color.classList.add('button-hover');
});
color.addEventListener('mouseout', () => {
color.classList.remove('button-hover');
});
color.addEventListener('click', () => {
color.classList.add('button-clicked');
rainbowMode.classList.remove('button-clicked');
eraser.classList.remove('button-clicked');
container.addEventListener('mouseover', (e) => {
e.target.style.backgroundColor = colorPicker.value;
});
});

//rainbow mode button - puts a random color in the gridsquare
rainbowMode.addEventListener('mouseover', () => {
rainbowMode.classList.add('button-hover');
});
rainbowMode.addEventListener('mouseout', () => {
rainbowMode.classList.remove('button-hover');
});
rainbowMode.addEventListener('click', () => {
rainbowMode.classList.add('button-clicked');
color.classList.remove('button-clicked');
eraser.classList.remove('button-clicked');
container.addEventListener('mouseover', (e) => {
e.target.style.backgroundColor = randomColor();
});
});

//eraser button - erases one gridsquare at a time
eraser.addEventListener('mouseover', () => {
eraser.classList.add('button-hover');
});
eraser.addEventListener('mouseout', () => {
eraser.classList.remove('button-hover');
});
eraser.addEventListener('click', () => {
eraser.classList.add('button-clicked');
color.classList.remove('button-clicked');
rainbowMode.classList.remove('button-clicked');
container.addEventListener('mouseover', (e) => {
e.target.style.backgroundColor = "white";
});
});

//clears container back to a white grid  
clear.addEventListener('mouseover', () => {
clear.classList.add('button-hover');
});
clear.addEventListener('mouseout', () => {
clear.classList.remove('button-hover');
});
clear.addEventListener('click', (e) => {
const cells = container.querySelectorAll('.gridsquare');
cells.forEach(function(cell) {
cell.style.backgroundColor = 'white';
});
});

//scale
scale.value = 50;
scaleValue.textContent = `${scale.value} x ${scale.value}`;
scaleValue.style.color = "white";

scale.addEventListener('input', (e) => {
scaleValue.textContent = `${e.target.value} x ${e.target.value}`;
clearGrid();
makeGrid(e.target.value);
});

//clears the grid before adding a new grid by adjusting the scale
function clearGrid() {
while(container.firstChild) {
container.firstChild.remove();
}
};

makeGrid(scale.value);