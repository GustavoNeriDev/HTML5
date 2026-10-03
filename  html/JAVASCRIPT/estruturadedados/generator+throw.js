const iniciar = document.getElementById("iniciar");
const cancelar = document.getElementById("cancelar");
const continuar = document.getElementById("continuar");

const resultado = document.getElementById("resultado");

function* processarPedido() {
  yield "Pedido recebido";

  yield "Verificando estoque";

  yield "Processando pagamento";

  return "Pedido concluído";
}

const pedido = processarPedido();

function iniciarPedido() {
  const iniciando = pedido.next();
  resultado.textContent = iniciando.value;
}

function cancelarPedido() {
  //encerrando o generator imediamente
  const cancelado = pedido.return("Pedido cancelado pelo usuario");
  resultado.textContent = cancelado.value;
}

function continuarPedido() {
  const proximoPedido = pedido.next();
  resultado.textContent = proximoPedido.value;
}

iniciar.addEventListener("click", iniciarPedido);
cancelar.addEventListener("click", cancelarPedido);
continuar.addEventListener("click", continuarPedido);

//aplicando try catch()

const iniciar = document.getElementById("iniciar");
const erro = document.getElementById("erro");

const resultado = document.getElementById("resultado");

function* processarPagamento() {
  try {
    yield "Pagamento sendo processado";

    return "Pagamento aprovado";
  } catch (erro) {
    yield `Pagamento cancelado: ${erro.message}`;
  }
}

const pagamento = processarPagamento();

function iniciarPagamento() {
  const inicando = pagamento.next();
  resultado.textContent = inicando.value;
}

function simularErro() {
  const erro = pagamento.throw(new Error("Cartão recusado"));
  resultado.textContent = erro.value;
}

iniciar.addEventListener("click", iniciarPagamento);
erro.addEventListener("click", simularErro);
