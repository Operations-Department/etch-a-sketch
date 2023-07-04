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
//gets the height and width of the container
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

//divides the container heigth and width by 'n', chooses the smaller of the two, and rounds that number down to the whole number
const squareSize = Math.floor(Math.min(containerWidth / n, containerHeight / n));

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
const randomColor = function() {
let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

//pen - black for now
color.addEventListener('mouseover', function() {
color.classList.add('button-hover');
});
color.addEventListener('mouseout', function() {
color.classList.remove('button-hover');
});
color.addEventListener('click', function() {
color.classList.add('button-clicked');
rainbowMode.classList.remove('button-clicked');
eraser.classList.remove('button-clicked');
container.addEventListener('mouseover', function(event) {
  event.target.style.backgroundColor = colorPicker.value;
});
});

//rainbow mode button - puts a random color in the gridsquare
rainbowMode.addEventListener('mouseover', function() {
rainbowMode.classList.add('button-hover');
});
rainbowMode.addEventListener('mouseout', function() {
rainbowMode.classList.remove('button-hover');
});
rainbowMode.addEventListener('click', function() {
rainbowMode.classList.add('button-clicked');
color.classList.remove('button-clicked');
eraser.classList.remove('button-clicked');
container.addEventListener('mouseover', function (event) {
  event.target.style.backgroundColor = randomColor();
});
});

//eraser button - erases one gridsquare at a time
eraser.addEventListener('mouseover', function() {
eraser.classList.add('button-hover');
});
eraser.addEventListener('mouseout', function() {
eraser.classList.remove('button-hover');
});
eraser.addEventListener('click', function() {
eraser.classList.add('button-clicked');
color.classList.remove('button-clicked');
rainbowMode.classList.remove('button-clicked');
container.addEventListener('mouseover', function (event) {
  event.target.style.backgroundColor = "white";
});
});

//clears conatiner back to a white grid  
clear.addEventListener('mouseover', function() {
clear.classList.add('button-hover');
});
clear.addEventListener('mouseout', function() {
clear.classList.remove('button-hover');
});
clear.addEventListener('click', function() {
const cells = container.querySelectorAll('.gridsquare');
cells.forEach(function(cell) {
  cell.style.backgroundColor = 'white';
});
});

//scale


makeGrid(50);