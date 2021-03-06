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
    const arr = []
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

const ages4 = people => {
    let sum = 0;
    for (let i in people) {
        if(people[i].age > 0) {
            sum += people[i].age
        }
    }
    return sum
}

const ages5 = people => {
    return Object.values(people).filter(e => { 
        return e.age > 0
    }).reduce((a, b) => {
        return a.age + b.age
    })
}

const ages6 = people => {
    const arr = Object.entries(people)
    let sum = 0
    arr.forEach(e => {
        e[1].age > 0 ? sum += e[1].age : undefined
    })
    return sum
}

const ages7 = people => {
    const obj = Object.assign({}, people)
    const arr = Object.values(obj)
    const sum = arr.map(e => {
        if(e.age > 0) {
            return e.age
        } else {
            return e.age = 0
        }
    }).reduce((a, b) => {
        return a + b
    })
    return sum
}

console.log(ages7(people2))