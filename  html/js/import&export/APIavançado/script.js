import { buscarProdutos, criarProduto } from "./api.js";

const formulario = document.getElementById("formulario");

const titulo = document.getElementById("titulo");
const preco = document.getElementById("preco");
const categoria = document.getElementById("categoria");

const listar = document.getElementById("listar");

const resultado = document.getElementById("resultado");

async function cadastrarProduto(event) {
  event.preventDefault();

  if (titulo.value.trim().length < 3) {
    resultado.textContent = "Invalido";
    return;
  }

  if (Number(preco.value) <= 0) {
    resultado.textContent = "invalido";
    return;
  }

  if (categoria.value.trim() === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  try {
    const produt = await buscarProdutos();

    const produto = {
      title: "...",
      price: 100,
      category: "...",
    };

    await criarProduto(produt);
    resultado.textContent = "Criado com sucesso";
    formulario.reset();
  } catch (error) {
    resultado.textContent = "Erro";
    console.error(error);
  }
}

async function listarProdutos() {
  try {
    const produto = await buscarProdutos();

    resultado.innerHTML = "<h3> produtos </h3>";

    produto.forEach(({ id, title, price, category }) => {
      resultado.innerHTML += `
    id: ${id}<br>
    titulo: ${title}<br>
    preço: ${price} <br>
    categoria: ${category} <hr>`;
    });
  } catch (error) {
    resultado.textContent = "Erro";
    console.error(error);
  }
}

formulario.addEventListener("submit", cadastrarProduto);

listar.addEventListener("click", listarProdutos);
