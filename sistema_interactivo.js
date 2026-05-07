let nombre = prompt("Escriba su nombre: ")
let edad = prompt("Escriba su edad: ")

while (edad) {

    if (isNaN(edad)) {
        alert("Error:Por favor, ingrese una edad valida en numeros.")
    }

    else if (edad < 18) {
        alert("Hola "+nombre+", eres menor de edad.¡Sigue aprendiendo y disfrutando del código!")
    }

    else if (edad >= 18) {
        alert("Hola "+nombre+", eres mayor de edad.¡Preparate para granes oportunidades en el mundo de la programación!")
    }
}