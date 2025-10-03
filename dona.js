const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;


const novasImagens = {
    "dona1.jpeg": "astro9.jpeg",
    "dona2.jpeg": "astro10.jpeg",
    "dona3.jpeg": "astro11.jpeg",
    "dona4.jpeg": "astro12.jpeg",
    "dona5.jpeg": "astro13.jpeg",
    "dona6.jpeg": "astro14.jpeg",
    "donalogo.jpeg": "astrologo.jpeg",
    "donacima.jpeg": "astrocima.jpeg"
};

botaoImagens.addEventListener("click", () => {
    if (!trocou) {
        imagens.forEach(img => {
            img.dataset.original = img.src; 
            const arquivo = img.src.split("/").pop(); 
            if (novasImagens[arquivo]) {
                img.src = novasImagens[arquivo];
            }
        });
        trocou = true;
    } else {
        imagens.forEach(img => {
            if (img.dataset.original) {
                img.src = img.dataset.original; // volta ao original
            }
        });
        trocou = false;
    }
});