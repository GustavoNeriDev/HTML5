//aqui é uma array sendo atribuido como uma proprieda do objeto
const obj = { prop: [elemento0, elemento1, ...elementoN] };

//////////////////////////////////////////////////////////////
//aqui estou atribuindo um valor ao elementos array para colocar dentro do array
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";

//////////////////////////////////////////////////////////////////
//
const gatos = [];
//armazenando um indice no array e atribuindo o valor Dusty
gatos[30] = ["Dusty"];
//quando armazena o indice do array e da uma atribuição a ela, sempre vai ser indice + 1
console.log(gatos.length); // 31

/////////////////////////////////////////////////////////////////////
//atribuindo um valor ao length
let gatos = ["Dusty", "Misty", "Twiggy"];
console.log(gatos.length); // 3

gatos.length = 2;
console.log(gatos); // mostra "Dusty, Misty" - Twiggy foi removido

gatos.length = 0;
console.log(gatos); // nada é apresentado; o array gatos está vazio

gatos.length = 3;
console.log(gatos); // [undefined, undefined, undefined

////////////////////////////////////////////////////////////////////

//ITERAÇÃO COM ARRAY

const cores = ["vermelho", "verde", "azul"];
for (let i = 0; i < cores.length; i++) {
  //percorrendo e mostrando todos os valores do array percorrido
  console.log(cores[i]);
}

///////////////////////////////////////////////////////////////
//aplicand o forEach na iteração com arrays
const cores = ["vermelho", "verde", "azul"];
//forEach com arrow functions
cores.forEach((cor) => console.log(cor));
// vermelho
// verde
// azul

////////////////////////////////////////////////////////////////

const array = ["primeiro", "segundo", , "quarto"];
//quando tem undefined, o valor não apareça com o forEach, só se for atribuido manualmente o valor undefined
array.forEach(function (elemento) {
  console.log(elemento);
});
// primeiro
// segundo
// quarto
//buscando os elementos dentro do array
if (array[2] === undefined) {
  console.log("array[2] is undefined"); // verdadeiro
}

array = ["primeiro", "segundo", undefined, "quarto"];
//listados quando atribuimos o valor undefined dentro do array manualmente
array.forEach(function (elemento) {
  console.log(elemento);
});
// primeiro
// segundo
// undefined
// quarto

///////////////////////////////////////////////////////////////////////
/// METODOS ARRAYS
//concat une dois arrays e retorna eles juntos
const myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray agora é ["1", "2", "3", "a", "b", "c"]

//join delimitador
//une dois array e retornam todos eles dentro de uma string
const myArray = new Array("Vento", "Chuva", "Fogo");
const lista = myArray.join(" - "); // lista é "Vento - Chuva - Fogo"

//unshift
//adiciona um ou mais elementos dentro do array
const myArray = new Array("1", "2", "3");
myArray.unshift("4", "5");
// myArray torna-se ["4", "5", "1", "2", "3"

//slice(start_index, upto_index) extrai uma seção de um array e retorna um novo array.
const myArray = new Array("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // inicia no índice 1 e extrai todos os elementos
// até o índice 3, retornado [ "b", "c", "d"]

//splice(index, count_to_remove, addElement1, addElement2, ...) remove elementos de um array e (opcionalmente) o substitui, e retorna os itens que foram removidos do array

const myArray = new Array("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray é agora ["1", "a", "b", "c", "d", "5"]
// Este código iniciou no índice um (ou onde o "2" estava),
// removeu 3 elementos a partir dali, e então inseriu todos os elementos
// consecutivos em seus lugares.

//reverse
//deixar o array na ordem reversa
const myArray = new Array("1", "2", "3");
myArray.reverse();
// transpõe o array de modo que myArray = [ "3", "2", "1" ]

//sort
//ordena o array
//sort pode pegar uma function callback para determinar como os elementos dentro do array são comparados
const myArray = new Array("Neve", "Chuva", "Fogo");
myArray.sort();
// ordena o array de modo que myArray = [ "Chuva", "Fogo", "Neve" ]

const sortFn = function (a, b) {
  //se a for menor que b retorna -1
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  //se a for maior que b retorna 1
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  // se forem iguais retorna 0
  if (a[a.length - 1] == b[b.length - 1]) return 0;
};
myArray.sort(sortFn);
// ordena o array de modo que myArray = ["Chuva","Neve","Fogo"]

///////////////////////////////////////////////////////////////////////////////
//indexOf(searchElement[, fromIndex]) busca searchElement no array e retorna o índice da primeira ocorrência.

const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // mostra 1
// Agora tente novamente, iniciando após o último resultado de busca
console.log(a.indexOf("b", 2)); // mostra 3, o numero dois indica o indice do segundo b
console.log(a.indexOf("z")); // mostra -1 porque z não foi encontrado

//lastIndexOf(searchElement[, fromIndex]) funciona como indexOf, mas começa no fim e busca de trás para a frente

const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // mostra 5
// Agora tente novamente, iniciando antes do último resultado de busca
console.log(a.lastIndexOf("b", 4)); // mostra 1
console.log(a.lastIndexOf("z")); // mostra -1
