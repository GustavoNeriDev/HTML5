const pedido = document.getElementById("pedido");
const status = document.getElementById("status");
const atualizar = document.getElementById("atualizar");
const resultado = document.getElementById("resultado");

// 1. Crie o canal chamado "pedidos".
const canal = new BroadcastChannel("pedidos");

// 2. Configure o recebimento de mensagens.
canal.onmessage = function (event) {
  const dados = event.data;

  resultado.textContent = `numero do pedido ${dados.Pedido} status ${dados.Status}`;
};

function atualizarPedido() {
  const numeroPedido = Number(pedido.value);
  const statusSelecionado = status.value;

  if (statusSelecionado === "") {
    resultado.textContent = "Selecione um status";
    return;
  }
  if (
    pedido.value === "" ||
    !Number.isFinite(numeroPedido) ||
    numeroPedido <= 0
  ) {
    resultado.textContent = "Digite um numero valio";
    return;
  }

  const obj = {
    Pedido: numeroPedido,
    Status: statusSelecionado,
  };
  //envia diretamento pelo canal sem precisar de portas de entrada e saida
  canal.postMessage(obj);
}

atualizar.addEventListener("click", atualizarPedido);
