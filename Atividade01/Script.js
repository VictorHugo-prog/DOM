const titulo = document.getElementById("titulo");
console.log("getElementById:", titulo);

const esportesPorClasse = document.getElementsByClassName("esporte");
console.log("getElementsByClassName:", esportesPorClasse);


const itensLista = document.getElementsByTagName("li");
console.log("getElementsByTagName:", itensLista);


const primeiroEsporte = document.querySelector(".esporte");
console.log("querySelector:", primeiroEsporte);


const todosEsportes = document.querySelectorAll(".esporte");
console.log("querySelectorAll:", todosEsportes);