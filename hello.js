console.log('I am a typescript example');
//Global Scope
//means a variable is accessible and can be used anywhere in the file.
var myName = 'Charmain'; //created a global variable myName
function changeName() {
    myName = "Naomi"; //changes its value
}
changeName(); // called the function
console.log(myName); //log the variable to see it in the terminal you write node hello.ts
var globalString = "This is a global variable";
function ourSampleFunction() {
    console.log(globalString);
    globalString = "This is an update";
    console.log(globalString);
}
console.log(globalString);
ourSampleFunction();
console.log(globalString);
//the value will be different because when you updated it in a function
//When you change the variable it updates globally
//after you run a function that runs a global function that global function changes
var mySecondName = 'Mogere';
function changeSecondName() {
    mySecondName = 'Bonareri';
}
changeSecondName();
console.log(mySecondName);
var hisName = 'Joseph';
function anotherName() {
    hisName = 'Mwangi';
}
anotherName();
console.log(hisName);
// Variables defined in a function are only accessible to that function. They cannot be called outside of the function.
var nameTwo = 'James';
function changeThirdName() {
    var nameTwo = 'Mwangi';
}
changeThirdName();
console.log(nameTwo);
//a variable stores the data value that can be changed later on. Use the reserved keyword var to declare a variable in JavaScript.
//local scope
function mysampleFunction() {
    var myFavouriteCar = "Vw Toureg";
    console.log(myFavouriteCar);
    myFavouriteCar = "Merceedes";
    console.log(myFavouriteCar);
}
mysampleFunction();
console.log(myFavouriteCar);
function sampleFunction() {
    var localString = "This is a local variable";
    console.log(localString);
    localString = "This is a local variable update";
    console.log(localString);
}
sampleFunction();
console.log(localstring);
//let keyword allows block scoping
{
    var favoriteColor = "Black";
}
function changeFavoriteColor() {
    favoriteColor = "Red";
}
console.log(favoriteColor);
