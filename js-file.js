const page = document.getElementById('page');
const container = document.getElementById('container');

const rows = 4;
const columns = 4; 

for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  
  for (let j = 0; j < columns; j++) {
    const column = document.createElement('div');
    column.className = 'column';
    
    row.appendChild(column);
  }
  
  container.appendChild(row);
}