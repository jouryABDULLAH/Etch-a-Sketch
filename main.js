
let container = document.querySelector('.box-container');
let btn = document.querySelector('.btn');
let box = document.querySelectorAll('.box');

function make_grids(num = 16){ // default size is 16x16
    console.log(num);
    
    // remove previous grids
    container.innerHTML = '';

    boxes = num * num ;

    for(let i=0 ; i<boxes ; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        console.log(num);

        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.appendChild(box);
    }

}

make_grids();

btn.addEventListener('click', () => {

    let size = 0;
    console.log(size);
    do {
        size = prompt('Enter the size:','');
        console.log(size);

    } while (size > 100 );
    console.log(size);

    make_grids(size);

});