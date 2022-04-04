
/* 

ES6

- JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015. 
ECMAScript is the standard that JavaScript programming language uses. ECMAScript provides the specification on how JavaScript 
programming language should work.


What is the difference between TypeScript and JavaScript and ES6?

- TypeScript is a free and open-source pure object-oriented programming language. It is developed and maintained by Microsoft. 
ES6 is a version of ECMAScript (ES), which is a scripting language specification standardized by ECMA international. 
Typescript is to eradicate the development errors.

Variables
-Variables are containers for storing data (storing data values).

-In this example, x, y, and z, are variables, declared with the var keyword:

Example
var x = 5;
var y = 6;
var z = x + y;

Global Scope

- Means a variable is accessible and can be used anywhere in the file.


Local Scope

- Defines variables inside the function.
- Variables defined in a function are only accessible to that function. They cannot be called outside of the function.


Const

- The const keyword declares a variable as constant over time.


Objects

-In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. 
-A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.


Array

-In JavaScript, an array is an order list of values. Each value is called an element specified by an index. 
·An array can hold values of mixed types. 


Destructuring
-This a process in ES6 where we extract values into variables from data stored in objects and arrays.

Array Destructuring
-Unlike the Object counterpart array destructuring is based on index.
-In array destructuring we map the values to the corresponding index of the value in the array.


Looping
Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:
Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

You can write:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true


The For Loop
The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

Example
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
From the example above, you can read:

Statement 1 sets a variable before the loop starts (let i = 0).

Statement 2 defines the condition for the loop to run (i must be less than 5).

Statement 3 increases a value (i++) each time the code block in the loop has been executed.


Promises
-A promise is a placeholder for a future value
-We create promises using the new keyword.

var promise = new Promise((resolve,reject)=>{})

Synchronous Task - The Program has to wait for the previous task to finish before it moves on to the next part
Asynchronous Tasks - The program moves to the next line of code before the task is completed.

Promise Notifications
A promise object has a then function that alerts us whether our asnc function has successfully completed or not.
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

Types define what category a variable falls in.
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


*/