
let container = document.querySelector('.box-container');

function make_grids(num = 16){ // default size is 16x16

    boxes = num* num ;
    // console.log(num);
    for(let i=0 ; i<boxes ; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.appendChild(box);
    }

}

make_grids();