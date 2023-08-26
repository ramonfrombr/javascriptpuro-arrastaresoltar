const preenchido = document.querySelector(".preenchido");
const vazios = document.querySelectorAll(".vazio");

function iniciarArraste() {
    this.className += " arrastando";
    setTimeout(() => (this.className = "invisivel"), 0)
}

function terminarArraste() {
    this.className = "preenchido";
}

preenchido.addEventListener("dragstart", iniciarArraste);
preenchido.addEventListener("dragend", terminarArraste);

function encostar(evento) {
    evento.preventDefault();
    this.className += " em-cima";
}

function desencostar() {
    this.className = "vazio";
}

function manterEmCima(evento) {
    evento.preventDefault();
}

function soltar() {
    this.append(preenchido);
    this.className = "vazio";
}

for (const vazio of vazios) {
    vazio.addEventListener("dragenter", encostar);
    vazio.addEventListener("dragleave", desencostar);
    vazio.addEventListener("dragover", manterEmCima);
    vazio.addEventListener("drop", soltar);
}
