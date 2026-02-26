/* =====================================================
   SCROLL SUAVE EN EL MENU
===================================================== */

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const seccion = document.querySelector(this.getAttribute("href"));

        if (seccion) {
            seccion.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, { threshold: 0.2 });


secciones.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease";

    observer.observe(section);

});


/* =====================================================
   FORMULARIO PROFESIONAL
===================================================== */

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = formulario.querySelector("input[type='text']");
        const email = formulario.querySelector("input[type='email']");
        const mensaje = formulario.querySelector("textarea");

        if (
            nombre.value.trim() === "" ||
            email.value.trim() === "" ||
            mensaje.value.trim() === ""
        ) {

            mostrarMensaje("⚠️ Completa todos los campos", "error");
            return;
        }

        if (!email.value.includes("@")) {

            mostrarMensaje("⚠️ Ingresa un email válido", "error");
            return;
        }

        mostrarMensaje("✅ Mensaje enviado correctamente", "exito");

        formulario.reset();

    });

}


/* =====================================================
   MENSAJE BONITO EN PANTALLA
===================================================== */

function mostrarMensaje(texto, tipo) {

    const mensaje = document.createElement("div");

    mensaje.textContent = texto;

    mensaje.style.position = "fixed";
    mensaje.style.bottom = "20px";
    mensaje.style.right = "20px";
    mensaje.style.padding = "15px 25px";
    mensaje.style.borderRadius = "12px";
    mensaje.style.color = "white";
    mensaje.style.fontWeight = "bold";
    mensaje.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    mensaje.style.zIndex = "9999";
    mensaje.style.transition = "0.5s";

    if (tipo === "error") {
        mensaje.style.background = "#e74c3c";
    } else {
        mensaje.style.background = "#2ecc71";
    }

    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.style.opacity = "0";
        setTimeout(() => mensaje.remove(), 500);
    }, 3000);

}


/* =====================================================
   BOTON VOLVER ARRIBA AUTOMATICO
===================================================== */

const botonArriba = document.createElement("button");

botonArriba.textContent = "⬆";
botonArriba.style.position = "fixed";
botonArriba.style.bottom = "90px";
botonArriba.style.right = "20px";
botonArriba.style.padding = "12px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#0071e3";
botonArriba.style.color = "white";
botonArriba.style.fontSize = "18px";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
botonArriba.style.zIndex = "9999";

document.body.appendChild(botonArriba);

botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

});