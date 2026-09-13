const API_URL = "https://fakestoreapi.com/products";

export async function criarProduto(produto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify(produto),
  });

  if (!response.status !== 201) {
    throw new Error("erro");
  }

  return response.json();
}

//////////// ATIVIDADE//////////

const API_URL = "https://fakestoreapi.com/products";

export async function buscarProduto(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (response.status === 404) {
    throw new Error("erro ao encontrar");
  }

  if (!response.ok) {
    throw new Error("erro na requisição");
  }

  return response.json();
}

///////////////////////////// OUTRO ARQUIVO ESSE CODIGO É /////////////////////////////////

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
    const produto = await buscarProduto(id.value);

    resultado.textContent = `
    ID: ${produto.id}
    Título: ${produto.title}
    Categoria: ${produto.category}
    Preço: ${produto.price}
`;
  } catch (error) {
    resultado.textContent = error.message;
  }
}

buscar.addEventListener("click", buscarProdutoId);

/////////////////////////  FAZENDO COM QUE DESTIVE O BOTÃO ENQUANTO ESTÁ CARREGANDO ///////////////////////////////

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
    //desativar botão enquanto está carregando
    buscar.disabled = true;
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
    ////garantir que o botão  funcione mesmo se houver erro
    buscar.disabled = false;
  }
}

buscar.addEventListener("click", buscarProdutoId);

//////////////////////////  LOADING DE ENTRADA /////////////////////////
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
  }
}

buscar.addEventListener("click", buscarProdutoId);
