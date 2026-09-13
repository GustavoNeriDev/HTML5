export function criarUsuario(nome, idade, email, senha, usuarios) {
  const novoId = gerarNovoId(usuarios);

  const users = {
    id: novoId,
    nome: nome,
    idade: idade,
    email: email,
    senha: senha,
  };

  return users;
}

export function encontrarUsuarioPorEmail(email, usuarios) {
  const noReapt = usuarios.find(({ email: emailDigitado }) => {
    return emailDigitado === email;
  });

  return noReapt;
}

export function gerarNovoId(usuarios) {
  const maiorId = usuarios.reduce((maior, usuario) => {
    return usuario.id > maior ? usuario.id : maior;
  }, 0);

  const novoId = maiorId + 1;
  return novoId;
}
