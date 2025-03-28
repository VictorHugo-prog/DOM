const titulo = document.getElementById("titulo");
titulo.textContent = "Meus Esportes Favoritos"; // Altera o título
titulo.style.color = "blue"; // Muda a cor para azul

console.log("getElementById:", titulo);

const esportesPorClasse = document.getElementsByClassName("esporte");
console.log("getElementsByClassName:", esportesPorClasse);

const itensLista = document.getElementsByTagName("li");
console.log("getElementsByTagName:", itensLista);

const primeiroEsporte = document.querySelector(".esporte");
console.log("querySelector:", primeiroEsporte);

const todosEsportes = document.querySelectorAll(".esporte");
console.log("querySelectorAll:", todosEsportes);

const lista = document.querySelector("ul");
const novoEsporte1 = document.createElement("li");
novoEsporte1.textContent = "Tênis";
novoEsporte1.classList.add("esporte");

const novoEsporte2 = document.createElement("li");
novoEsporte2.textContent = "Polo Aquático";
novoEsporte2.classList.add("esporte");

lista.appendChild(novoEsporte1);
lista.appendChild(novoEsporte2);
