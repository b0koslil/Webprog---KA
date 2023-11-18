
let cellColors = ['', '', '', ''];
        
let currentColor = 'red';

function changeColor(event) {
    const index = event.target.dataset.index;
    const cell = document.querySelectorAll('.item')[index];
    
    if (cellColors[index] === '') {
        cell.style.backgroundColor = currentColor;
        cellColors[index] = currentColor;
        currentColor = currentColor === 'red' ? 'blue' : 'red';
    } 
    else {
        cell.style.backgroundColor = '';
        cellColors[index] = '';
    }
}

function renderContent() {
    let content = '';
    for (let i = 0; i < 4; i++) {
        content += `<div class = "item" onclick = "changeColor(event)" data-index = "${i}"></div>`;
    }
    document.querySelector('.container').innerHTML = content;
}

renderContent();
