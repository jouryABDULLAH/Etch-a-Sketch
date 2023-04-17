
//TODO: game mode, fill all the blanks before the timer ends
// or connect tow grids without touching a grid twice in the path
let container = document.querySelector('.box-container');
let create = document.getElementById('create');
let reset = document.getElementById('reset');


function draw(x){
    
    x.style.backgroundColor = 'black';
    x.style.borderColor = 'black';
  

}

function make_grids(num = 16){ // default size is 16x16
    console.log(num);
    
    // remove previous grids
    container.innerHTML = '';

    boxes = num * num ;

    for(let i=0 ; i<boxes ; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute("onmouseover","draw(this)");
        console.log(num);

        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.appendChild(box);
    }

}

make_grids();

let box = document.querySelectorAll('.box');


// let box = document.querySelectorAll('.box');

// box.forEach( box => box.addEventListener('mouseover', (e) => {
//     box.style.backgroundColor = 'black';
//     box.style.borderColor = 'black';
// }));


create.addEventListener('click', () => {

    let size = 0;
    console.log(size);
    do {
        size = prompt('Enter the size:','');
        console.log(size);

    } while (size > 100 );
    console.log(size);

    make_grids(size);

    
});


reset.addEventListener('click', () => {

    let box = document.querySelectorAll('.box');
    box.forEach( box => {
        box.style.backgroundColor = 'white';
        box.style.borderColor = 'rgb(182, 169, 172)';
    });
});