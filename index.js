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

const ages = (people) => {
    let sum = 0;
    people.forEach(e => {
        if(e.age > 0) {
        sum += e.age
        }
    })
    return sum
}