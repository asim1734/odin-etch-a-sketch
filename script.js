const container = document.querySelector(".container");


function generateGrid(){
for(let i = 1 ; i < 16*16 + 1 ; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}
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
            event.target.style.backgroundColor = "red";
            }
        } )
    })
    
}

generateGrid();
addMouseListeners();

