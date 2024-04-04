const fs = require('node:fs/promises')

fs.writeFile('./archivo2b.txt' , 'linea 1\nLinea 2\n creando con promesas. ')
    .then(() => {
        console.log('El archivo de texto fue creado empleando promesas')
    })
    .catch(error => {
        console.log(error)
    })

console.log('última línea del programa')