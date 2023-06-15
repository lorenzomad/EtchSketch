const container = document.querySelector('.container');

const ROWS = 64;

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

            //for visualitzation purpose
            div.style.backgroundColor = 'blue';
            div.style.borderStyle = "solid";
            div.style.borderColor = "black";

            div.style.flex = '1';

            rowdiv.appendChild(div)


        }

        container.appendChild(rowdiv)
        
    }
}


Generatematrix(ROWS)
