//Criando um novo objeto, myobj, com duas propriedades, a e b.
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

//Removendo a propriedade a, deixando myobj com apenas a propriedade b.
delete myobj.a;
console.log("a" in myobj); // yields "false"

//comparando

// Duas variáveis, dois objetos distintos com as mesmas propriedades
const fruit = { name: "apple" };
const fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false
