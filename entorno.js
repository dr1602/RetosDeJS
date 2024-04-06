// Sin variable de entorno:
let saludo = 'hola';

console.log(saludo);

// Con variable de entorno:
let nombre = process.env.NOMBRE || 'Mxyzptlk o Sin Nombre';
let web = process.env.MI_WEB || 'No tengo web';

console.log(`Hola ${nombre}`);
console.log(`Tu sitio web es: ${web}`)

// En consola:
// NOMBRE=Maximo node entorno.js
// Esta en mayuscula por herencia de servidores linux antiguos, y de como funcionaban antes, las variables de entorno se ponian en antiguas, con dos palbras se escribia:
// MI_WEB