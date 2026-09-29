const listar = document.getElementById("listar");
const proximo = document.getElementById("proximo");
const resultado = document.getElementById("resultado");

const pedidos = {
  lista: [
    {
      id: 201,
      cliente: "Gustavo",
      produto: "Notebook",
      valor: 3500,
    },
    {
      id: 202,
      cliente: "Carlos",
      produto: "Mouse sem fio",
      valor: 120,
    },
    {
      id: 203,
      cliente: "Mariana",
      produto: "Teclado mecânico",
      valor: 280,
    },
  ],

  [Symbol.iterator]() {
    function* gerarProduto() {
      //pedidos.lista acessa o array lista que esta dentro do obj pedidos
      for (const produto of pedidos.lista) {
        //acessa o produto que esta dentro do obj e array
        //yield produz os valores e pausa a execução automaticamente
        yield pedidos.produto;
      }
    }
    //retorna a função que foi gerada
    return gerarProduto();
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
    resultado.textContent = ite.value;
  }
}

listar.addEventListener("click", listarPedidos);
proximo.addEventListener("click", proximoPedido);
