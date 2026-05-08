// Variables para la enntrada de datos del usuario 
let nombre = prompt("Por favor, escriba su nombre: ")
let edad = prompt("Por favor, escriba su edad: ") 

// Variable para el bucle while 
let edadValida = true 

// Un bucle while para cuando haya un error y se repita la pregunta hasta que este correcto 
while (edadValida) {

    // Si no es un numero, muestra un mensaje de error y vuelve a iniciar
    if (isNaN(edad)) {
        alert("Error:Por favor, ingrese una edad valida en numeros.")
        edadValida = true

    // Si el numero es valido, rompemos el bucle 
    } else {
        edadValida = true 
    }
}

// Si la edad es menor de 18, muestra que es menor de edad
if (edad < 18) {
    alert("Hola "+nombre+", eres menor de edad.¡Sigue aprendiendo y disfrutando del código!")

// Si la edad es mayor de 18, muestra que es mayor de edad 
} else {
    alert("Hola "+nombre+", eres mayor de edad.¡Preparate para grandes oportunidades en el mundo de la programación!")

}


let age = 15

if (age < 3) {
    alert("You are a baby")
}

else if (age >= 18) {
    alert("You are a adult")
}

else {
    alert("You are a minor")
}


