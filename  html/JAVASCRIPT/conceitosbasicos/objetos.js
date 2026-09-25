//objeto criado e associando valores a ele
const meuCarro = new Object();
//acessando as propriedades do objetos
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

////////////////////////////////////////////////////////////////

const meuObj = new Object(),
  str = "minhaString",
  aleat = Math.random(),
  obj = new Object();
//usando notação de colchetes para acessar propriedades  que não são validas no js, exemblo numero ou hifen
meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str] = "valor de String";
meuObj[aleat] = "Numero Aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";

console.log(meuObj);

//acessando propriedade de acordo com o valor da strig que está associado
const nomeDaPropriedade = "fabricacao";
meuCarro[nomeDaPropriedade] = "Ford";

nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";
