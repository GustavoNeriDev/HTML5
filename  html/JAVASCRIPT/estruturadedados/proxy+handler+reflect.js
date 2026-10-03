const nome = document.getElementById("nome");
const preco = document.getElementById("preco");
const estoque = document.getElementById("estoque");
const cadastrar = document.getElementById("cadastrar");
const alterarPreco = document.getElementById("alterarPreco");
const alterarId = document.getElementById("alterarId");
const resultado = document.getElementById("resultado");

let produto = null;

let produtoProxy = null;

function cadastrarProduto() {
  const nomeUser = nome.value.trim();

  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 100) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }

  const precoDigitado = Number(preco.value);

  if (preco.value === "" || precoDigitado <= 0) {
    resultado.textContent = "Digite um preço válido";
    return;
  }

  const estoqueDigitado = Number(estoque.value);

  if (estoque.value === "" || estoqueDigitado < 0) {
    resultado.textContent = "Digite um estoque válido";
    return;
  }

  const novoProduto = {
    id: 1,
    nome: nomeUser,
    preco: precoDigitado,
    estoque: estoqueDigitado,
  };
  produto = novoProduto;

  produtoProxy = new Proxy(produto, {
    //pegando o objeto, nova propriedade, e o novo valor
    set(objeto, propriedade, valor) {
      //verificando se o id pode ou não ser alterado
      if (propriedade === "id") {
        resultado.textContent = "O ID não pode ser alterado";
        return false;
      }
      //verificando se a prop preco é negativo
      if (propriedade === "preco" && valor < 0) {
        resultado.textContent = "O preço não pode ser negativo";
        return false;
      }
      //verificando se a prop estoque é negativa
      if (propriedade === "estoque" && valor < 0) {
        resultado.textContent = "O estoque não pode ser negativo";
        return false;
      }
      //se for tudo validado sera true, atualizado, e altera os valores
      Reflect.set(objeto, propriedade, valor);
      resultado.textContent = "Produto atualizado";
      return true;
    },
  });

  resultado.textContent = "Produto cadastrado com sucesso";
}

function alterarPrecoU() {
  //verificando se existe produto cadastrado
  if (produtoProxy === null) {
    resultado.textContent = "Cadastre um produto primeiro";
    return;
  }

  const precoAlterar = Number(preco.value);

  if (preco.value === "" || precoAlterar < 0) {
    resultado.textContent = "Preço inválido";
    return;
  }
  //atribuindo o preco alterado para a prop preco do objeto
  produtoProxy.preco = precoAlterar;
}

function alterarIdU() {
  if (produtoProxy === null) {
    resultado.textContent = "Cadastre um produto primeiro";
    return;
  }

  produtoProxy.id = 999;
}

cadastrar.addEventListener("click", cadastrarProduto);
alterarPreco.addEventListener("click", alterarPrecoU);
alterarId.addEventListener("click", alterarIdU);

//controle de estado

const cliente = document.getElementById("cliente");
const total = document.getElementById("total");

const cadastrar = document.getElementById("cadastrar");
const aprovar = document.getElementById("aprovar");
const pagar = document.getElementById("pagar");
const consultar = document.getElementById("consultar");

const resultado = document.getElementById("resultado");

let pedido = null;
let pedidoProxy = null;

function cadastrarPedido() {
  const clientePedido = cliente.value.trim();
  if (
    clientePedido === "" ||
    clientePedido.length < 3 ||
    clientePedido.length > 100
  ) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  const totalP = Number(total.value);
  if (total.value === "" || totalP <= 0) {
    resultado.textContent = "Digite um numero valido";
    return;
  }
  const obj = {
    id: 1,
    cliente: clientePedido,
    total: totalP,
    status: "Pendente",
    pago: false,
  };
  pedido = obj;
  pedidoProxy = new Proxy(pedido, {
    set(objeto, propriedade, valor) {
      if (propriedade === "id") {
        resultado.textContent = "Não  pode ser alterado";
        return false;
      }
      if (propriedade === "total" && valor < 0) {
        resultado.textContent = "Invalido";
        return false;
      }
      if (
        propriedade === "status" &&
        valor !== "Pendente" &&
        valor !== "aprovado" &&
        valor !== "cancelado"
      ) {
        resultado.textContent = "invalido";
        return false;
      }

      return Reflect.set(objeto, propriedade, valor);
    },
    get(objeto, propriedade) {
      return Reflect.get(objeto, propriedade);
    },
  });
}

function aprovarPedido() {
  if (pedidoProxy === null) {
    resultado.textContent = "Não tem pedido";
    return;
  }

  pedidoProxy.status = "aprovado";
}

function marcarComoPago() {
  if (pedidoProxy === null) {
    textContent = "Não tem pedido";
    return;
  }
  pedidoProxy.pago = true;
}

function consultarPedido() {
  let texto = "";
  //acessando a propriedade do objeto
  Object.entries(pedidoProxy).forEach(([propriedade, valor]) => {
    texto += `
        nome: ${pedidoProxy.cliente}
        total: ${pedidoProxy.total}
        status: ${pedidoProxy.status}
        pago: ${pedidoProxy.pago}`;
  });
  resultado.innerHTML = texto;
}
cadastrar.addEventListener("click", cadastrarPedido);
aprovar.addEventListener("click", aprovarPedido);
pagar.addEventListener("click", marcarComoPago);
consultar.addEventListener("click", consultarPedido);
