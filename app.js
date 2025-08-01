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
