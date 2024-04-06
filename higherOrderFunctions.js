// Una de las características principales de las Higher-Order Functions es su capacidad para manipular otras funciones de manera genérica.
// función “map” es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original.

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);
console.log(numbers);

// Otra característica importante de las Higher-Order Functions es su capacidad para crear funciones más pequeñas y reutilizables. Por ejemplo, una función “filter” es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los elementos que cumplen con una determinada condición.

const numeros = [1, 2, 3, 4, 5];

const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
})

console.log(numerosPares);
