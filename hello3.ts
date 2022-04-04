// Template Strings

let multiline =`Hi I am a
    Multiline
    String and I use backticks to make sure
    I can go anywhere
    `
console.log(multiline);


let anotherMultiline = ` Hi, This is me trying
    to write a multiline,
    String. "Let me try to do double quotes"
    You can google to actually find out which key is where on the laptop.
    We close again with backticks.
        `
console.log(anotherMultiline);


//Variable Substitution

//ES6 also provides us with a way to embed variables into our strings. It follows the following format ${name-of-variable}


const lastName = "Mogere"
let introduction = `Hi, my last name is ${lastName}`
console.log(introduction);


const yourlocation = "Nairobi"
let yourplace = `I live in ${yourlocation}`
console.log(yourplace);


//Fat Arrow Function


// function ping (){
//     setTimeout(function(){  //We pass in an anonymous function as an argument to the setTimeout() function.
//       console.log("Ping")
//     },1000);
//   }
//   ping()  


//   function ping (){
//     setTimeout(()=>{console.log("Ping")},1000);
//   }
//   ping()
  

  //If we have only one expression we can eliminate the curly braces altogether.

  function ping (){
    setTimeout(()=>console.log("Ping"),1000);
  }
  ping()
  

  //Objects
  //In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. 
  //A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.


  //Object Destructuring - we extract values into variables from data stored in objects and arrays.

const person={"first":"James","last":"Muriuki"};  //We create an object person and pass in a first and last property. 
const {first:firstname,last:lastname}=person;     //We extract the values and map them to new variables firstname and lastname.

console.log(firstname);// James
console.log(lastname); // Muriuki


const movies = {"morning":"Titanic", "evening":"Kumkumbagia"};
const {morning:morningmovie, evening:eveningmovie}=movies;
console.log(morningmovie);
console.log(eveningmovie);

//const {first:firstname}=person
//The above expression translates to "Extract property first from object person and map it to a new variable firstname.

//Array Destructuring
//Unlike the Object counterpart array destructuring is based on index.

const num =[1,2]
const[a,b]=num
console.log(a);

const numb = [2,4,6,8,10]    //In array destructuring we map the values to the corresponding index of the value in the array.
const[c,d,e,f,g]=numb
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);


//Looping
//For-In loops
//The for-in loop is designed to loop over an object and its properties.
const newPerson={"first":"James","last":"Muriuki"}
 
for(let prop in person){
  console.log(prop)
}

//For-Of loops
//For-of loop allows us to easily loop over arrays
const numbers=[1,2,3,4,5,6,7,8,9,10]
for (let num of numbers){
  console.log(num);
}
/*
Promises
-A promise is a placeholder for a future value
-We create promises using the new keyword.

var promise = new Promise((resolve,reject)=>{})

Synchronous Task - The Program has to wait for the previous task to finish before it moves on to the next part
Asynchronous Tasks - The program moves to the next line of code before the task is completed.*/

var promise = new Promise((resolve,reject)=>{})
 
//The promise instance takes a function as a parameter and that function has 2 arguments. resolve and 
//reject which are both functions.
//Inside that inner function that we pass as a parameter is where we perform our asynchronous tasks. 
//We usually return the promise from a function.

function asycTask(){
   var promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log("Action complete");
           resolve();
       },1000);
   });
   return promise;
}

//We call the resolve function after the async task has been completed.
function asycTask(){
   var promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
           try{
            console.log("Action complete");
            resolve();
           }catch(err){
             reject()
           }
       },1000);
   });
   return promise;
}

//When we encounter an error we call the reject function.

//Promise Notifications
//A promise object has a then function that alerts us whether our asnc function has successfully completed or not.

function asycTask(){
  var promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
          try{
           console.log("Action complete");
           resolve();
          }catch(err){
            reject()
          }
      },1000);
  });
  return promise;
}
asycTask().then(()=>{console.log('Event was successful')},()=>{console.log('Event failed')},)

//The then method takes on 2 anonymous functions as arguments. The first one is called if the Asynchronous Task 
//was a success the second is called when the task fails.
//We can also pass in values to the resolve and reject function and then can be used by the then function’s arguments.
function asycTask(){
   var promise = new Promise((resolve,reject)=>{
       setTimeout(()=>{
           try{
            console.log("Action complete");
            resolve("Success");
           }catch(err){
             reject(err)
           }
       },1000);
   });
   return promise;
}
asycTask().then((val)=>{console.log(val)},(err)=>{console.log(err)},)
 
//We place the values inside the resolve and reject functions and log them when we call our then function.

/*Types define what category a variable falls in.
There are several supported types:
1. Basic types
These include boolean, string,number.
let age: number = 19;
age = '19' // TypeError
 
Here we assign the variable age to a type number. If we put any other type of value we get a TypeError.
let name: string = "James";
let isMale:boolean = true;
 
2. Arrays Types
We can define the variable will be of type array in two ways we can either use the [] brackets or Array<type>
let numbers: number[] = [1,2,3,4,5];
 
 
 
let numbers: Array<number> =[1,2,3,4,5];
 
3. Function Type
We can define a variable as a function using the Function type keyword.
let funct : Function= ()=> console.log("Functioning");
 
4. Enum Types
Enums are datatypes in ES6 that consist of named values that behave like constants.
enum Compass{
   North,
   South,
   East,
   West
}
let northStar: Compass = Compass.North;
 
5. Class Types
We can define a variable as a type of a class by using the class name.
class Car{}
let volvo : Car;
 
We can also get an array of variables that belong to a particular class.
class Car{}
let bazzar : Car[];
 
6. Any Type
If we do not know the type a particular variable belongs to it can be any.
let name: any ='James';
name = 1;
 
Notice we can assign the variable with the type any with a value of different types and not get an error
7. Void type
Void type is used in functions when we do not expect any return.
function sayPsst():void{
   console.log('Psst')
}


