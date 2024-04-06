// Programacion funcional

function add(a, b) {
    return a + b;
}

const operation = add;

function makeOperation(operation, num1, num2) {
    return operation(num1,  num2);
}

console.log(makeOperation(operation, 2, 3))

// Programacion funciona: funciones puras, las funcones no tienen efectos secundarios y siempre devuelven el mismos resultado

const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

const doubles = numbers.map(function(number) {
    return numbers * 2;
});

console.log(doubles);

const doublesTwo = numbers.map(function(number) {
    return number * 2;
});

console.log(doublesTwo);


const result = arr.map(num => num * 2).filter(num => num > 5); 

console.log(result); 