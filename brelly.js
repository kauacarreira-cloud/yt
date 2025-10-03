const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;


const novasImagens = {
    "1.jpeg": "9.jpeg",
    "2.jpeg": "10.jpeg",
    "3.jpeg": "11.jpeg",
    "4.jpeg": "12.jpeg",
    "5.jpeg": "13.jpeg",
    "6.jpeg": "14.jpeg",
    "donalogo.jpeg": "raulogo.jpeg",
    "donacima.jpeg": "raucima.jpeg"
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