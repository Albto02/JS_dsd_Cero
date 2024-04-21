// Tipo de dato primitivo - Inmutable
let numero = 30
numero = numero + 15
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato Complejo - Mutable
let usuario = {nombre: 'Pepito', edad: 15 }
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = "sandia"
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = {nombre: 'Alberto' }
cambiarNombre(persona)

console.log(persona)