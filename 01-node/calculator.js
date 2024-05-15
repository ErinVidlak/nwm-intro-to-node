const [ , , method, param1, param2] = process.argv;
const methodList = {
    add: (x, y) => { return Number(x) + Number(y) },
    subtract: (x, y) => { return Number(x) - Number(y) },
    multiply: (x, y) => { return Number(x) + Number(y) },
    divide: (x, y) => { return Number(x) / Number(y) }
}

console.log(methodList[method](param1, param2));