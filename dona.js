const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;


const novasImagens = {
    "yuri1.jpeg": "kaka1.jpeg",
    "yuri2.jpeg": "kaka2.jpeg",
    "yuri3.jpeg": "kaka3.jpeg",
    "yuri4.jpeg": "kaka4.jpeg",
    "yuri5.jpeg": "kaka5.jpeg",
    "yuri6.jpeg": "kaka6.jpeg",
    "yurilogo.jpeg": "kakalogo.jpeg",
    "yuricima.jpeg": "kakacima.jpeg"
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