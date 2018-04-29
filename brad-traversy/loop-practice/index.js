// For Loop

for (let i = 0; i < 10; i++) {
  // console.log(i);
  if (i === 2) {
    console.log("2 is my num");
    continue;
  }

  if (i === 5) {
      console.log('Stop the loop');
      break;
  }

  console.log("Number " + i);
}

// While Loop 

let i = 0;

while(i < 10) {
    console.log('Number ' + i);
    i++;
}

// Do While

// let i = 100;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);

//Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

//Map
// const users = [ 
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'}
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);

//For In loop
const user = {
    firstName: 'John',
    lastName: "Doe",
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}