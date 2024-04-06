console.log('Hola mundo');

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    // if (i === 5) {
    //     console.log('Forzamos error');
    //     var a = 3 + z;
    // }

}, 1200);

// para testear asincronismo:

console.log('Segunda instruccion');

// En python se ejecutaria en orden las funciones delcaradas.
// pero node, que sea asincrono, se ejecutan todas las instrucciones, y la mas larga es asincrona, en este caso.
// es decir, cuando se ejecuta el callback.

// para ejecutar en terminal:
// node monohilo.js

function printTriangle(size, character) {
    // Tu código aquí 👈
  
    let image = '';
    let whiteSpace = ' ';
  
    for (let i = 1; i < size; i++) {
        
        let row = whiteSpace.repeat(size - i) + character.repeat(i) + "\n";
        image += row;
        
    }

    let row = character.repeat(size);
    image += row;
  
    console.log(image);
  
    return image;
  
  }

  printTriangle(3, 'a')
  