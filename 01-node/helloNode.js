console.log('hello node!');

const first = "Erin"
const last = "Vidlak"

console.log(`Hello ${first} ${last}!`)

const pet = {
    name: 'Moby',
    species: 'Cat',
    age: 7
}

const { species, name } = pet

const numbers = [1, 3, 5, 7, 9, 11]

const { port } = require('./utils');
const utils = require('./utils');
console.log(port);
console.log(utils.port);