const nome = document.getElementById("nome");
const cadastrar = document.getElementById("cadastrar");
const verificar = document.getElementById("verificar");
const comparar = document.getElementById("comparar");
const resultado = document.getElementById("resultado");
//usando como chave para o objeto
const idUsuario = Symbol("id");
const outroId = Symbol("id");
//objeto que vai ser colocado com valore
const usuario = {};

function cadastrarUsuario() {
  const userName = nome.value.trim();

  if (userName === "" || userName.length < 3 || userName.length > 120) {
    resultado.textContent = "Verifique os caracteres";
    return;
  }
  //colocando o nome digitado no objeto
  usuario.nome = userName;
  //colocando um symbol no id para ser usado como chave
  usuario[idUsuario] = 123;
  resultado.textContent = "usuario cadastrado";
}

function verificarUsuario() {
  //chamando o id do usuario
  const acessar = usuario[idUsuario];
  //verificando se ele vai estar definido ou não
  if (acessar !== undefined) {
    //acessando as propriedades do objeto
    resultado.textContent = `existente 
        ${acessar}
        ${usuario.nome}`;
  } else {
    resultado.textContent = "Inexistente";
  }
}

function compararSymbols() {
  //comparando se os symbol(chave) do dois id são iguais ou não
  if (idUsuario === outroId) {
    resultado.textContent = "symbol são iguais";
  } else {
    resultado.textContent = "symbol Não são iguais";
  }
}

cadastrar.addEventListener("click", cadastrarUsuario);
verificar.addEventListener("click", verificarUsuario);
comparar.addEventListener("click", compararSymbols);
