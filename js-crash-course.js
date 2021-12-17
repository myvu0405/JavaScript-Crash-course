// string
const name="My Vu";
const age=36;

console.log(`My name is ${name} and I am ${age}`);

const s='hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(' '));

// array
const numbers=new Array(1,2,3,4,5,6,7,8,9);
console.log(numbers);

const fruits=['apple','banana','cherry','mango'];
//add to the end array
fruits[4]='kaki';
fruits.push('papaya');
//add to the top array
fruits.unshift('strawberry');
console.log(fruits);
//take the last value out of array
fruits.pop();
console.log(fruits);
//checking array type
console.log(Array.isArray(fruits));
//checking index
console.log(fruits.indexOf('banana'));
//-------Objects

const person ={
    firstName: 'My',
    lastName: 'Vu',
    age:36,
    hobbies: ['music', 'foods', 'tulips', 'windmills'],
    address: {
        street: '16 abc street',
        city: 'rotterdam'
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
//pulling values from object
const {lastName,firstName, address: {city}}=person;
console.log(firstName);
console.log(city);
//add property to object
person.email="abc@def.com";
console.log(person);

//object + array
const todos =[
    {
        id: 1,
        text: 'task1',
        isDone: true
    },
    {
        id: 2,
        text: 'task2',
        isDone: true
    },
    {
        id: 3,
        text: 'task3',
        isDone: false
    }
];
console.log(todos);
console.log(todos[1].text);

//convert to json format
const jsonTodos=JSON.stringify(todos);
console.log(jsonTodos);

//for loop
for (i=0; i <10;i++){
    console.log(i);
}

//while loop
let j=0;
while (j<10){
    console.log(`while loop no: ${j}`);
    j++;
}
//loop through array
for (i=0;i<todos.length;i++){
    console.log(todos[i]);
}
for (let td of todos){
    console.log(td.text);
}

//forEach
todos.forEach(function(todo){
    console.log(todo);
})
//map
const todoText= todos.map(function(todo){
    return todo.text;
})
console.log(todoText);
//filtering
const todoFiltered=todos.filter(function(todo){
    return todo.isDone===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoFiltered);

//conditional
let x=10;
if (x ==10) {
    console.log('x is 10');
}
x='10';
if (x ==10) {
    console.log('x is 10');
}
if (x===10){
    console.log ('x is 10 and is a number');

}
else if (x >10) {
    console.log ('x is greater than number 10');
} else {
    console.log('x is less than number 10');
}
let y =10;
let num =15;
let z=20;

if (y===10){
    console.log ('y is 10 and is a number');

}
if (num >y && num <z) {
    console.log(`number ${num} is greater than ${y} and less than ${z}`);
}
if (num <z || num ==y) {
    console.log(`number ${num} is less than number ${z} OR equal to number ${y}`);
}

//tunnel conditional operation
let aNum=10;
let color = x>10 ? 'blue': 'red';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break
    default:
        console.log('color is not red or blue');
        break;
}

//function
function addNum(no1 =1,no2=1){
    return no1+no2;
    //console.log(no1+no2);
}

console.log(addNum(5,4));
console.log(addNum());
const addNum1 =(no1=1,no2=1) => (no1+no2);
console.log(addNum1(5,4));
console.log(addNum1());

todos.forEach(todo =>console.log(todo));

//constructor function
function Person(firstName,lastName,dob){
    this.lastName=lastName;
    this.firstName=firstName;
    this.dob=new Date(dob);
    
    this.getFullName =function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
//prototype
Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear();
}

//class
class Person1{
    constructor(firstName,lastName,dob){
        this.lastName=lastName;
        this.firstName=firstName;
        this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const aPerson = new Person('My','Vu', '04-may-1984');
console.log(aPerson);
console.log(aPerson.getBirthYear());
console.log(aPerson.getFullName());

const aPerson1 = new Person1('My','Vu', '04-may-1984');
console.log(aPerson1);
console.log(aPerson1.getBirthYear());
console.log(aPerson1.getFullName());

//dom
console.log(window);
//selecting from DOM
//single element selector
const form=document.getElementById('my-form');
console.log(document.querySelector('h2'))
//multiple selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('ul'));
//processing in DOM
const ul=document.querySelector('.items')
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent="by My Vu";
ul.children[1].innerText="Alex";
ul.lastElementChild.innerHTML='<h3>Extra heading</h3>';

const btt=document.querySelector('.btt');
btt.style.background='blue';
// btt.addEventListener('click', (e) =>{
//     e.preventDefault();
//     console.log('clicking the button');
//     console.log(e.target.id);
//     document.querySelector('#my-form').style.background='gray';
//     document.querySelector('body').classList.add('bg-colorful');
// })

const myForm=document.querySelector('#my-form');
const aName=document.querySelector('#name');
const anEmail=document.querySelector('#email');
const msg=document.querySelector('.msg');
const usrList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(aName.value);    
    if(aName.value==='' ||anEmail.value===''){
        // alert('Please enter data');
        msg.classList.add('error');
        msg.innerHTML='enter data please';
        setTimeout(() => {
            msg.remove()
        }, 3000);
    }   else{
        // console.log('submit success');
        const newLi = document.createElement('li')
        newLi.appendChild(document.createTextNode(`${aName.value}: ${anEmail.value}`));
        usrList.appendChild(newLi);
        aName.value='';
        anEmail.value='';
    }
}