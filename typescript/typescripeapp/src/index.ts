//syntax
// function functionname(var1:vartype,var2:vartype):returntype{
//     return var1+var2;
// }
console.log("hellw world");
var msg="happy learning";
console.log(msg);
//1.static typing
function add(a:number,b:number):number{
    return a+b;
}
const result=add(5,10);
console.log(result);

//2.classes and interface

interface User{
    name:string;
    age:number;
    email:string;
}

const user:User={
    name:"rajat lad",
    age:30,
    email:"rajatlad2002@gmail.com"

};
console.log(user);

//3.classes and inheritance
class Animal{
    constructor(public name:string){}
        makeSound():void{
            console.log(`${this.name}makes a sound`);
        
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

const animal=new Animal("cat");
animal.makeSound();
const dog= new Dog("buddy");
dog.makeSound();

const rajat=new Animal("rajat");
rajat.makeSound()

//generics
function identity<T>(arg:T):T{
    return arg;
}

const num=identity<number>(42);
const str=identity<string>("rajat");

console.log(num);
console.log(str);

//Enums
enum Direction{
    up,
    Down,
    Left,
    Right
}
const move=Direction.up;
console.log(move);
console.log(Direction[Direction.up]);
console.log(Direction[0]);

enum Direction1{
    up=1,
    down,
    left=50,
    right
}

console.log(Direction1.up);
console.log(Direction1.down);
console.log(Direction1.left);
console.log(Direction1.right);


//type inference

let x=10;
x=20;
//x="hello";// error :string is not assigned into number

let y="hello"
//create var with different types in ts

let z:number;
z=20;
//z="heloo" // error :string is not assigned into number

console.log(z)


//list the types of variable
let a:number=10;
let b:string="hello";
let c:boolean=true;
let d:any=10;
let e:any="hello";
let f:any=true;
let g:number[]=[1,2,3];//numer array
let h:string[]=["rajat","hello"]//string hello
let i:boolean[]=[true,false]//boolean array
let j:any[]=[1,"hello",true]//any array
let k:[string,number]=["hello",10];//tuple
let l:object={name:"john",age:30,
    emailids:{
        email:"re@g.com",
    },
    preferences:["sports","music"]
};


console.log(`a:${typeof a}`);
console.log(`b:${typeof b}`);
console.log(`c:${typeof c}`);
console.log(`d:${typeof d}`);
console.log(`e:${typeof e}`);
console.log(`f:${typeof f}`);
console.log(`g:${typeof g}`);
console.log(`h:${typeof h}`);
console.log(`i:${typeof i}`);
console.log(`j:${typeof j}`);
console.log(`k:${typeof k}`);
console.log(`l:${typeof l}`);


//print values of all the variable
console.log(`a:${a}`);
console.log(`b:${b}`);
console.log(`c:${c}`);
console.log(`d:${d}`);
console.log(`e:${e}`);
console.log(`f:${f}`);



interface User{
    name:string;
    age:number;
    email:string;

}

const user1:User={
    name:"rajat",
    age:22,
    email:"rajatlad2002@gmail.com"
};

console.log(user1);


//creating a base class
class bird{
    constructor(public name:string){}//syntax for constructor
   makesound1():void {
    console.log(`${this.name} is a bird`);
    }
}


//child class(inheritance)
class land extends bird{
    constructor(name:string){
        super(name);
        console.log("dog constructor called");
    }
    makesound1(): void {
        console.log(`${this.name} barks`);
    }

}




//creating objects
const bir=new bird("eagle");
bir.makesound1();//calling the class

const lan=new land("ostrich");
lan.makesound1();


function identity1<T>(arg:T):T{
    return arg;
}
const num1=identity1<number>(42);
const str1=identity1<string>("hello");
console.log(num1);
console.log(str1);


//7.union types

function printID(id:string|number){
    console.log(typeof id);
}
printID("0010");
printID(200);

interface Circle{
    kind:"circle";
    radius:number;

}
interface Square{
    kind:"square";
    sidelength:number;
}

function getArea(shape:Circle|Square):number{
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius **2;
        case "square":
            return shape.sidelength**2;
    }
}











