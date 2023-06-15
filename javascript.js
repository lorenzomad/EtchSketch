const container = document.querySelector('.container');

let rows = 50;

const Generatematrix = (rows) => {

    const dimensions = 500/rows
    const dimensions_string = String(dimensions) + 'px'
    for (let x = 0; x < rows; x++) {

        const rowdiv = document.createElement('div');
        rowdiv.style.flex = '1';
        rowdiv.style.display = 'flex';        
        
        for (let y = 0; y < rows; y++){
            
            const div = document.createElement('div');
            div.style.width = dimensions_string;
            div.style.height = dimensions_string;

            div.classList.add('cell')

            //for visualitzation purpose
            div.style.backgroundColor = 'blue';
            // div.style.borderStyle = "solid";
            // div.style.borderColor = "black";

            div.style.flex = '1';

            rowdiv.appendChild(div)


        }

        container.appendChild(rowdiv)
        
    }
}

//generate the matrix of cells
Generatematrix(ROWS)

// add the event listeners for hovering to the cells
const cells  = document.querySelectorAll('.cell')

cells.forEach((element) => {
    element.addEventListener('mouseover', () =>{
        element.style.backgroundColor = 'yellow';
    })
})

const restart_button = document.querySelector('button')

restart_button.addEventListener('click', () => {
    while (true) {
        rows = prompt("what is the number of rows you want (0 - 100)?");
        if (isNaN(parseInt(rows)) || rows < 0 || rows > 100) {
            alert('Please choose a valid value between 0 and 100');
            
        }    else {
            break;
        }
    }
    container.textContent = '';
    Generatematrix(rows)
})