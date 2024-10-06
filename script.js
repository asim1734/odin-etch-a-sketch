const container = document.querySelector(".container");
const getSizeBtn = document.querySelector(".get-size-btn");

generateGrid(30);
addMouseListeners();

getSizeBtn.addEventListener("click", () =>{
    const size = prompt("Enter pixel size");
    if (size < 100){
    clearGrid();
    generateGrid(size);
    addMouseListeners();
    }
})

function generateGrid(size){
    const boxWidth = getBoxSize(size);
    for(let i = 1 ; i < size * size + 1 ; i++){
        const box = document.createElement("div");
        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxWidth}px`;
        box.classList.add("box");
        container.appendChild(box);
    }
}

function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function getBoxSize(size){
    const containerWidth = container.clientWidth;
    const boxWidth = containerWidth / size;
    return boxWidth;
}

function addMouseListeners(){
    let isMouseDown = false;
    container.addEventListener("mousedown", () =>{
        isMouseDown = true;
    });

    container.addEventListener("mouseup", () =>{
        isMouseDown = false;
    });

    const children = Array.from(container.children);
    children.forEach(child =>{
        child.addEventListener("mouseover" ,function (event) {
            if(isMouseDown){
            event.target.style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
            }
        } )
    })
    
}

function getRandom(){
    return Math.floor(Math.random() * 256);
}

