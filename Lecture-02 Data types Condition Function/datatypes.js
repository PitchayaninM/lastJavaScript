const people = ["Aaron","Mel","John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
    firstname: "Anirach",
    lastname: "Mingkhwan",
};

function sayHello(person) {
    console.log("Hello " + person.firstname);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);