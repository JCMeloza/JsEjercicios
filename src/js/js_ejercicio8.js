const textarea = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
    let text = textarea.value;

    // Contar caracteres (excluyendo espacios y saltos de línea)
    let chars = text.replace(/\s/g, "").length;

    // Contar palabras (filtrando vacíos por múltiples espacios)
    let words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length;

    charCount.textContent = chars;
    wordCount.textContent = words;
});
