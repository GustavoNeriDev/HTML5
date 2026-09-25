`Uma função assíncrona é uma função que pode iniciar uma tarefa que demora algum tempo para terminar sem bloquear o restante do JavaScript.
`;
/*//tranformando em array buffer, await sendo usado porque array buffer é assincrona
//arquivoselcionado.arrayBuffer pede ao navegador para ler o arquivo
//espera oa await para receber as infomações
*/
async function analisarArquivo() {
  const transformar = await arquivoSelecionado.arrayBuffer();
}
/*1. async Quando você coloca async antes da função:

você está dizendo:

"Essa função pode realizar operações assíncronas."

Uma função async sempre retorna uma Promise.

Promise é um objeto que representa um resultado que ainda pode estar pendente.



2. await

O await significa, de forma simples:

"Espere essa operação terminar antes de continuar esta função."
*/

const transformar = await arquivoSelecionado.arrayBuffer();

/* O navegador precisa transformar o arquivo em um ArrayBuffer. Isso pode levar algum tempo dependendo do arquivo.

O await espera esse resultado para então continuar


O await não congela o navegador inteiro.
*/

async function teste() {
  console.log("Começou");

  await algumaOperacao();

  console.log("Terminou");
}

console.log("A");
teste();
console.log("B");

/*A ideia é que o JavaScript pode continuar executando outras coisas enquanto aquela operação assíncrona está pendente.

Isso é muito importante em situações como:

buscar dados de uma API com fetch();
ler arquivos;
esperar um temporizador;
operações que dependem de recursos externos
*/
