var input = document.querySelector(".input");
const output = document.querySelector(".output")


function btnEncriptar() {
    const textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    output.style.backgroundImage = "none";
    input.value = "";

}
function encriptar(entrada) {
    let clave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    entrada = entrada.toLowerCase();
    for (let i = 0; i < clave.length; i++) {
        if (entrada.includes(clave[i][0])) {
            entrada = entrada.replaceAll(clave[i][0], clave[i][1])
        }
    }
    return entrada;


}

function btnDesencriptar() {

    const textoEncriptado = desencriptar(input.value);
    output.value = textoEncriptado;
    output.style.backgroundImage = "none"
   
    input.value = "";

}

function desencriptar(entrada) {
    let clave = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    entrada = entrada.toLowerCase();
    for (let i = 0; i < clave.length; i++) {
        if (entrada.includes(clave[i][0])) {
            entrada = entrada.replaceAll(clave[i][0], clave[i][1])
        }
    }
    return entrada;
}

function copiar() {
    output.select();
    navigator.clipboard.writeText(output.value)
}


function pegar(){
    
  document.querySelector('.input').value = output.value
}

function borrar() {
    document.querySelector('.output').value = "";
    document.querySelector('.input').value = ""
    output.style.backgroundImage = "url('imagenes/encriptar_1.jpg')";
}

