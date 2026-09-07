export function salvarUsuarios(usuarios) {
  const tranformar = JSON.parse(usuarios);

  const dadosSalvos = localStorage.getItem("user");
}

export function buscarUsuarios() {
  const recuperarUser = localStorage.getItem("user");
  const tranformar = recuperarUser ? JSON.parse(recuperarUser) : [];
}
