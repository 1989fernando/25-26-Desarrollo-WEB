const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length >= 3) {
        marcarValido(nombre, "errorNombre", "");
        return true;
    }
    marcarInvalido(nombre, "errorNombre", "Debe tener al menos 3 caracteres");
    return false;
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)) {
        marcarValido(email, "errorEmail", "");
        return true;
    }
    marcarInvalido(email, "errorEmail", "Correo no válido");
    return false;
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (regex.test(password.value)) {
        marcarValido(password, "errorPassword", "");
        return true;
    }
    marcarInvalido(password, "errorPassword", "Mínimo 8 caracteres, un número y un símbolo");
    return false;
}

function validarConfirmacion() {
    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        marcarValido(confirmPassword, "errorConfirm", "");
        return true;
    }
    marcarInvalido(confirmPassword, "errorConfirm", "Las contraseñas no coinciden");
    return false;
}

function validarEdad() {
    if (edad.value >= 18) {
        marcarValido(edad, "errorEdad", "");
        return true;
    }
    marcarInvalido(edad, "errorEdad", "Debe ser mayor de 18 años");
    return false;
}

function marcarValido(input, errorId, mensaje) {
    input.classList.add("valido");
    input.classList.remove("invalido");
    document.getElementById(errorId).textContent = mensaje;
}

function marcarInvalido(input, errorId, mensaje) {
    input.classList.add("invalido");
    input.classList.remove("valido");
    document.getElementById(errorId).textContent = mensaje;
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario validado correctamente ✅");
});
