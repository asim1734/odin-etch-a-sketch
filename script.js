const container = document.querySelector(".container");


function generateGrid(){
for(let i = 1 ; i < 16*16 + 1 ; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = i;
    container.appendChild(box);
}
}

generateGrid();

