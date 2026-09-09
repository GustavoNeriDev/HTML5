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
    throw new Error("Erro");
  }

  //tranformando em uma variavel nova para retornar no script
  const novoProduto = await response.json(); //tranforma em objeto para enviar ao javascript
  return novoProduto;
}

////  ATIVIDADE USANDO O PUT/////

const API_URL = "https://fakestoreapi.com/products";

export async function atualizarProduto(id, produto) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  if (!response.ok) {
    throw new Error("erro");
  }

  const produtoAtualizado = await response.json();
  return produtoAtualizado;
}

/////ATIVIDADE APLICANDO PATCH ////////

const API_URL = "https://fakestoreapi.com/products";

export async function alterarProduto(id, dados) {
  //REQUISIÇÃO HTTP
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",

    headers: {
      "Content-type": "application/json",
    },
    ///CAMPO QUE QUERO MODIFICAR
    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    throw new Error("erro");
  }
  //TRANSFORMANDO EM JS
  const atualizar = await response.json();
  return atualizar;
}

///////DELETE //////

const API_URL = "https://fakestoreapi.com/products";

export async function excluirProduto(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("erro");
  }

  const deletar = await response.json();
  return deletar;
}

/////////completo //////

const API_URL = "https://fakestoreapi.com/products";

// GET
export async function buscarProdutos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("error");
  }

  const produtos = await response.json();
  return produtos;
}

// POST
export async function criarProduto(produto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  if (!response.ok) {
    throw new Error("error");
  }

  const novoProduto = await response.json();
  return novoProduto;
}

// PATCH
export async function alterarPreco(id, dados) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify(dados),
  });
  if (!response.ok) {
    throw new Error("error");
  }
  const atualizar = await response.json();
  return atualizar;
}

// DELETE
export async function excluirProduto(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("error");
  }
  const deletar = await response.json();
  return deletar;
}

/////simplificado////
const API_URL = "https://fakestoreapi.com/products";

async function api(url, options) {
  const response = await fetch(API_URL + url, options);

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  return response.json();
}

export const buscarProdutos = () => api("");

export const criarProduto = (produto) =>
  api("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });

export const alterarPreco = (id, dados) =>
  api(`/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

export const excluirProduto = (id) =>
  api(`/${id}`, {
    method: "DELETE",
  });
