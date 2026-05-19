const primera = ["Proyecto creado por Michitler"];

const frases1 = ["Well, come and get it now, come and get it now", "Baby, show me what you're doing, come and turn around",
    "'Cause it's not just a figure of speech", "you got me down on my knees", "It's getting harder to breathe out",
    "We only met each other just the other day", "But you already got me feeling some type of way, now", "If I could figure it out",
    "I'd take you back to my house", "So we could meddle about."
];

const frases2 = ["We could meddle about", "Woah-oh-oh-oh-oh", "We could meddle about", "No, woah-oh-oh-oh-ooh",
    "We could meddle about", "Woah-oh-oh-oh-oh", "We could meddle about."];

const frases3 = ["Girl, just scream it out", "Tell me what you're thinking, oh", "I wanna see you undress now", "I wanna hear you confess now"];

const frases4 = ["We only met each other just the other day", "But you already got me feeling some type of way",
    "If I could figure it out, I'd take you back to my house", "So we could meddle about"
];

const frases5 = ["Back to my house, so we can", "Back to my house, so we can"];

const frases6 = ["Meddle about", "Meddle about"];

const frases7 = ["We could meddle about", "Meddle about", "We could meddle about", "Woah-oh-oh-oh-oh", "We could meddle about"];

const frases8 = ["Gracias por escuchar mi proyecto :D"];

const mayusculas = primera.map(frase => frase.toUpperCase());
const mayusculas2 = frases1.map(frase => frase.toUpperCase());
const mayusculas3 = frases2.map(frase => frase.toUpperCase());
const mayusculas4 = frases3.map(frase => frase.toUpperCase());
const mayusculas5 = frases4.map(frase => frase.toUpperCase());
const mayusculas6 = frases5.map(frase => frase.toUpperCase());
const mayusculas7 = frases6.map(frase => frase.toUpperCase());
const mayusculas8 = frases7.map(frase => frase.toUpperCase());
const mayusculas9 = frases8.map(frase => frase.toUpperCase());

function animarTexto(elemento, texto) {
    elemento.textContent = texto;
    elemento.style.animation = "none";
    elemento.offsetHeight; // truco para reiniciar
    elemento.style.animation = "fadeIn 0.5s ease-in-out";
}

function reiniciar(){
    audio.pause();
    location.reload();
}

function iniciar(){
    const gif = document.getElementById("gif1");
    const gif2 = document.getElementById("gif2");
    const audio = document.getElementById("audio");
    let letra = 0;
    
    audio.addEventListener("ended", () => {
        document.getElementById("reinicio").style.display = "block";
    });

    document.getElementById("inicio").style.display = "none";
    audio.play();

    animarTexto(document.getElementById("primero"), mayusculas[0]);
    setTimeout(() => {
        document.getElementById("primero").textContent = "";
    }, 10000);

    // ── PARTE 1 ──────────────────────────────
    // Gif 1 aparece a los 6s y dura 7s (hasta el segundo 13)
    setTimeout(() => {
        gif.style.display = "block";
        setTimeout(() => {
            gif.style.display = "none";
        }, 11000);
    }, 12000);

    // Frases 1 arrancan a los 6s, cambian cada 3s
    // (ajusta el intervalo al ritmo de la canción)
    setTimeout(() => {
        animarTexto(document.getElementById("all"), mayusculas2[letra]);
        letra++;

        const intervalo1 = setInterval(() => {
            if (letra >= mayusculas2.length) {
                clearInterval(intervalo1); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas2[letra]);
            letra++;
        }, 2599); // cada 3s cambia frase, ajusta a la canción

    }, 24000);

    setTimeout(() => {
        let letra2 = 0;
        animarTexto(document.getElementById("all"), mayusculas3[letra2]);
        letra2++;

        const intervalo2 = setInterval(() => {
            if (letra2 >= mayusculas3.length) {
                clearInterval(intervalo2); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas3[letra2]);
            letra2++;
        }, 2800); // cada 3s cambia frase, ajusta a la canción

    }, 52000);

    setTimeout(() => {
        let letra3 = 0;
        animarTexto(document.getElementById("all"), mayusculas4[letra3]);
        letra3++;

        const intervalo3 = setInterval(() => {
            if (letra3 >= mayusculas4.length) {
                clearInterval(intervalo3); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas4[letra3]);
            letra3++;
        }, 2800); // cada 3s cambia frase, ajusta a la canción

    }, 72000);

    setTimeout(() => {
        let letra4 = 0;
        animarTexto(document.getElementById("all"), mayusculas5[letra4]);
        letra4++;

        const intervalo4 = setInterval(() => {
            if (letra4 >= mayusculas5.length) {
                clearInterval(intervalo4); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas5[letra4]);
            letra4++;
        }, 2900); // cada 3s cambia frase, ajusta a la canción

    }, 84000);

    setTimeout(() => {
        let letra2 = 0;
        animarTexto(document.getElementById("all"), mayusculas3[letra2]);
        letra2++;

        const intervalo2 = setInterval(() => {
            if (letra2 >= mayusculas3.length) {
                clearInterval(intervalo2); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas3[letra2]);
            letra2++;
        }, 2800); // cada 3s cambia frase, ajusta a la canción

    }, 100000);

    setTimeout(() => {
        let letra5 = 0;
        animarTexto(document.getElementById("all"), mayusculas6[letra5]);
        letra5++;

        const intervalo5 = setInterval(() => {
            if (letra5 >= mayusculas6.length) {
                clearInterval(intervalo5); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas6[letra5]);
            letra5++;
        }, 1100); // cada 3s cambia frase, ajusta a la canción

    }, 123000);

    setTimeout(() => {
        let letra6 = 0;
        animarTexto(document.getElementById("all"), mayusculas7[letra6]);
        letra6++;

        const intervalo6 = setInterval(() => {
            if (letra6 >= mayusculas7.length) {
                clearInterval(intervalo6); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas7[letra6]);
            letra6++;
        }, 1100); // cada 3s cambia frase, ajusta a la canción

    }, 129000);

    setTimeout(() => {
        gif2.style.display = "block";
        document.getElementById("all").textContent = ""; // limpia las frases

        // Desaparece en el minuto 2:32 (dura 26 segundos)
        setTimeout(() => {
            gif2.style.display = "none";
        }, 12000);

    }, 132000);

    setTimeout(() => {
        let letra9 = 0;
        animarTexto(document.getElementById("all"), mayusculas2[letra9]);
        letra9++;

        const intervalo10 = setInterval(() => {
            if (letra9 >= mayusculas2.length) {
                clearInterval(intervalo10); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas2[letra9]);
            letra9++;
        }, 2600); // cada 3s cambia frase, ajusta a la canción

    }, 144000);

    setTimeout(() => {
        let letra7 = 0;
        animarTexto(document.getElementById("all"), mayusculas8[letra7]);
        letra7++;

        const intervalo7 = setInterval(() => {
            if (letra7 >= mayusculas8.length) {
                clearInterval(intervalo7);

                // Limpia las frases anteriores
                document.getElementById("all").textContent = "";

                // Muestra la frase final
                setTimeout(() => {
                    animarTexto(document.getElementById("ultimaparte"), mayusculas9[0]);

                    // La frase desaparece después de 5 segundos
                    setTimeout(() => {
                        document.getElementById("ultimaparte").textContent = "";
                    }, 7500);

                }, 500);

                return;
            }
            animarTexto(document.getElementById("all"), mayusculas8[letra7]);
            letra7++;
        }, 4700);

    }, 172000);

}