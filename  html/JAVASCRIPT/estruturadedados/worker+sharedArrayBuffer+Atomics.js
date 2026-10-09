//contador de processamento
//arquivo script.js

const iniciar = document.getElementById("iniciar");
const consultar = document.getElementById("consultar");

const resultado = document.getElementById("resultado");

const memoria = new SharedArrayBuffer(4);
//permite que o worker tenha acesso a mesma região de memorai
const contador = new Int32Array(memoria);

Atomics.store(contador, 0, 0);

const workerVendas = new Worker("worker.js");

const workerLogistica = new Worker("worker.js");

function iniciarProcessamento() {
  //estou enviando  memorais para dentro de um objeto
  workerVendas.postMessage({
    memoria: memoria,
    setor: "vendas",
    quantidade: 5,
  });

  workerLogistica.postMessage({
    memoria: memoria,
    setor: "Logistica",
    quantidade: 8,
  });
}

workerVendas.onmessage = function (event) {
  //event.data é oque o worker enviou
  const dados = event.data;
  //acessando as propriedades do objetos
  resultado.textContent = `${dados.setor} processou ${dados.quantidade} tarefas`;
};

workerLogistica.onmessage = function (event) {
  //event.data é oque o worker enviou
  const dados = event.data;
  resultado.textContent = `${dados.setor} processou ${dados.quantidade} tarefas`;
};

consultar.addEventListener("click", () => {
  //acessando o contador na memoria compartilhada, e o indice dela
  const total = Atomics.load(contador, 0);
  resultado.textContent = `total de operações ${total}`;
});

iniciar.addEventListener("click", iniciarProcessamento);
//arquivo worker.js

self.onmessage = function (event) {
  const dados = event.data;
  const memoria = dados.memoria;
  const setor = dados.setor;
  const quantidade = dados.quantidade;
  //permite que  os worker tenham  acesso  a mesma região  de memoria
  const contador = new Int32Array(memoria);
  //para cada tarefa implementada, incrementa um contador compartilhado
  for (let i = 0; i < quantidade; i++) {
    Atomics.add(contador, 0, 1);
  }
  self.postMessage({
    setor: setor,
    quantidade: quantidade,
  });
};
