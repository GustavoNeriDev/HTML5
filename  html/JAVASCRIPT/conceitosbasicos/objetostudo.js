//é uma forma de percorrer todas as propriedades, pode ser util para encontrar propriedades escondidas, porque a outra propriedades tem o mesmmo nome  atribuido
function listarTodasAsPropriedades(o) {
  let objectoASerInspecionado;
  const resultado = [];

  for (
    objectoASerInspecionado = o;
    objectoASerInspecionado !== null;
    objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)
  ) {
    resultado = resultado.concat(
      Object.getOwnPropertyNames(objectoASerInspecionado),
    );
  }

  return resultado;
}
