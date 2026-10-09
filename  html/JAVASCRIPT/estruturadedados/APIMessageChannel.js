const produto = document.getElementById("produto");
const quantidade = document.getElementById("quantidade");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

// 1. Crie um MessageChannel.
const canal = new MessageChannel();

// 2. Configure a porta que receberá a mensagem.
canal.port2.onmessage = function (event) {
  const dados = event.data;

  resultado.textContent = `pedido recebido ${dados.Produto} quantidade ${dados.Quantidade}`;
};

function enviarPedido() {
  const nomeProduto = produto.value.trim();
  const quantidadeDigitada = Number(quantidade.value);
  if (nomeProduto === "") {
    resultado.textContent = "Digite o nome do produto";
    return;
  }
  if (
    quantidade.value.trim() === "" ||
    !Number.isFinite(quantidadeDigitada) ||
    quantidadeDigitada <= 0
  ) {
    resultado.textContent = "Digite um numero valido";
    return;
  }

  const obj = {
    Produto: nomeProduto,
    Quantidade: quantidadeDigitada,
  };
  //enviando o objeto ao canal da porta1
  canal.port1.postMessage(obj);
}

enviar.addEventListener("click", enviarPedido);
