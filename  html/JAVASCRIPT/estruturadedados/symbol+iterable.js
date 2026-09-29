const listar = document.getElementById("listar");
const proximo = document.getElementById("proximo");
const resultado = document.getElementById("resultado");

const catalogo = {
  produtos: [
    {
      nome: "Notebook",
      preco: 3500,
    },
    {
      nome: "Mouse sem fio",
      preco: 120,
    },
    {
      nome: "Teclado mecânico",
      preco: 280,
    },
  ],

  [Symbol.iterator]() {
    //controlar a posição
    let indice = 0;
    //preciso guardar os produtos porque o this  não é o catalogo, mas acessa  o array
    const produtos = this.produtos;
    //retorna obj que tem metodo
    return {
      // verificar se ainda existem produtos
      next() {
        if (indice < produtos.length) {
          //quando ainda houver produto
          return {
            value: produtos[indice++],
            done: false,
          };
        } else {
          //quando não houver mais produto
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};
//o iterator possui seu proprio indice
let iterador = catalogo[Symbol.iterator]();

function listarProdutos() {
  let texto = "";
  //cria outro iterator porque o iterator de cima ja tem seu proprio indice
  for (const produto of catalogo) {
    //acessar as propriedades
    texto += `
           ${produto.nome} - ${produto.preco}`;
  }
  resultado.innerHTML = texto;
}

function proximoProduto() {
  const resultadoIterator = iterador.next();
  const produto = resultadoIterator.value;
  if (resultadoIterator.done === true) {
    resultado.textContent = "FIm";
  } else {
    resultado.textContent = `${produto.nome} ${produto.preco}`;
  }
}

listar.addEventListener("click", listarProdutos);
proximo.addEventListener("click", proximoProduto);

///////////////////////////////////////// historico de pedidos

const listar = document.getElementById("listar");
const proximo = document.getElementById("proximo");
const resultado = document.getElementById("resultado");

const pedidos = {
  lista: [
    {
      id: 101,
      cliente: "Gustavo",
      produto: "Notebook",
      status: "Enviado",
    },
    {
      id: 102,
      cliente: "Carlos",
      produto: "Mouse sem fio",
      status: "Entregue",
    },
    {
      id: 103,
      cliente: "Mariana",
      produto: "Teclado mecânico",
      status: "Processando",
    },
  ],

  [Symbol.iterator]() {
    let posicao = 0;
    const pedido = this.lista;
    return {
      next() {
        if (posicao < pedido.length) {
          return {
            //.produto sendo definido para acessar ele no for of
            value: pedido[posicao++].produto,
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

let iterador = pedidos[Symbol.iterator]();

function listarPedidos() {
  let texto = "";
  for (const produto of pedidos) {
    texto += `
        ${produto}`;
  }

  resultado.innerHTML = texto;
}

function proximoPedido() {
  const ite = iterador.next();
  if (ite.done === true) {
    resultado.textContent = "Terminou";
  } else {
    //produto ja está definido lá no objeto com metodo
    resultado.textContent = ite.value;
  }
}

listar.addEventListener("click", listarPedidos);
proximo.addEventListener("click", proximoPedido);
