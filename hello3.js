// Template Strings
var multiline = "Hi I am a\n    Multiline\n    String and I use backticks to make sure\n    I can go anywhere\n    ";
console.log(multiline);
var anotherMultiline = " Hi, This is me trying\n    to write a multiline,\n    String. \"Let me try to do double quotes\"\n    You can google to actually find out which key is where on the laptop.\n    We close again with backticks.\n        ";
console.log(anotherMultiline);
//Variable Substitution
//ES6 also provides us with a way to embed variables into our strings. It follows the following format ${name-of-variable}
var lastName = "Mogere";
var introduction = "Hi, my last name is ".concat(lastName);
console.log(introduction);
var yourlocation = "Nairobi";
var yourplace = "I live in ".concat(yourlocation);
console.log(yourplace);
