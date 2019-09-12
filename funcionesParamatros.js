class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
     /*   var nombre = this.nombre
        var apellido = this.apellido */
        var { nombre, apellido} = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn) {
          fn(nombre, apellido)  
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        /*   var nombre = this.nombre
        var apellido = this.apellido */
        var { nombre, apellido} = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn) {
            fn(nombre, apellido, true)  
          }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`Ah mirá, no sabia que eras desarrollador`)
    }
}

var jhon = new Persona('Jhon', 'Guerrero', 1.65)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.80)

jhon.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)