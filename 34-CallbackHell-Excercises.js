// import { doTask1, doTask2, doTask3 } from './34-CallbackHell-Tasks.js';


// const strings = [];

// return new Promise((resolve) => {
//     doTask1((rta1) => {
//     strings.push(rta1);
//     doTask2((rta2) => {
//         strings.push(rta2);
//         doTask3((rta3) => {
//         strings.push(rta3);
//         resolve(strings);
//         })
//     })
//     })
// })


// Promise.resolve()
//   .then(() => {
//     // Makes .then() return a rejected promise
//     throw new Error("Oh no!");
//   })
//   .then(
//     () => {
//       console.log("Not called.");
//     },
//     (error) => {
//       console.error(`onRejected function called: ${error.message}`);
//     },
//   );

//   import { doTask1, doTask2, doTask3 } from './tasks';

// export function runCode() {

//   const strings = [];
//   return new Promise((resolve) => {

//     // Wrapping doTask1 in a promise
//     strings.push(new Promise((resolveTask1) => {
//       doTask1((rta1) => {
//         resolveTask1(rta1);
//       });
//     }));

//     // Wrapping doTask2 in a promise
//     strings.push(new Promise((resolveTask2) => {
//       doTask2((rta2) => {
//         resolveTask2(rta2);
//       });
//     }));

//     // Wrapping doTask3 in a promise
//     strings.push(new Promise((resolveTask3) => {
//       doTask3((rta3) => {
//         resolveTask3(rta3);
//       });
//     }));

//     Promise.all(promises)
//       .then(() => {
//         console.log(strings);
//         resolve(strings);
//       });
//   });
// }

// Respuesta correcta:

import { doTask1, doTask2, doTask3 } from './tasks'

export function runCode() {
  const strings = [];
  return doTask1()

  .then((rta1) => {
    strings.push(rta1);
    return doTask2()
  })

  .then((rta2) => {
    strings.push(rta2);
    return doTask3();
  })

  .then((rta3) => {
    strings.push(rta3);
    return strings;
  })
}