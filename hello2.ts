// The const keyword declares a variable as constant over time.

const school = "Moringa"

//Like the let keyword, the const keyword also creates block-level scoping for the variables.

const nationality = 'Kenyan'

//Const variables are immutable, the variable does not change over time.

function changeNationality(){

    nationality = 'Canadian'
}
changeNationality();
console.log(nationality);



// const person = {};
// person.name = 'James';
// console.log(person);



//The Object.freeze( ) function is used when we initialize the const object. It prevents us from changing the value of the variable later on. 
const person = Object.freeze({});
person.name ='James';
console.log(person); // {}
