let nombre = prompt("Escriba su nombre: ")
let edad = prompt("Escriba su edad: ")
let validarEdad = true
while (edad) {

    if (isNaN(edad)) {
        alert("Error:Por favor, ingrese una edad valida en numeros.")
        validarEdad = false
    }

    else if (edad < 18) {
        alert("Hola "+nombre+", eres menor de edad.¡Sigue aprendiendo y disfrutando del código!")
        validarEdad = false
    }

    else if (edad >= 18) {
        alert("Hola "+nombre+", eres mayor de edad.¡Preparate para grandes oportunidades en el mundo de la programación!")
        validarEdad = false
    }
}



