const API_URL = "https://fakestoreapi.com/products";

export async function buscarProdutos(categoria) {
  const response = await fetch(`${API_URL}?category=${categoria}`);

  const mensagem = {
    400: "requisição invalida",
    404: "Não encontrado",
  };
  if (!response.ok) {
    throw new Error(mensagem[response.status] || "Erro");
  }
  return response.json();
}

//////////////////// OUTRO ARQUIVO /////////////

import { buscarProdutos } from "./api.js";

const categoria = document.getElementById("categoria");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

async function buscarPorCategoria(event) {
  event.preventDefault();

  if (categoria.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  try {
    //desativar botão
    buscar.disabled = true;
    //quando está carregando aparece essa mensagem ao usuario
    resultado.textContent = "Carregando...";
    const produto = await buscarProdutos(categoria.value);
    let texto = "";
    produto.forEach((produto) => {
      texto += `titulo: ${produto.title} preço: ${produto.price} Categoria ${produto.category}`;
    });

    resultado.innerHTML = texto;
  } catch (error) {
    resultado.textContent = error.message;
  } finally {
    // mesmo dando erro no catch, ativa o botão
    buscar.disabled = false;
  }
}

buscar.addEventListener("click", buscarPorCategoria);
