// const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]

const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(suma); // 15


// Ejercicio platzi

export function findFamousCats(cats) {
    // Tu código aquí 👈
    let catWinners = undefined;
    let catCount = undefined;
  
    function arrayLenght(arr) {
      let count = 0;
      for (const element of arr) {
        count++;
      }
  
      catCount = count;
      return catCount;
    }
  
    arrayLenght(cats)
  
    for (var i = 0; i < catCount; i++) {
  
      const suma = cats[i].followers.reduce(function (acumulador, followers) {
        return acumulador + followers;
      })
  
      cats.sort();
      cats.revers();
      
      catWinners[i].followers
    }
  
    return catWinners
  }


const cats = [
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
]

console.log(`Regular order: ${cats}`);

cats.sort();
cats.reverse();

console.log('Modified order: ' + cats);

console.log(`${cats[0].name} ${cats[0].followers}`);
console.log(cats[1].name + ' ' + cats[1].followers);

console.log(`Reverse and sort: ${cats[0].name} ${cats[0].followers.sort().reverse()}`);
console.log('Just sort: ' + cats[1].name + ' ' + cats[1].followers.sort());

console.log(`${cats[0].name} ${cats[0].followers}`);
console.log(cats[1].name + ' ' + cats[1].followers);

const add = cats.reduce(function(acumulador, cat) {
  return acumulador + cat;
})

const addTwo = cats[0].followers.reduce(function(acumulador, cat) {
  return acumulador + cat;
})

const addThree = cats[1].followers.reduce(function(acumulador, cat) {
  return acumulador + cat;
})


console.log(add);
console.log(addTwo);
console.log(addThree);

let maxCatArray = [];
let maxFollowers = -Infinity;

const cats = [
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
]

cats.forEach(cat => {
  const sumFollowers = cat.followers.reduce((acumulador, follower) => acumulador + follower);

  if(sumFollowers > maxFollowers) {
    maxFollowers = sumFollowers;
  }
});

cats.forEach(cat => {
  const sumFollowers = cat.followers.reduce((acumulador, follower) => acumulador + follower);

  if(sumFollowers === maxFollowers) {
    maxCatArray.push(cat.name)
  }
});

console.log(maxCatArray);

// export function getStudentAverage(students) {
//   // Tu código aquí 👈
// }

Output: {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}



// const student = [
//   {
//     name: "Pedro",
//     grades: [90, 87, 88, 90],
//   },
//   {
//     name: "Jose",
//     grades: [99, 71, 88, 96],
//   },
//   {
//     name: "Maria",
//     grades: [92, 81, 80, 96],
//   },
// ]


// let result =  { classAverage: undefined, students: undefined }
// let classAverage = undefined;
// let students = { name: undefined, average: undefined};
// let severalStudents = [];
// let partialAverage = [];

// console.log(Number((student[0].grades.reduce((a, b) =>  a + b) / student[0].grades.length).toFixed(2)));
// console.log(Number((student[1].grades.reduce((a, b) =>  a + b) / student[1].grades.length).toFixed(2)));
// console.log(Number((student[2].grades.reduce((a, b) =>  a + b) / student[2].grades.length).toFixed(2)));

// student.forEach(student => {

//   const average = Number((student.grades.reduce((a, b) =>  a + b) / student.grades.length).toFixed(2));

//   partialAverage.push(average);

// });

// classAverage = Number((partialAverage.reduce((a, b) => a + b ) / partialAverage.length).toFixed(2));

// console.log(partialAverage);

// result["classAverage"] = classAverage

// console.log(result);

// student.forEach(student => {

//   const average = Number((student.grades.reduce((a, b) =>  a + b) / student.grades.length).toFixed(2));

//   students["name"] = student.name
//   students["average"] = average

//   console.log(students)

//   severalStudents.push(students)

// });

// result.students = severalStudents;

// console.log(result)

// return result



const students = [
  {
    name: "Pedro",
    grades: [90, 87, 88, 90],
  },
  {
    name: "Jose",
    grades: [99, 71, 88, 96],
  },
  {
    name: "Maria",
    grades: [92, 81, 80, 96],
  },
]


let result =  { classAverage: undefined, students: undefined }
let classAverage = undefined;
let severalStudents = [];
let partialAverage = [];

students.forEach(student => {

  const average = Number((student.grades.reduce((a, b) =>  a + b) / student.grades.length).toFixed(2));

  partialAverage.push(average);

});

classAverage = Number((partialAverage.reduce((a, b) => a + b ) / partialAverage.length).toFixed(2));

result["classAverage"] = classAverage

students.forEach(student => {

  const average = Number((student.grades.reduce((a, b) =>  a + b) / student.grades.length).toFixed(2));

  const studentDataStructure = {
    name: student.name,
    average: average
  }

  severalStudents.push(studentDataStructure)

});

result.students = severalStudents;

console.log(result)

return result


