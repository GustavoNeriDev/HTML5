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

  ///validar se os dados recebido tem a estrutura esperada
  const produto = await response.json();

  if (!produto || !produto.title) {
    throw new Error("produto não validado");
  }
  return response.json();

  if (!produto || !produto.title) {
    throw new Error("produto não validado");
  }
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
