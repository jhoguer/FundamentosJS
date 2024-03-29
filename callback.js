const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

//const onPeopleResponse = (personaje) => console.log(`Hola, soy ${personaje.name}`)

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`${id}- Hola, yo soy ${persona.name}`)

        if(callback) {
            callback()
        }
    })
    
}

obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function() {
                    obtenerPersonaje(6, function() {
                        obtenerPersonaje(7, function() {
                            obtenerPersonaje(8, function() {
                                obtenerPersonaje(9, function() {
                                    obtenerPersonaje(10)
                                })
                            })
                        })
                    })
                })
            })
        })
    })

})


