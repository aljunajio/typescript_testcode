let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = "Hello"


let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1,true,'Hello']

// tuple
let person: [number,string,boolean]  = [1,'Brad',true]
console.log('Person: ',person)

// tuple array

type numString = [number,string]

let employee: numString[]
employee = [
    [1, 'bRAD'],
    [2, 'Lorem'],
    [3, 'Ipsum'],
    [4, 'Dolor'],
    [5, 'amit'],
]

// by default the number of element start with zero
enum Direction1 {
    Up,
    Down,
    Left,
    Rigth
}

console.log('Direction1: ',Direction1.Left)

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}
console.log('Direction2: ',Direction2.Up)

// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

console.log('user: ',user)


// Type Assertion
let cid: any = 1
let customerId = cid as number

customerId = 10
customerId = 100;
console.log('Customer Id: ',customerId)


// functions
// return type is number
function addNum(x: number, y: number):number{
    return x + y;
}

console.log('Add num: ',addNum(10,20))

// return type is void
function log(message: string | number): void {
    console.log('Message: ',message)
}

// interfaces
interface UserInterface {
    id: number
    name: string
}

const userInterface: User = {
    id: 1,
    name: 'John',
}

console.log('userInterface: ',userInterface)

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x+y;
const nega: MathFunc = (x: number, y: number): number => x-y;
const mul: MathFunc = (x: number, y: number): number => x *y;
const div: MathFunc = (x: number,y: number): number => x/y;

console.log('Addition: ',add(100,200));
console.log("Negative: "+nega(200,100));
console.log("Multiple: "+mul(10,20));
console.log("Division: "+div(200,10));


interface PersonInterface {
    id: number,
    name: string
    getName(): string
    getId(): number
}


class Person implements PersonInterface{
    id: number;
    name: string;
    constructor(id: number,name: string) {
        this.id = id;
        this.name = name;
    }   

    getName(){
        return this.name;        
    }
    getId(){
        return this.id;
    }
}

const aljun = new Person(1,'Aljun');
const ellen = new Person(2, 'Ellen');

console.log('Aljun name: ',aljun.getName());
console.log('Ellen id: ',ellen.getId());

class Employee extends Person{
    position: string
    constructor(id: number, name: string,position: string){
        super(id,name)
        this.position = position;
    }
    getPosition(){
        return this.position
    }
}

class Contribution extends Employee{
    sss: number
    constructor(id: number,name: string,position: string,sss: number){
        super(id,name,position)
        this.sss = sss;
    }
}

const emp = new Contribution(100,'Ellen GRACE','Housewife',999);
console.log("Employee: "+emp.getName(),emp.getPosition())

// generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5,6])
let strArray = getArray<string>(['Brad','John']);


console.log('numArray: '+numArray);
console.log('strArray: '+strArray);

