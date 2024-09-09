console.log('Hello from gyak1.js!');

console.log('5', "6", 65, true, false,
    [0, 1, 2, 3],
    { name: 'Péter' }
)

let number = 5;
const number2 = 10;

const simpleObject = {
    name: 'Péter',
    age: 25,
    grade: 4,
    passing: function() {
        return this.grade >= 2;
    }
}
console.log(simpleObject,
    simpleObject.passing()
)

function test() {
    const variable = 'test';
}
let undefinedVariable;
console.log(test());

console.log(5 + 6, 5 * 2, 5 ** 2, 6 /2 , 6 % 3,
    true || false, true && false);

console.log('5' + 7)

console.log(!![]);
console.log(['Péter'] == ['Péter']);
console.log(['Péter'])
console.log(5 == '5')
console.log(5 === '5')
console.log(typeof 5)
console.log(typeof '5')
console.log(!!0);
console.log(!!1);
console.log(typeof +'16');
console.log(+'asdasd')

const numberArray = [
    1, 16, -5, -20, 3, -33
]

function filterPositive(array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            results.push(array[i]);
        }
    }
    return results;
}
console.log(filterPositive(numberArray));

function filterNegative(array) {
    const results = [];
    for (const number of array) {
        if (number < 0) {
            results.push(number);
        }
    }
    return results;
}
console.log(filterNegative(numberArray));

function generalFilter(array, filterFn) {
    const results = [];
    for (const number of array) {
        if (filterFn(number)) {
            results.push(number);
        }
    }
    return results;
}
console.log(generalFilter(
    numberArray,
    (num) => num % 2 === 0
))

console.log(
    numberArray.filter(n => n < -15),
    numberArray.filter(n => {
       return n > 15;
    })
)

console.log(
    numberArray
        .map(n => n ** 2)
        .filter(n => n >= 256)
        .length
)

console.log(
    numberArray
        .some(n => n < -200),
    numberArray
        .every(n => n < 200)
)

numberArray.sort((n1, n2) => n1 - n2)
console.log(numberArray);

console.log(
    numberArray.reduce((partialResult, currentNumber) => {
        return partialResult + currentNumber
    }, 0)
)







