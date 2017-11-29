// Object Destructuring
//
// const person = {
//     name: 'Mark',
//     age: 52,
//     location: {
//         city: 'Houston',
//         temp: 61
//     }
// }

// const {name = 'Anonymous', age} = person
// console.log(`${name} is ${age}`)

// const {temp: temperature, city} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city = 'New York', state = 'New York' ] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75']
const [type, , medium] = item
console.log(`A medium ${type} costs ${medium}.`)