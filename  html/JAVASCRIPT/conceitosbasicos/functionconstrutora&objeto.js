//para definir um tipo de objeto usando função construtora
function Carro(marca, modelo, ano) {
  //verificando os tipos  do obj
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
//agora eu posso  criar um objeto utilizando a variavel meucarro
const meucarro = new Carro("Eagle", "Talon TSi", 1993);
const carroDeKen = new Carro("Nissan", "300ZX", 1992);
const carroDeVPG = new Carro("Mazda", "Miata", 1990);

///////////////////////////////////

function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}

const jose = new Pessoa("Jose Silva", 33, "M");
const paulo = new Pessoa("Paulo Santos", 39, "M");
//reccriando o objeto
function Carro(marca, modelo, ano, dono) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.dono = dono;
}
//e agora para instaciar o objeto é so usar
const carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
const carro2 = new Carro("Nissan", "300ZX", 1992, paulo);
//acessando a propriedade do objeto e adicionando um cor a ele
carro1.cor = "preto";
