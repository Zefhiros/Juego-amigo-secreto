// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Esta función se encarga de agregar un amigo a la lista y actualizar el HTML
function agregarAmigo() {
  const nombre = document.getElementById("inputAmigo").value;
  if (nombre.trim() === "") {
    alert("por favor, inserte un nombre");
    return;
  }
  amigos.push(nombre);
  let elementoHtml = document.getElementById("listaAmigos");
  elementoHtml.innerHTML = "";
  amigos.forEach(function (amigo) {
    elementoHtml.innerHTML += `<li>${amigo}</li>`;
  });
  document.getElementById("inputAmigo").value = ""; // Limpia el input
}
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente
    for (let i = 0; i < amigos.length; i++) { // Iterar sobre el arreglo
        const li = document.createElement("li"); // Creo elemento <li>
        li.textContent = amigos[i]; // Asigno el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>¡Felicidades! Su amigo sorteado es: ${amigoSorteado}</li>`;{ 
         return;
    }
}  