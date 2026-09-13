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

    const produto = {
      title: titulo.value.trim(),
      price: Number(preco.value),
      category: categoria.value.trim(),
    };

    await criarProduto(produto);
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





//////ATUALIZANDO USANDO O PUT/////



import { atualizarProduto } from "./api.js";

const formulario = document.getElementById("formulario");

const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const preco = document.getElementById("preco");
const categoria = document.getElementById("categoria");

const resultado = document.getElementById("resultado");

async function editarProduto(event) {
    event.preventDefault();

    if (id.value === "") {
      resultado.textContent = "Preencha o campo"
      return 
    }
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
        

        const produto = {
          
          title: titulo.value.trim(),
          price: Number(preco.value),
          category: categoria.value.trim()
        }


        
        await atualizarProduto(id.value, produto)

        resultado.textContent = "Produto atualizado com sucesso";

        formulario.reset();

    } catch (error) {
        resultado.textContent = "Erro ao atualizar produto";
        console.error(error);
    }
}

formulario.addEventListener("submit", editarProduto);


/////ATIVIDADE PATCH//////



import { alterarProduto } from "./api.js";

const formulario = document.getElementById("formulario");

const id = document.getElementById("id");
const preco = document.getElementById("preco");

const resultado = document.getElementById("resultado");

async function alterarPreco(event) {
    event.preventDefault();

    if(id.value === "") {
      resultado.textContent = "Preencha o campo"
      return
    }
    if(Number(preco.value) <= 0) {
      resultado.textContent = "Invalido"
      return
    }


    try {

       
        const dados = {
          price: Number(preco.value)
        }


        await alterarProduto(id.value, dados)


        resultado.textContent = "Preço atualizado com sucesso";

        formulario.reset();

    } catch (error) {
        resultado.textContent = "Erro ao atualizar preço";
        console.error(error);
    }
}

formulario.addEventListener("submit", alterarPreco);



////DELETANDO PRODUTO /////

import { excluirProduto } from "./api.js";

const formulario = document.getElementById("formulario");

const id = document.getElementById("id");

const resultado = document.getElementById("resultado");

async function deletarProduto(event) {
    event.preventDefault();

    if(id.value === "") {
      resultado.textContent = "Preencha o campo"
      return
    }


    try {

        
      await excluirProduto(id.value)

        resultado.textContent = "Produto excluído com sucesso";

        formulario.reset();

    } catch (error) {
        resultado.textContent = "Erro ao excluir produto";
        console.error(error);
    }
}

formulario.addEventListener("submit", deletarProduto);





