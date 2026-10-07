const quantidade = document.getElementById("quantidade");

const consultar = document.getElementById("consultar");
const adicionar = document.getElementById("adicionar");
const retirar = document.getElementById("retirar");

const resultado = document.getElementById("resultado");
//memoria dos bytes
const memoria = new SharedArrayBuffer(4);
//memoria compartilha ao  estoque
const estoque = new Int32Array(memoria);
//escrevendo a quantidade de estoque
Atomics.store(estoque, 0, 100);

function consultarEstoque() {
  //lendo a quantidade de estoque
  const consu = Atomics.load(estoque, 0);

  resultado.textContent = `Estoque atual ${consu}`;
}
function adicionarEstoque() {
  const valor = Number(quantidade.value);
  if (quantidade.value === "" || valor <= 0) {
    resultado.textContent = "Digite um valor valido";
    return;
  }
  //adicionando o valor digitado ao estoque
  Atomics.add(estoque, 0, valor);
}
function retirarEstoque() {
  const valor = Number(quantidade.value);
  const atual = Atomics.load(estoque, 0);
  if (valor > atual) {
    resultado.textContent = "Estoque insuficiente";
    return;
  }
  //para retirar o valor digitado do estoque
  Atomics.sub(estoque, 0, valor);
}

consultar.addEventListener("click", consultarEstoque);

adicionar.addEventListener("click", adicionarEstoque);

retirar.addEventListener("click", retirarEstoque);
