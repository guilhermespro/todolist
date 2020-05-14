const board= document.querySelector("#board");
let meuInput = document.querySelector('#novaTarefa');
const imgAdd = document.querySelector('#add');

function adicionarTarefa(event) {
    const tarefaDigitada = input.value;

    const divTarefa = document.createElement("div");
    divTarefa.classList.add("tarefa");

    const divConteudo = document;createElement("div");
    divConteudo.classList.add("col-md-8");
    divConteudo.innerText = tarefaDigitada;

    const divImg = document.createElement("div");
    divConteudo.classList.add("col-md-2");

    const imgCheck = document.createElement("img");
    imgCheck.setAttribute("src", "img/check.png");
    imgCheck.setAttribute("class", "icon");

    divImg.appendChild(imgCheck);

    divTarefa.appendChild(divConteudo);
    divTarefa.appendChild(divImg);

    board.appendChild(divTarefa);
    input.value = "";
}

input.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
       adicionarTarefa();
    }

});

imgAdd.onclick = adicionarTarefa;