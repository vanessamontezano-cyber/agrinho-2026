/* =========================
   ACCORDION
========================= */

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        if(content.style.maxHeight){

            content.style.maxHeight = null;
        }
        else{

            content.style.maxHeight =
            content.scrollHeight + "px";
        }
    });
});

/* =========================
   TAMANHO DA FONTE
========================= */

let currentSize = 100;

const increaseFont =
document.getElementById("increaseFont");

const decreaseFont =
document.getElementById("decreaseFont");

increaseFont.addEventListener("click", () => {

    currentSize += 10;

    document.body.style.fontSize =
    currentSize + "%";
});

decreaseFont.addEventListener("click", () => {

    currentSize -= 10;

    document.body.style.fontSize =
    currentSize + "%";
});

/* =========================
   MODO ESCURO
========================= */

const themeButton =
document.getElementById("toggleTheme");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );
});

/* =========================
   LEITURA POR VOZ
========================= */

const readButton =
document.getElementById("readContent");

const stopButton =
document.getElementById("stopReading");

let utterance;

readButton.addEventListener("click", () => {

    const content =
    document.getElementById("mainContent")
    .innerText;

    utterance =
    new SpeechSynthesisUtterance(content);

    utterance.lang = "pt-BR";

    speechSynthesis.speak(utterance);
});

stopButton.addEventListener("click", () => {

    speechSynthesis.cancel();
});