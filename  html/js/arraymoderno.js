///////FOREACH, metodo moderno de array, mais usado ////
const filme = document.getElementById("filme");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const filmes = [];

function adicionarFilme() {
  if (filme.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  filmes.push(filme.value);

  let texto = "";

  filmes.forEach(function (filmesAdicionados) {
    texto += filmesAdicionados + `<br>`;
  });
  resultado.innerHTML = texto;
  filme.value = "";
}

botao.addEventListener("click", adicionarFilme);

////FILTRAR, ele filtra os elementos que voce quer///////

const nota = document.getElementById("nota");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const notas = [];

function adicionarNota() {
  if (nota.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const notaDigitada = Number(nota.value);

  if (notaDigitada < 0 || notaDigitada > 10) {
    resultado.textContent = "Digite uma nota válida.";
    return;
  }

  notas.push(notaDigitada);

  const aprovados = notas.filter(function (numero) {
    return numero >= 7;
  });

  let texto = "";

  aprovados.forEach(function (nota) {
    texto += `${nota}<br>`;
  });

  resultado.innerHTML = texto;

  nota.value = "";
}

botao.addEventListener("click", adicionarNota);

///////MAP, tranforma elementos ///////
const preco = document.getElementById("preco");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const precos = [];

function adicionarPreco() {
  if (preco.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const precoDigitado = Number(preco.value);

  if (precoDigitado <= 0) {
    resultado.textContent = "Digite um preço válido.";
    return;
  }

  precos.push(precoDigitado);

  const precosAlterados = precos.map(function (dinheiro) {
    return `R$ ${dinheiro.toFixed(2)}`;
  });

  let texto = "";

  precosAlterados.forEach(function (preco) {
    texto += `${preco}<br>`;
  });

  resultado.innerHTML = texto;

  preco.value = "";
}

botao.addEventListener("click", adicionarPreco);

////FIND, retorna apenas o primeiro elemento desejado ///////////
const cliente = document.getElementById("cliente");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const clientes = ["Ana", "Carlos", "Pedro", "Maria"];

function buscarCliente() {
  if (cliente.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const encontrarCliente = clientes.find(function (usuario) {
    return usuario === cliente.value;
  });

  if (encontrarCliente) {
    resultado.textContent = `cliente encontrado ${encontrarCliente}`;
  } else {
    resultado.textContent = "Cliente não encontrado";
  }

  cliente.value = "";
}

botao.addEventListener("click", buscarCliente);

const produto = document.getElementById("produto");
const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

const produtos = [];

function adicionarProduto() {
  if (produto.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  produtos.push(produto.value);
  let texto = "";

  produtos.forEach(function (produtosAdicionados) {
    texto += produtosAdicionados + `<br>`;
  });
  resultado.innerHTML = texto;
  produto.value = "";
}

function buscarProduto() {
  if (produto.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const procurarProduto = produtos.find(function (produtoEncontrado) {
    return produtoEncontrado === produto.value;
  });

  if (produtoEncontrado) {
    resultado.textContent = `Produto encontrado ${procurarProduto}`;
  } else {
    resultado.textContent = `produto não encontrado`;
  }
  produto.value = "";
}

adicionar.addEventListener("click", adicionarProduto);
buscar.addEventListener("click", buscarProduto);

const produto = document.getElementById("produto");
const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");
const remover = document.getElementById("remover");
const resultado = document.getElementById("resultado");

const carrinho = [];

function adicionarProduto() {
  if (produto.value === "") {
    resultado.textContent = "Preencha o campo";
  }

  carrinho.push(produto.value);
  let texto = "";

  carrinho.forEach(function (produtoAdicionado) {
    texto += produtoAdicionado + `<br>`;
  });

  resultado.innerHTML = texto;
  produto.value = "";
}

function buscarProduto() {
  if (produto.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const buscarProduto = carrinho.find(function (produtoEncontrado) {
    return produtoEncontrado === produto.value;
  });

  if (buscarProduto) {
    resultado.textContent`produto encontrado ${buscarProduto}`;
  } else {
    resultado.textContent = "Produto não encontrado";
  }
  produto.value = "";
}

function removerProduto() {
  if (produto.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  let texto = "";
  let removerProduto = carrinho.indexOf(produto.value);

  if (removerProduto !== -1) {
    carrinho.splice(removerProduto, 1);

    carrinho.forEach(function (item) {
      texto += item + `<br>`;
    });

    resultado.innerHTML = texto;
  } else {
    resultado.textContent = "Produto nao encontrado";
  }

  produto.value = "";
}

adicionar.addEventListener("click", adicionarProduto);
buscar.addEventListener("click", buscarProduto);
remover.addEventListener("click", removerProduto);

const personagem = document.getElementById("personagem");
const adicionar = document.getElementById("adicionar");
const buscar = document.getElementById("buscar");
const remover = document.getElementById("remover");
const resultado = document.getElementById("resultado");

const personagens = [];

function adicionarPersonagem() {
  if (personagem.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  personagens.push(personagem.value);

  let texto = "";

  personagens.forEach(function (boneco) {
    texto += boneco + `<br>`;
  });
  resultado.innerHTML = texto;
  personagem.value = "";
}

function buscarPersonagem() {
  if (personagem.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const encontrarPersonagem = personagens.find(function (bonecos) {
    return bonecos === personagem.value;
  });

  if (encontrarPersonagem) {
    resultado.innerHTML = `personagem encontrado ${encontrarPersonagem}`;
  } else {
    resultado.textContent = "Personagem não encontrado";
  }
  personagem.value = "";
}

function removerPersonagem() {
  if (personagem.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  let texto = "";

  let removerPersonagem = personagens.indexOf(personagem.value);

  if (removerPersonagem !== -1) {
    personagens.splice(removerPersonagem, 1);

    personagens.forEach(function (boneco) {
      texto += boneco + `<br>`;
    });
    resultado.innerHTML = texto;
  } else {
    resultado.textContent = "Personagem não encontrado";
  }

  personagem.value = "";
}

adicionar.addEventListener("click", adicionarPersonagem);
buscar.addEventListener("click", buscarPersonagem);
remover.addEventListener("click", removerPersonagem);
