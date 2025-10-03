const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+<>?";

function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

document.getElementById("generate").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const passwordDiv = document.getElementById("password");
    const errorDiv = document.getElementById("error");

    passwordDiv.textContent = "";
    errorDiv.textContent = "";

    if (isNaN(length) || length < 4) {
        errorDiv.textContent = "⚠️ La longitud debe ser mayor o igual a 4.";
        return;
    }

    const password = generatePassword(length);
    passwordDiv.textContent = "🔑 " + password;
});
