const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

const worker = new Worker("worker.js");

const pedidos = [
  {
    produto: "Notebook",
    valor: 3000,
  },
  {
    produto: "Mouse",
    valor: 100,
  },
  {
    produto: "Teclado",
    valor: 250,
  },
  {
    produto: "Monitor",
    valor: 1200,
  },
];
//quando  o user clicar irá enviar a lista  para o worker
processar.addEventListener("click", () => {
  //enviando para o worker
  worker.postMessage(pedidos);
});

/////// pagina do worker
worker.onmessage = function (event) {
  //recebendo a resposta
  //valor calculado pelo worer é event.data
  const data = event.data;
  resultado.textContent = `total ${data}`;
};

//////////////// arquivo worker.js

self.onmessage = function (event) {
  //atibuindo os valores calculado
  const pedidos = event.data;
  //somando todos os valores do pedido
  const total = pedidos.reduce((soma, pedido) => {
    return soma + pedido.valor;
  }, 0);
  //enviando para a pagina, output 4550
  self.postMessage(total);
};
