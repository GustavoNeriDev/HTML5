const nomeCliente = document.getElementById("nomeCliente");
const duplicar = document.getElementById("duplicar");
const resultado = document.getElementById("resultado");

const pedidoOriginal = {
  produto: "Notebook",
  quantidade: 2,
  //objeto interno
  cliente: {
    nome: "Carlos",
    cidade: "Aracaju",
  },
};

function duplicarPedido() {
  const novoNome = nomeCliente.value.trim();

  if (novoNome === "") {
    resultado.textContent = "Digite o novo nome";
    return;
  }
  //copiando o objeto interno
  const copia = structuredClone(pedidoOriginal);
  //colocando a copia do  nome
  copia.cliente.nome = novoNome;

  resultado.textContent = `nome ${pedidoOriginal.cliente.nome} quantidade ${pedidoOriginal.quantidade}
    outro pedido ${copia.cliente.nome}`;
  // tanto do pedido original quanto da cópia.
}

duplicar.addEventListener("click", duplicarPedido);
