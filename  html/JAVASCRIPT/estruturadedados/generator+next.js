const cliente = document.getElementById("cliente");
const produto = document.getElementById("produto");
const iniciar = document.getElementById("iniciar");
const enviar = document.getElementById("enviar");

const resultado = document.getElementById("resultado");

function* processarPedido() {
  //nome digitado ira entrar aqui
  const clienteDI = yield "Digite o nome do cliente";
  //gerador continua até aqui e pausa novamente
  const produtoDigitado = yield "Digi o produto";
  //  e chega as informações aqui
  return `nome ${clienteDI} produto ${produtoDigitado}`;
}
const gerador = processarPedido();

function iniciarPedido() {
  //gerador começa chamando a primeira pergunta no yield
  const gerandoPedido = gerador.next();
  resultado.textContent = gerandoPedido.value;
}

function enviarPedido() {
  //gerando o resultado do pedido do cliente
  let resultadoPedido = gerador.next(cliente.value);
  resultado.textContent = resultadoPedido.value;

  //e aqui onde faz todos os pedidos
  resultadoPedido = gerador.next(produto.value);
  resultado.textContent = resultadoPedido;
}

enviar.addEventListener("click", enviarPedido);

//generator comm fluxo de etapas

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");

const iniciar = document.getElementById("iniciar");
const enviar = document.getElementById("enviar");

const resultado = document.getElementById("resultado");

function* cadastrarCliente() {
  const nomeCliente = yield "Digite seu nome";
  const emailCliente = yield "Digite seu email";
  const telefoneCliente = yield "Digite seu numero";

  return `nome: ${nomeCliente} email: ${emailCliente} telefone: ${telefoneCliente}`;
}

const cadastro = cadastrarCliente();

function iniciarCadastro() {
  const cadastroIniciado = cadastro.next();
  resultado.textContent = cadastroIniciado.value;
}

function enviarDados() {
  let cadastroNome = cadastro.next(nome.value);
  resultado.textContent = cadastroNome.value;

  let cadastroEmail = cadastro.next(email.value);
  resultado.textContent = cadastroEmail.value;

  let cadastroTelefone = cadastro.next(telefone.value);
  resultado.textContent = cadastroTelefone.value;
}

iniciar.addEventListener("click", iniciarCadastro);
enviar.addEventListener("click", enviarDados);

//fazendo perguntas no yield

const cliente = document.getElementById("cliente");

const iniciar = document.getElementById("iniciar");
const aprovar = document.getElementById("aprovar");

const resultado = document.getElementById("resultado");

function* processarPedido() {
  const nomeCliente = yield "Digite o nome do cliente";
  const resposta = yield `Pedido de ${nomeCliente} aprovar?`;

  if (resposta === "sim") {
    return `pedido aprovado do cliente ${nomeCliente}`;
  } else {
    return `pedido não foi aprovado do cliente ${nomeCliente}`;
  }
}

const pedido = processarPedido();

function iniciarPedido() {
  const pedidoEnviado = pedido.next();
  resultado.textContent = pedidoEnviado.value;
}

function aprovarPedido() {
  pedido.next(cliente.value);

  const resultadoPedido = pedido.next("sim");
  resultado.textContent = resultadoPedido.value;
}

iniciar.addEventListener("click", iniciarPedido);
aprovar.addEventListener("click", aprovarPedido);
