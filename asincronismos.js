const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 2000);
})

console.log(promise);

// Podemos encadenar promesas para ejecutar múltiples operaciones asincrónicas de manera secuencial. Para ello, se utiliza el método then de una promesa, el cual recibe como parámetro una función que se ejecutará cuando la promesa se resuelva correctamente. Esta función puede devolver otra promesa, lo que permite encadenar múltiples operaciones.

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ number: 42, text: 'hello'})
    }, 2000)
});

promesa
    .then((result) => {
        const doubledNUmber = result.number * 2;
        return doubledNUmber.toString();
    })
    .then((result) => {
        console.log(`The result is ${result}`);
    })
    .catch((error) => {
        console.error(error);
    })

// setTimeout es una función que permite programar una tarea para que se ejecute después de un cierto período de tiempo en milisegundos. La función toma dos parámetros: la función que se debe ejecutar después del tiempo especificado y el tiempo en milisegundos antes de que se ejecute la función.

setTimeout(() => {
    console.log('Han pasado 5 segundos')
}, 5000)

// setTimeout es una función que permite programar una tarea para que se ejecute después de un cierto período de tiempo en milisegundos. La función toma dos parámetros: la función que se debe ejecutar después del tiempo especificado y el tiempo en milisegundos antes de que se ejecute la función.

let id = setTimeout (() => {
    console.log('Han pasado 5 segundos');
}, 5000)

clearTimeout(id);

// Otro temporizador común es setInterval. En contraste con setTimeout, setInterval se utiliza para programar una tarea para que se repita en un intervalo de tiempo determinado. La función toma dos parámetros: la función que se debe ejecutar en cada intervalo y la duración de cada intervalo en milisegundos.

let interval = setInterval(() => {
    console.log('Han pasado 2 segundos');
}, 2000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);

// Al crear una promesa con setTimeout(), podemos utilizar el constructor new Promise(). La función interna debe contener el código que se ejecutará en el futuro y, finalmente, llamará a resolve() o reject() para indicar si la tarea se completó correctamente o no.

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seconds = ms / 1000
            resolve(seconds);
        }, ms)
    })
}

wait(2000).then((seconds) => {
    console.log(`Han pasado ${seconds} segundos`)
})

//También podemos usar setTimeout() en conjunto con reject() para manejar errores en una tarea asincrónica. Si ocurre un error durante la ejecución de la tarea, podemos llamar a reject() con un objeto de error para indicar que la tarea ha fallado.

function espera(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error('El numero de milisegundos no puede ser negativo'))
        } else {
            setTimeout(() => {
                const seconds = ms / 10000
                resolve(seconds);
            }, ms)
        }
    });
}

// ejemplo de uso

espera(-2000)
    .then((seconds) => {
        console.log(`Han pasado ${seconds} segundos`);
    })
    .catch((error) => {
        console.error(error.message);
    })


// Cronometro

let segundosPasados = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

let cronometro = setInterval(() => {
    segundosPasados ++
    
    segundos =  segundosPasados - Math.trunc(segundosPasados/60) * 60;
    minutos = Math.trunc(segundosPasados/60);

    console.log( `El tiempo transcurrido es ${minutos} minutos y ${segundos} segundos` )

}, 1000)

setTimeout(() => {
    clearInterval(cronometro)
    console.log('Cronometro terminado')
}, 62000)