"use strict";
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// tuple
let person = [1, 'Brad', true];
console.log('Person: ', person);
let employee;
employee = [
    [1, 'bRAD'],
    [2, 'Lorem'],
    [3, 'Ipsum'],
    [4, 'Dolor'],
    [5, 'amit'],
];
// by default the number of element start with zero
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Rigth"] = 3] = "Rigth";
})(Direction1 || (Direction1 = {}));
console.log('Direction1: ', Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log('Direction2: ', Direction2.Up);
const user = {
    id: 1,
    name: 'John'
};
console.log('user: ', user);
// Type Assertion
let cid = 1;
let customerId = cid;
customerId = 10;
customerId = 100;
console.log('Customer Id: ', customerId);
// functions
// return type is number
function addNum(x, y) {
    return x + y;
}
console.log('Add num: ', addNum(10, 20));
// return type is void
function log(message) {
    console.log('Message: ', message);
}
const userInterface = {
    id: 1,
    name: 'John',
};
console.log('userInterface: ', userInterface);
const add = (x, y) => x + y;
const nega = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
console.log('Addition: ', add(100, 200));
console.log("Negative: " + nega(200, 100));
console.log("Multiple: " + mul(10, 20));
console.log("Division: " + div(200, 10));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}
const aljun = new Person(1, 'Aljun');
const ellen = new Person(2, 'Ellen');
console.log('Aljun name: ', aljun.getName());
console.log('Ellen id: ', ellen.getId());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
class Contribution extends Employee {
    constructor(id, name, position, sss) {
        super(id, name, position);
        this.sss = sss;
    }
}
const emp = new Contribution(100, 'Ellen GRACE', 'Housewife', 999);
console.log("Employee: " + emp.getName(), emp.getPosition());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(['Brad', 'John']);
numArray.push('Hello');
console.log('numArray: ' + numArray);
console.log('strArray: ' + strArray);
