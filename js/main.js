const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const boton = document.getElementById("btnEnviar");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);

function validarFormulario() {
  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio";
    nombre.classList.add("error");
    nombre.classList.remove("valido");
  } else {
    errorNombre.textContent = "";
    nombre.classList.remove("error");
    nombre.classList.add("valido");
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    errorEmail.textContent = "Correo no válido";
    email.classList.add("error");
    email.classList.remove("valido");
  } else {
    errorEmail.textContent = "";
    email.classList.remove("error");
    email.classList.add("valido");
  }

  boton.disabled = !(nombre.value.trim() !== "" && regexEmail.test(email.value));
}

const form = document.getElementById("formulario");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulario enviado correctamente");
  form.reset();
  boton.disabled = true;
});