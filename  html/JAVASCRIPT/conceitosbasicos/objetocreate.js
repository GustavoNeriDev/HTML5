//objeto create permmite que voce escolha o objeto e criar um novo propriedade sem aplicar função construtora

// Encapsulamento das propriedades e métodos de Animal
const Animal = {
  tipo: "Invertebrados", // Propriedades de valores padrão
  qualTipo: function () {
    // Método que ira mostrar o tipo de Animal
    console.log(this.tipo);
  },
};

// Cria um novo tipo de animal chamado animal1
const animal1 = Object.create(Animal);
animal1.qualTipo(); // Saída:Invertebrados

// Cria um novo tipo de animal chamado Peixes
const peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo(); // Saída: Peixes
//definindo propriedade para um tipo de objeto
//carro.prototype aciona  todos  os objetos Carro
Carro.prototype.cor = null;
//adiciona a propriedade a cor preto
carro1.cor = "preto";
