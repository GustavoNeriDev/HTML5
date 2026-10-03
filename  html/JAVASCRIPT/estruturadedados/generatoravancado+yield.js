// yield* delegando para outro generator
const listar = document.getElementById("listar");
const resultado = document.getElementById("resultado");

const eletronicos = ["Notebook", "Celular"];

const acessorios = ["Mouse", "Teclado"];

function* listarEletronicos() {
  for (let i = 0; i < eletronicos.length; i++) {
    yield eletronicos[i];
  }
}

function* listarAcessorios() {
  for (let i = 0; i < acessorios.length; i++) {
    yield acessorios[i];
  }
}

function* catalogoCompleto() {
  //juntando os valores dos acessorios e eletronicos
  yield* listarEletronicos();
  yield* listarAcessorios();
}

function mostrarCatalogo() {
  let texto = "";
  //chamando a função do catalogo completo e percorrendo ela
  for (const produto of catalogoCompleto()) {
    texto += `${produto}<br>`;
  }
  resultado.innerHTML = texto;
}

listar.addEventListener("click", mostrarCatalogo);
