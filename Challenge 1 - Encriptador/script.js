/*function Display() {
  document.getElementById("myP1").style.display = "none";
}

function Visibility() {
  document.getElementById("myP2").style.visibility = "hidden";
}/*/

// Reglas de encriptación y desencriptación
const encriptarReglas = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptarReglas = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptar() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText.replace(/[aeiou]/g, match => encriptarReglas[match]);
    document.getElementById('outputText').value = encryptedText;
}

function desencriptar() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText.replace(/ai|enter|imes|ober|ufat/g, match => desencriptarReglas[match]);
    document.getElementById('outputText').value = decryptedText;
}

function copiarTexto() {
    const texto = document.getElementById('outputText');
    
    texto.select();
    texto.setSelectionRange(0, 99999);

    try {
        const exito = document.execCommand('copy');
        if (exito) {
            alert('Texto copiado al portapapeles');
        } else {
            alert('No se pudo copiar el texto');
        }
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
}