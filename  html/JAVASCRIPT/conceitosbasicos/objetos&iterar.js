function mostrarProps(obj, nomeDoObj) {
  let resultado = "";
  //ultizando os objetos para acessar as propriedades junto com a iteração, acessa as propriedades que já são enumeradas
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
}

//retorna
meuCarro.fabricacao = Ford;
meuCarro.modelo = Mustang;
meuCarro.ano = 1969;
