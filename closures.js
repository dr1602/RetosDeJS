// estado interno privado de la variable

function counter () {
    let count = 0;
    
    return function increment() {
        count++;
        return count;
    }
    
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// sirve para crear funciones genericas reutilizables

function multiplyBy(multiplier) {
    return function (value) {
        return value * multiplier;
    }
}

const double = multiplyBy(2);
console.log(double(5));
console.log(double(10));

const triple = multiplyBy(3);
console.log(triple(10));
console.log(triple(20));

//Al asignar la función “multiplicador” con un factor específico a la variable “doble”, se está utilizando el closure para parametrizar la función con un valor específico y crear una nueva función reutilizable que siempre multiplica el valor dado por 2, por 3 o cualquier otro número.

