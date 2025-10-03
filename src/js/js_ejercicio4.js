
searchInput.addEventListener("input", () => {
    let searchImput = document.getElementById("searchInput");
    let items = document.getElementsByTagName("li");
    let filter = searchImput.value.toLowerCase();

    Array.from(items).forEach((item) => {
        let text = item.textContent || item.innerText;
        item.classList.toggle("hidden", !text.toLowerCase().includes(filter));
    });
});
