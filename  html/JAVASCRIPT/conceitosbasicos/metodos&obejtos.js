//metodo é uma propriedade de  um objeto que tenha uma função
//nomedoobjeto é um objeto existente
//nome do metdodo é o nome qu eu atribuir  ao metodo
//nome da função é o nome da função usada
nomeDoObjeto.nomedometodo = nome_da_funcao;

const meuObjeto = {
  meuMetodo: function (parametros) {
    // ...faça algo
  },
};
//chamar o metodo no contexto de um objeto
objeto.nomedometodo(parametros);

//função que formata e motra as propriedades  do objeto
function mostreCarro() {
  const resultado =
    //this refenciando ao objeto atual ao qual o metodo pertence
    "Um belo " + this.ano + " " + this.fabricacao + " " + this.modelo;
  //linha  horinzontal de string
  pretty_print(resultado);
}

this.mostreCarro = mostreCarro; //metodo de carro, adicionado seu estado ao objeto
//assim o objeto ficaria como
function Carro(fabricacao, modelo, ano, proprietario) {
  this.fabricacao = fabricacao;
  this.modelo = modelo;
  this.ano = ano;
  this.proprietario = proprietario;
  this.mostreCarro = mostreCarro;
}

//chamando o metodo carro
carro1.mostreCarro();
carro2.mostreCarro();
