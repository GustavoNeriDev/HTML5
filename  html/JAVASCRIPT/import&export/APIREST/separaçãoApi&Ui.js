const API_URL = "https://fakestoreapi.com/products";

export async function buscarProduto(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (response.status === 404) {
    throw new Error("Produto não encontrado");
  }
  if (!response.ok) {
    throw new Error("erro");
  }
  return response.json();
}

/**************************************** OUTRO ARQUIVO *************************************************** */

import { buscarProduto } from "./api.js";

const id = document.getElementById("id");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

async function buscarProdutoId(event) {
  event.preventDefault();

  if (id.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  try {
    //desativar botão
    buscar.disabled = true;
    //quando está carregando aparece essa mensagem ao usuario
    resultado.textContent = "Carregando...";
    const produto = await buscarProduto(id.value);

    resultado.textContent = `
    ID: ${produto.id}
    Título: ${produto.title}
    Categoria: ${produto.category}
    Preço: ${produto.price}
`;
  } catch (error) {
    resultado.textContent = error.message;
  } finally {
    // mesmo dando erro no catch, ativa o botão
    buscar.disabled = false;
  }
}

buscar.addEventListener("click", buscarProdutoId);

///////////////////////////////////////// ATIVIDADE //////////////////////

const API_URL = "https://fakestoreapi.com/products";

export async function buscarProduto(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const mensagem = {
    400: "Requisição invalida",
    404: "não encontrado",
  };
  //codigo refatorado, se ouver erro na 400 ou 404 aparece a mensagem do obj guardado se não for, só aparece "erro"
  if (!response.ok) {
    throw new Error(mensagem[response.status] || "Erro");
  }
  return response.json();
}

////////////////////////////////////// outro arquivo ////////////////////

import { buscarProduto } from "./api.js";

const id = document.getElementById("id");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

async function buscarProdutoId(event) {
  event.preventDefault();

  if (id.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  try {
    //desativar botão
    buscar.disabled = true;
    //quando está carregando aparece essa mensagem ao usuario
    resultado.textContent = "Carregando...";
    const produto = await buscarProduto(id.value);

    resultado.textContent = `
    ID: ${produto.id}
    Título: ${produto.title}
    Categoria: ${produto.category}
    Preço: ${produto.price}
`;
  } catch (error) {
    resultado.textContent = error.message;
  } finally {
    // mesmo dando erro no catch, ativa o botão
    buscar.disabled = false;
  }
}

buscar.addEventListener("click", buscarProdutoId);
