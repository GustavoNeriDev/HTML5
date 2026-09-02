const nome = document.getElementById("nome");
const idade = document.getElementById("idade");

const salvar = document.getElementById("salvar");
const mostrar = document.getElementById("mostrar");
const limpar = document.getElementById("limpar");

const resultado = document.getElementById("resultado");

function salvarUsuario() {
  if (nome.value === "" || idade.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  // Pega os usuários que já estão salvos
  const dadosSalvos = localStorage.getItem("usuarios");

  // Se já existem usuários, transforma o JSON em array
  // Se não existem, começa com um array vazio
  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  // Cria o novo usuário usando os valores do DOM
  const usuario = {
    nome: nome.value,
    idade: Number(idade.value),
  };

  // Adiciona o usuário ao array
  usuarios.push(usuario);

  // Transforma o array em JSON
  const dados = JSON.stringify(usuarios);

  // Salva novamente no localStorage
  localStorage.setItem("usuarios", dados);

  resultado.textContent = "Usuário salvo com sucesso!";

  nome.value = "";
  idade.value = "";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  let texto = "<h3>Usuários cadastrados:</h3>";

  usuarios.forEach(({ nome, idade }) => {
    texto += `
            Nome: ${nome}<br>
            Idade: ${idade}<br>
            <hr>
        `;
  });

  resultado.innerHTML = texto;
}

function limparUsuarios() {
  localStorage.removeItem("usuarios");

  resultado.textContent = "Usuários removidos!";
}

salvar.addEventListener("click", salvarUsuario);
mostrar.addEventListener("click", mostrarUsuarios);
limpar.addEventListener("click", limparUsuarios);

////ATIVIDADE///////

const nome = document.getElementById("nome");
const valor = document.getElementById("valor");

const cadastrar = document.getElementById("cadastrar");
const depositar = document.getElementById("depositar");
const mostrar = document.getElementById("mostrar");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value === "" || valor.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  if (Number(valor.value) <= 0) {
    resultado.textContent = "Digite um valor válido";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuarioExistente = usuarios.find(({ nome: nomeUsuario }) => {
    return nomeUsuario === nome.value;
  });

  if (usuarioExistente) {
    resultado.textContent = "Usuário já cadastrado";
    return;
  }

  const usuario = {
    nome: nome.value,
    saldo: Number(valor.value),
  };

  usuarios.push(usuario);

  const dados = JSON.stringify(usuarios);

  localStorage.setItem("usuarios", dados);

  resultado.textContent = "Usuário salvo com sucesso!";

  nome.value = "";
  valor.value = "";
}

function depositarValor() {
  if (nome.value === "" || valor.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  if (Number(valor.value) <= 0) {
    resultado.textContent = "Digite um valor válido";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Sem cadastro";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const usuario = usuarios.find(({ nome: nomeUsuario }) => {
    return nomeUsuario === nome.value;
  });

  if (!usuario) {
    resultado.textContent = "Usuário não encontrado";
    return;
  }

  usuario.saldo += Number(valor.value);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  resultado.innerHTML = `
        <h3>Depósito realizado!</h3>

        Nome: ${usuario.nome}<br>
        Depósito: R$ ${Number(valor.value).toFixed(2)}<br>
        Novo saldo: R$ ${usuario.saldo.toFixed(2)}
    `;

  nome.value = "";
  valor.value = "";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  let text = "<h3>Usuários cadastrados</h3>";

  usuarios.forEach(({ nome, saldo }) => {
    text += `
            Nome: ${nome}<br>
            Saldo: R$ ${saldo.toFixed(2)}
            <hr>
        `;
  });

  resultado.innerHTML = text;
}

cadastrar.addEventListener("click", cadastrarUsuario);
depositar.addEventListener("click", depositarValor);
mostrar.addEventListener("click", mostrarUsuarios);

/////////ATIVIDADE //////////

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");

const cadastrar = document.getElementById("cadastrar");
const mostrar = document.getElementById("mostrar");
const atualizar = document.getElementById("atualizar");
const excluir = document.getElementById("excluir");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value === "" || idade.value === "" || email.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  if (Number(idade.value) <= 0) {
    resultado.textContent = "Digite um valor válido";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");

  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuarioExistente = usuarios.find(({ nome: nomeUsuario }) => {
    return nomeUsuario === nome.value;
  });

  if (usuarioExistente) {
    resultado.textContent = "Usuário já cadastrado";
    return;
  }

  const usuario = {
    nome: nome.value,
    idade: Number(idade.value),
    email: email.value,
  };

  usuarios.push(usuario);

  const dados = JSON.stringify(usuarios);

  localStorage.setItem("usuarios", dados);

  resultado.textContent = "Usuário salvo com sucesso!";

  nome.value = "";
  idade.value = "";
  email.value = "";
}

function mostrarUsuarios() {
  const dadosSalvos = localStorage.getItem("usuarios");

  if (!dadosSalvos) {
    resultado.textContent = "Nenhum usuário cadastrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  let text = "<h3>Usuários cadastrados</h3>";

  usuarios.forEach(({ nome, idade, email }) => {
    text += `
            Nome: ${nome}<br>
            idade:  ${idade}
            email: ${email}
            <hr>
        `;
  });

  resultado.innerHTML = text;
}

function atualizarUsuario() {
  if (nome.value === "" || idade.value === "" || email.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  if (Number(idade.value) <= 0) {
    resultado.textContent = "Digite uma idade valida";
    return;
  }

  const novosDados = localStorage.getItem("usuarios");

  if (!novosDados) {
    resultado.textContent = "Não encontrado";
    return;
  }

  const user = JSON.parse(novosDados);

  const novoEmail = user.find(({ email: emailUser }) => {
    return emailUser === email.value;
  });

  if (!novoEmail) {
    resultado.textContent = "Não encontrado";
    return;
  }

  novoEmail.nome = nome.value;
  novoEmail.idade = Number(idade.value);
  novoEmail.email = email.value;

  localStorage.setItem("usuarios", JSON.stringify(user));

  resultado.innerHTML = "Atualizado com sucesso!";

  nome.value = "";
  idade.value = "";
  email.value = "";
}

function excluirUsuario() {
  if (email.value === "") {
    resultado.textContent = "Digite o email";
    return;
  }
  const dadosSalvos = localStorage.getItem("usuarios");
  if (!dadosSalvos) {
    resultado.textContent = "Não encontrado";
    return;
  }

  const usuarios = JSON.parse(dadosSalvos);

  const userExist = usuarios.find(({ email: emailInformado }) => {
    return emailInformado === email.value;
  });

  if (!userExist) {
    resultado.textContent = "não encontrado";
    return;
  }
  const usuariosAtualizados = usuarios.filter(({ email: emailUser }) => {
    return emailUser !== email.value;
  });

  localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

  resultado.innerHTML = "Excluido";

  email.value = "";
}

cadastrar.addEventListener("click", cadastrarUsuario);
mostrar.addEventListener("click", mostrarUsuarios);
atualizar.addEventListener("click", atualizarUsuario);
excluir.addEventListener("click", excluirUsuario);

/////////////ATIVIDADE//////////
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const idUsuario = document.getElementById("idUsuario");

const cadastrar = document.getElementById("cadastrar");
const mostrar = document.getElementById("mostrar");
const atualizar = document.getElementById("atualizar");
const excluir = document.getElementById("excluir");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value === "" || email.value === "" || idade.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  if (Number(idade.value) <= 0) {
    resultado.textContent = "Digite um numero valido";
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");
  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const userExist = usuarios.find(({ nome: nomeUser }) => {
    return nomeUser === nome.value;
  });

  if (userExist) {
    resultado.textContent = "Usuario já cadastrado";
    return;
  }

  // Ela faz o sistema descobrir o maior ID existente e criar o próximo
  const criarId = usuarios.reduce((maior, usuario) => {
    return usuario.id > maior ? usuario.id : maior;
  }, 0);
  const novoId = criarId + 1;
  const usuario = {
    nome: nome.value,
    email: email.value,
    idade: Number(idade.value),
    id: novoId,
  };

  usuarios.push(usuario);

  const dados = JSON.stringify(usuarios);

  localStorage.setItem("usuarios", dados);
  resultado.textContent = "Cadastrado com sucesso";
  nome.value = "";
  idade.value = "";
  email.value = "";
}

function mostrarUsuarios() {
  const RecuperarDados = localStorage.getItem("usuarios");

  if (!RecuperarDados) {
    resultado.textContent = "não encontrado";
    return;
  }
  const user = JSON.parse(RecuperarDados);

  let text = "<h3> Usuarios </h3>";

  user.forEach(({ nome, idade, email, id }) => {
    text += `
        nome: ${nome} <br>
        idade: ${idade} <br>
        email: ${email} <br>
        id: ${id}`;
  });

  resultado.innerHTML = text;
}

function atualizarUsuario() {
  if (
    nome.value === "" ||
    idade.value === "" ||
    email.value === "" ||
    idUsuario.value === ""
  ) {
    resultado.textContent = "Preencha todo os campos";
    return;
  }

  if (Number(idade.value) <= 0) {
    resultado.textContent = "digite um valor valido";
    return;
  }

  const recuperarDados = localStorage.getItem("usuarios");

  if (!recuperarDados) {
    resultado.textContent = "não encontrado";
    return;
  }
  const user = JSON.parse(recuperarDados);

  const id = Number(idUsuario.value);

  const procurarUser = user.find(({ id: idDigitado }) => {
    return idDigitado === id;
  });

  if (!procurarUser) {
    resultado.textContent = "Não encontrado";
    return;
  }

  procurarUser.nome = nome.value;
  procurarUser.idade = Number(idade.value);
  procurarUser.email = email.value;

  localStorage.setItem("usuarios", JSON.stringify(user));
  resultado.innerHTML = "Atualizado com sucesso";

  nome.value = "";
  idade.value = "";
  email.value = "";
  idUsuario.value = "";
}

function excluirUsuario() {
  if (idUsuario.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  const recuperarDados = localStorage.getItem("usuarios");
  if (!recuperarDados) {
    resultado.textContent = "não encontrado";
    return;
  }

  const user = JSON.parse(recuperarDados);

  const id = Number(idUsuario.value);

  const userExist = user.find(({ id: idDigitado }) => {
    return idDigitado === id;
  });

  if (!userExist) {
    resultado.textContent = "Não encontrado";
    return;
  }

  const removerUser = user.filter(({ id: idDigitado }) => {
    return idDigitado !== id;
  });

  localStorage.setItem("usuarios", JSON.stringify(removerUser));

  resultado.innerHTML = "Excluido";
  idUsuario.value = "";
}

cadastrar.addEventListener("click", cadastrarUsuario);
mostrar.addEventListener("click", mostrarUsuarios);
atualizar.addEventListener("click", atualizarUsuario);
excluir.addEventListener("click", excluirUsuario);
