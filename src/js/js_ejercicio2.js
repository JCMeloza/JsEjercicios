document.getElementById("contarClicsBtn").addEventListener("click", () => {
    let contador = parseInt(localStorage.getItem("contadorClics")) || 0;
    contador++;
    localStorage.setItem("contadorClics", contador);
    document.getElementById("contador").innerText = `Clics: ${contador}`;
});