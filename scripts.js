// Función para encriptar el texto
function encryptText() {
    const inputText = document.getElementById("inputText").value;

    // Validar que no contenga mayúsculas ni caracteres especiales
    if (!/^[a-z\s]+$/.test(inputText)) {
        document.getElementById("errorMessage").textContent = "Solo se permiten letras minúsculas y espacios.";
        return;
    }

    const outputText = encriptar(inputText);
    document.getElementById("outputText").value = outputText;
    document.getElementById("errorMessage").textContent = ""; // Limpiar mensaje de error
}

// Función para desencriptar el texto
function decryptText() {
    const inputText = document.getElementById("inputText").value;

    // Validar que no contenga mayúsculas ni caracteres especiales
    if (!/^[a-z\s]+$/.test(inputText)) {
        document.getElementById("errorMessage").textContent = "Solo se permiten letras minúsculas y espacios.";
        return;
    }

    const outputText = desencriptar(inputText);
    document.getElementById("outputText").value = outputText;
    document.getElementById("errorMessage").textContent = ""; // Limpiar mensaje de error
}

// Función para copiar el texto del área de resultado
function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    document.getElementById("errorMessage").textContent = "Texto copiado al portapapeles!";
}

// Función para encriptar usando las reglas definidas
function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar usando las reglas definidas
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


