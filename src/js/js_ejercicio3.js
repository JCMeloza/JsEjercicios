document.getElementById("agregarTexto").addEventListener("click", () => {
    let texto = document.getElementById("textoAgregar").value;
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");

    nuevoLi.appendChild(document.createTextNode(texto));
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        lista.removeChild(nuevoLi);
    });
    
    nuevoLi.appendChild(botonEliminar);
    lista.appendChild(nuevoLi);
    document.getElementById("textoAgregar").value = "";
});
