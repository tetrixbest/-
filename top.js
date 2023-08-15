document.addEventListener("click", ({ target }) => {
    if(target.classList.contains("btnDetails")) {
        localStorage.setItem("detail-id", target.id);
    }
});