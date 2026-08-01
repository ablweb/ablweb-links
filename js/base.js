document.body.classList.remove('no-js'); // Removes fallback styling 

const header = document.getElementById("top");
const button = document.getElementById("top-btn");

button.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});
