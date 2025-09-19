// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crear un array para almacenar los nombres

console.log("Archivo JS cargado correctamente");
let amigos = [];
console.log (amigos.length);


function limpiarCaja() {
    document.getElementById("amigo").value="";
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombre);
        mostrarLista();
        limpiarCaja();
    }

}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";

    for (let i=0; i<amigos.length; i++){
        console.log(amigos[i]);
    }

    let html = "";
    for (let i = 0; i < amigos.length; i++) {
    html += "<li>" + amigos[i] + "</li>";
    }
    lista.innerHTML = html;

    console.log("Lista HTML generada:");
    console.log(html);

}


function sortearAmigo() {
    
    if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos para sortear";
    return;
} 
let indice = Math.floor(Math.random() * amigos.length);

let nombreSorteado = amigos[indice];
document.getElementById("resultado").innerHTML = "El amigo sorteado es: "  + nombreSorteado;
}