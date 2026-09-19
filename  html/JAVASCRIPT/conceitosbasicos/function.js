//aqui temos uma função que tem um objeto dentro dela
function myFunc(theObject) {
  //função acessando a propriedado do objeto e mudando ela
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make); // "Honda"
myFunc(myCar);
//retorna toyota porque a função acessou os objetos e mudou as propriedades, então fora do retorno da função ela muda a propriedade, retornará a string qeu tinha na função que acessava o obj
console.log(myCar.make); // "Toyota"

////////////////////////////////////////////////
//função que muda o valor do array
function myFunc(theArr) {
  //mudando o valor do array
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
//valor alterado e visivel fora da função
console.log(arr[0]); // 30

////////////////////////////////////////////////////////////////
// está é um afunção aninhada
function addSquares(a, b) {
  //o elemento x pega o elemento de cima quandi vai retornar
  function square(x) {
    //retornando dois elemento x e multiplicando eles
    return x * x;
  }
  //funcão externa que pode acessar a função intern
  return square(a) + square(b);
}
a = addSquares(2, 3); // retorna 13
b = addSquares(3, 4); // retorna 25
c = addSquares(4, 5); // retorna 41

/////////////////////////////////////////////////////////////////////

function fora(x) {
  function dentro(y) {
    return x + y;
  }
  return dentro;
}
fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
result = fn_inside(5); // retorna 8

result1 = fora(3)(5); // retorna 8

////////////////////////////////////////////////////////////////

//neste exemplo a funçao B acessa a função A e a funçâo C acessa a B que acessa a função A
function A(x) {
  function B(y) {
    function C(z) {
      alert(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Exibe um alerta com o valor 6 (1 + 2 + 3)

////////////////////////////////////////////////////////////////////////////

function multiplicar(a, b) {
  //parametros da função
  //variavel B vai ser atribuido como tipo B tem que ser diferente de indefinido, Se não for , B vai ser igual a 1
  b = typeof b !== "undefined" ? b : 1;
  //multiplicando  os dois
  return a * b;
}
//como B não é indefinido, então A vai ser multiplicado por 1
multiplicar(5); // 5

////////////////////////////////////////////////////////////////////////////////////////////

function multiplicar(multiplicador, ...args) {
  return args.map((x) => multiplicador * x);
}
// 2 vai ser multiplicado por 1 depois por 2 depois por 3
let arr = multiplicar(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
