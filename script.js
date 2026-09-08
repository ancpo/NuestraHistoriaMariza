// ========================================
// NUESTRA HISTORIA
// ========================================

// CONTRASEÑA
const PASSWORD = "161023";

// FECHA DE INICIO
// 16 de octubre de 2023
const startDate = new Date(2023, 9, 16, 0, 0, 0);


// ========================================
// CUANDO CARGUE LA PÁGINA
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");
    const surpriseButton = document.getElementById("surpriseButton");


    // ========================================
    // BOTÓN ENTRAR
    // ========================================

    if (loginButton) {

        loginButton.addEventListener("click", function () {

            checkPassword();

        });

    }


    // ========================================
    // ENTER EN LA CONTRASEÑA
    // ========================================

    if (passwordInput) {

        passwordInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                checkPassword();

            }

        });

    }


    // ========================================
    // BOTÓN SORPRESA
    // ========================================

    if (surpriseButton) {

        surpriseButton.addEventListener("click", function () {

            showSurprise();

        });

    }


    // ========================================
    // CORAZONES
    // ========================================

    setInterval(function () {

        createHeart();

    }, 700);

});


// ========================================
// COMPROBAR CONTRASEÑA
// ========================================

function checkPassword() {

    const passwordInput =
        document.getElementById("password");

    const error =
        document.getElementById("errorMessage");

    const loginScreen =
        document.getElementById("loginScreen");

    const mainContent =
        document.getElementById("mainContent");


    // Verificar que existan los elementos

    if (!passwordInput || !loginScreen || !mainContent) {

        console.error(
            "No se encontraron los elementos del login."
        );

        return;

    }


    // Obtener contraseña escrita

    const password =
        passwordInput.value.trim();


    console.log(
        "Contraseña ingresada:",
        JSON.stringify(password)
    );

    console.log(
        "Contraseña esperada:",
        JSON.stringify(PASSWORD)
    );


    // ========================================
    // CONTRASEÑA CORRECTA
    // ========================================

    if (password === PASSWORD) {

        // Ocultar pantalla de contraseña
        loginScreen.style.display = "none";

        // Mostrar página
        mainContent.classList.remove("hidden");

        // Iniciar contador
        updateCounter();


        // Evitar crear varios contadores
        if (!window.counterInterval) {

            window.counterInterval =
                setInterval(updateCounter, 1000);

        }


    }

    // ========================================
    // CONTRASEÑA INCORRECTA
    // ========================================

    else {

        if (error) {

            error.textContent =
                "Mmm... esa no es nuestra contraseña 🥺❤️";

        }

        passwordInput.value = "";

        passwordInput.focus();

    }

}


// ========================================
// CONTADOR DE TIEMPO
// ========================================

function updateCounter() {

    const now = new Date();


    let years =
        now.getFullYear() -
        startDate.getFullYear();


    let months =
        now.getMonth() -
        startDate.getMonth();


    let days =
        now.getDate() -
        startDate.getDate();


    let hours =
        now.getHours() -
        startDate.getHours();


    let minutes =
        now.getMinutes() -
        startDate.getMinutes();


    let seconds =
        now.getSeconds() -
        startDate.getSeconds();


    // ========================================
    // SEGUNDOS
    // ========================================

    if (seconds < 0) {

        seconds += 60;

        minutes--;

    }


    // ========================================
    // MINUTOS
    // ========================================

    if (minutes < 0) {

        minutes += 60;

        hours--;

    }


    // ========================================
    // HORAS
    // ========================================

    if (hours < 0) {

        hours += 24;

        days--;

    }


    // ========================================
    // DÍAS
    // ========================================

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days += previousMonth.getDate();

    }


    // ========================================
    // MESES
    // ========================================

    if (months < 0) {

        months += 12;

        years--;

    }


    // ========================================
    // MOSTRAR CONTADOR
    // ========================================

    setText("years", years);

    setText("months", months);

    setText("days", days);

    setText("hours", hours);

    setText("minutes", minutes);

    setText("seconds", seconds);

}


// ========================================
// CAMBIAR TEXTO
// ========================================

function setText(id, value) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent = value;

    }

}


// ========================================
// SORPRESA
// ========================================

function showSurprise() {

    const surprise =
        document.getElementById("surpriseMessage");


    if (!surprise) {

        return;

    }


    surprise.classList.remove("hidden");


    surprise.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ========================================
// CORAZONES FLOTANTES
// ========================================

function createHeart() {

    const container =
        document.querySelector(".hearts");


    if (!container) {

        return;

    }


    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    const symbols = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓"

    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    // Posición horizontal

    heart.style.left =
        Math.random() * 100 + "%";


    // Tamaño

    heart.style.fontSize =
        12 + Math.random() * 25 + "px";


    // Duración

    heart.style.animationDuration =
        6 + Math.random() * 8 + "s";


    // Agregar corazón

    container.appendChild(heart);


    // Eliminar después

    setTimeout(function () {

        heart.remove();

    }, 15000);

}