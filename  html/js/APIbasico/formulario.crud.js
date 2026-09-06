const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const cadastrar = document.getElementById("cadastrar");

const resultado = document.getElementById("resultado");

function cadastrarUsuario() {
  if (nome.value.trim() === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (nome.value.trim().length < 3) {
    resultado.textContent = "quantidade de caracteres invalida";
    return;
  }
  if (idade.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (Number(idade.value) <= 0 || Number(idade.value) > 120) {
    resultado.textContent = "Numero invalido";
    return;
  }
  if (email.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (!email.value.includes("@") || !email.value.includes(".")) {
    resultado.textContent = "Email invalido";
    return;
  }
  if (senha.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  if (senha.value.length < 6) {
    resultado.textContent = "Senha invalida";
    return;
  }
  const salvarUser = localStorage.getItem("usuarios");
  const usuarios = salvarUser ? JSON.parse(salvarUser) : [];

  const usuarioExistente = usuarios.find(({ nome: nomeDigitado }) => {
    return nomeDigitado === nome.value;
  });
  if (usuarioExistente) {
    resultado.textContent = "Já está cadastrado";
    return;
  }

  const criarID = usuarios.reduce((maior, usuario) => {
    return usuario.id > maior ? usuario.id : maior;
  }, 0);

  const newId = criarID + 1;

  const usuario = {
    id: newId,
    nome: nome.value.trim(),
    idade: Number(idade.value),
    email: email.value,
    senha: senha.value,
  };
  usuarios.push(usuario);

  const dados = JSON.stringify(usuarios);

  localStorage.setItem("usuarios", dados);
  resultado.textContent = "Cadastrado com sucesso";
  nome.value = "";
  email.value = "";
  idade.value = "";
  senha.value = "";
}

cadastrar.addEventListener("click", cadastrarUsuario);




////ATIVIDADE /////



const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const cadastrar = document.getElementById("cadastrar");
const mostrar = document.getElementById("mostrar");

const resultado = document.getElementById("resultado");


function cadastrarUsuario() {

    // Validação do nome
    if (nome.value.trim() === "") {
        resultado.textContent = "Preencha o nome";
        return;
    }

    if (nome.value.trim().length < 3) {
        resultado.textContent = "O nome precisa ter pelo menos 3 caracteres";
        return;
    }


    // Validação da idade
    if (idade.value === "") {
        resultado.textContent = "Preencha a idade";
        return;
    }

    if (Number(idade.value) <= 0 || Number(idade.value) > 120) {
        resultado.textContent = "Digite uma idade entre 1 e 120";
        return;
    }


    // Validação do email
    if (email.value === "") {
        resultado.textContent = "Preencha o email";
        return;
    }

    if (
        !email.value.includes("@") ||
        !email.value.includes(".")
    ) {
        resultado.textContent = "Email inválido";
        return;
    }


    // Validação da senha
    if (senha.value === "") {
        resultado.textContent = "Preencha a senha";
        return;
    }

    if (senha.value.length < 6) {
        resultado.textContent = "A senha precisa ter pelo menos 6 caracteres";
        return;
    }


    // Recuperar usuários
    const dadosSalvos = localStorage.getItem("usuarios");

    const usuarios = dadosSalvos
        ? JSON.parse(dadosSalvos)
        : [];


    // Verificar email duplicado
    const usuarioExistente = usuarios.find(({ email: emailUsuario }) => {
        return emailUsuario === email.value.trim();
    });


    if (usuarioExistente) {
        resultado.textContent = "Email já cadastrado";
        return;
    }


    // Criar ID automaticamente
    const maiorId = usuarios.reduce((maior, usuario) => {
        return usuario.id > maior ? usuario.id : maior;
    }, 0);

    const novoId = maiorId + 1;


    // Criar usuário
    const usuario = {
        id: novoId,
        nome: nome.value.trim(),
        idade: Number(idade.value),
        email: email.value.trim(),
        senha: senha.value
    };


    // Adicionar usuário
    usuarios.push(usuario);


    // Transformar em JSON
    const dados = JSON.stringify(usuarios);


    // Salvar
    localStorage.setItem("usuarios", dados);


    resultado.textContent = "Usuário salvo com sucesso!";


    // Limpar campos
    nome.value = "";
    idade.value = "";
    email.value = "";
    senha.value = "";
}


function mostrarUsuarios() {

    const dadosSalvos = localStorage.getItem("usuarios");


    if (!dadosSalvos) {
        resultado.textContent = "Nenhum usuário cadastrado";
        return;
    }


    const usuarios = JSON.parse(dadosSalvos);


    let text = "<h3>Usuários cadastrados</h3>";


    usuarios.forEach(({ id, nome, idade, email }) => {

        text += `
            ID: ${id}<br>
            Nome: ${nome}<br>
            Idade: ${idade}<br>
            Email: ${email}
            <hr>
        `;
    });


    resultado.innerHTML = text;
}


cadastrar.addEventListener("click", cadastrarUsuario);

mostrar.addEventListener("click", mostrarUsuarios);




///////// ATIVIDADE//////// 


const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const resultado = document.getElementById("resultado");


function cadastrarUsuario(event) {
///impedir que o navegador envie automaticamente
    event.preventDefault();


    if (nome.value.trim() === "") {
      resultado.textContent = "Preencha o campo"
      return
    }
    if (nome.value.trim().length < 3) {
      resultado.textContent = "Invalido"
      return
    }


    if (idade.value === "") {
      resultado.textContent = "Preencha o campo"
      return
    }
    if (Number(idade.value) <= 0 || Number(idade.value) > 120) {
      resultado.textContent = "Idade invalida"
      return
    }


    if(email.value === "") {
      resultado.textContent = "Preencha o campo"
      return
    }
    if (!email.value.includes(".") ||
  !email.value.includes("@")) {
    resultado.textContent = "Email invalido"
    return
  }


    if (senha.value === "") {
      resultado.textContent = "Preencha o campo"
      return
    }

    if (senha.value.length <= 6) {
      resultado.textContent = "Senha invalida"
      return
    }

    const salvarDados = localStorage.getItem("user")
    const users = salvarDados ? JSON.parse(salvarDados) : []

    const twoUsers = users.find(({email: emailUser}) =>{
      return emailUser === email.value
    })

    if(twoUsers) {
      resultado.textContent = "Usuario ja cadastrado"
      return
    }
    

  const creatId = users.reduce((maior, users) => {
  return users.id > maior ? users.id : maior
  }, 0)

  const newId = creatId + 1


    const user = {
      nome: nome.value,
      email: email.value,
      idade: Number(idade.value),
      senha: senha.value,
      id: newId
    }


    users.push(user)


    const dataBase = JSON.stringify(users)
    localStorage.setItem ("user", dataBase)
    resultado.textContent = "Cadastrado com sucesso"
    nome.value = ""
    email.value = ""
    senha.value = ""
    idade.value = ""


    // 11. Mostrar mensagem


    // 12. Limpar formulário

}


formulario.addEventListener("submit", cadastrarUsuario);
