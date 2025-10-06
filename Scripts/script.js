window.addEventListener("load", () => {
    const duracionGif = 2500;

    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none";  // Oculta el GIF
        }
        document.body.classList.remove("loader"); 
    }, duracionGif);
});