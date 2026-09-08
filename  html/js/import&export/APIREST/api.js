const API_URL = "https://fakestoreapi.com/products";

export async function buscarProdutos() {
  //buscar produtos
  const response = await fetch(API_URL);
  //tranformmar em js
  const produtos = await response.json();
  if (!response.ok) {
    throw new Error("Erro ao buscar dados");
  }
  return produtos;
}

export async function criarProduto(produto) {
  //criar produto
  const response = await fetch(API_URL, {
    //mandando a API criar um novo recurso
    method: "POST",
    //aplicando o recurso em json pra o servidor
    headers: {
      "Content-Type": "application/json",
    },
    //body é o conteudo que estou enviando ao servidor
    body: JSON.stringify(produto), // tranforma obj em json
  });
  //caso o HTTP indicar sucesso continua, mas se houver erro, havera exceção
  if (!response.ok) {
    throw new Erro("Erro");
  }

  //tranformando em uma variavel nova para retornar no script
  const novoProduto = await response.json(); //tranforma em objeto para enviar ao javascript
  return novoProduto;
}
