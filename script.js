// Validación personalizada al enviar
const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

const nombre = document.getElementById("nombre").value.trim();
const apellido = document.getElementById("apellido").value.trim();
const email = document.getElementById("email").value.trim();
const fecha = document.getElementById("fecha").value;
const pais = document.getElementById("pais").value;

    let errores = [];

    if (nombre.length < 2) errores.push("El nombre debe tener al menos 2 caracteres.");
    if (apellido.length < 2) errores.push("El apellido debe tener al menos 2 caracteres.");

// Validación de email con regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errores.push("El correo electrónico no es válido.");

// Validación de fecha
if (!fecha) {
    errores.push("Debe ingresar una fecha de nacimiento.");
    } else {
        const fechaObj = new Date(fecha);
        const min = new Date("1900-01-01");
        const max = new Date("2026-08-30");
        if (fechaObj < min || fechaObj > max) {
        errores.push("La fecha debe estar entre 1900 y 2026.");
        }
    }

    if (!pais) errores.push("Debe seleccionar un país.");

    if (errores.length > 0) {
        alert("Errores:\n- " + errores.join("\n- "));
    } else {
        alert("Formulario enviado correctamente");
        formulario.reset();
    }
    });
//Boton normal
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let form = document.querySelector("form");
let h1 = document.querySelector("h1");
let labels = document.querySelectorAll("label");

//Boton claro
btn1.onclick = function () {
    labels.forEach(label => {
        label.style.color = "black";
    });
    h1.style.color = "black";
    form.style.background = "aliceblue";
    form.style.border = "1px solid black";
};

//boton oscuro
btn2.onclick = function () {
    labels.forEach(label => {
        label.style.color = "aliceblue";
    });
    h1.style.color = "yellow";
    form.style.background = "black";
    form.style.border = "none";
};
/*
// Botón estilo normal
let btn=document.querySelector("#btn");
btn.onclick = function () {
    btn.style.background = "yellow"
    btn.style.color = "black";
}

// Botón estilo alto contraste
let btn1=document.querySelector("#btn1");
let form=document.querySelector("form");
let h1=document.querySelector("h1");
let labels=document.querySelectorAll("label")
btn1.onclick = function () {
    labels.forEach(label => {
    label.style.color = "black";
    });

    h1.style.color="black"
    form.style.background= "aliceblue"
    form.style.border="1px solid black";
}*/