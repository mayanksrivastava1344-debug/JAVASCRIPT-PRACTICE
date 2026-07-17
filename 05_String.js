const name = "Mayank"
const repoCount = 10

// console.log(name + repocount + "value");

console.log('Hello my name is ${name} and my repo Count is ${repoCount}');

const gameName = new String('Mayank-ms-com')
 
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "  mayank   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mayank.com/mayank%20srivastava"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));








