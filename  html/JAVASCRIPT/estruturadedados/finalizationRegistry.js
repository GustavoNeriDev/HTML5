const nome = document.getElementById("nome");

const cadastrar = document.getElementById("cadastrar");

const remover = document.getElementById("remover");

const resultado = document.getElementById("resultado");

let usuario = null;

const registro = new FinalizationRegistry((nomeUsuario) => {
  resultado.textContent = `finalizado ${nomeUsuario}`;
});

function cadastrarUsuario() {
  const nomeUser = nome.value.trim();
  if (nomeUser === "" || nomeUser.length < 3 || nomeUser.length > 100) {
    resultado.textContent = "Verifque os caracteres";
    return;
  }
  const objeto = {
    nome: nomeUser,
  };
  usuario = objeto;
  //quando for finalizado quero receber o nome dele
  registro.register(usuario, usuario.nome);

  resultado.textContent = "Cadastrado com sucesso";
}

function removerReferencia() {
  usuario = null;
  resultado.textContent = "Removido com suceeso";
}

cadastrar.addEventListener("click", cadastrarUsuario);

remover.addEventListener("click", removerReferencia);
