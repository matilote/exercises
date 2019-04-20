/* Task:
Write a function ages that takes a list of people (objects) and returns the sum of all valid ages (positive numbers). Note: The parameter `people` must not be altered and the function must use at least one ES6 operation on either Arrays or Objects.

function ages(people) {
// TODO
}

// Example:
const people = [
    {name: 'Alice', age: 18},
    {name: 'Bob', age: 99},
    {name: 'Eve', age: -1}
];

ages(people) === 117 */

const people = [
    {name: 'Alice', age: 18},
    {name: 'Bob', age: 99},
    {name: 'Eve', age: -1}
];

const people2 = {
    192934: { name: 'Alice', age: 18 },
    281828: { name: 'Bob', age: 99 },
    292191: { name: 'Eve', age: -1 }
}

const ages = (people) => {
    let sum = 0;
    people.forEach(e => {
        if(e.age > 0) {
        sum += e.age
        }
    })
    return sum
}

const ages2 = (people) => {
    let arr = []
    arr = people.filter(e => {
        return e.age > 0
    })
    return arr.reduce((a, b) => {
        return a.age + b.age
    })
}

const ages3 = people => {
    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        people[i].age > 0 ? sum += people[i].age : 0
    }
    return sum
}

const agesExtended = people => {
    let sum = 0;
    for (let i in people) {
        if(people[i].age > 0) {
            sum += people[i].age
        }
    }
    return sum
}

console.log(agesExtended(people2))