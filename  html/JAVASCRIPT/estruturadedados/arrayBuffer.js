const valor = document.getElementById("valor");
const adicionar = document.getElementById("adicionar");
const mostrar = document.getElementById("mostrar");
const limpar = document.getElementById("limpar");
const resultado = document.getElementById("resultado");
//array de memoria de 4 bytes
const buffer = new ArrayBuffer(4);
//acesso a quantidade de elementos que tem dentro desse byte (4 elementos)
const dados = new Uint8Array(buffer);

let posicao = 0;

function adicionarValor() {
  //dados informar a posição e quatidade de elementso que tem o Uint8Array atribuido a dados

  if (posicao >= dados.length) {
    resultado.textContent = "O limite de 4 valores foi atingido";
    return;
  }
  const valorDigitado = Number(valor.value);
  if (valor.value === "" || valorDigitado < 0 || valorDigitado > 255) {
    resultado.textContent = "Digite o valor de 0 até 255";
    return;
  }
  //atribuindo o valor digitado a posição dos dados
  dados[posicao] = valorDigitado;
  posicao++;

  resultado.textContent = "Valor adicionado com sucesso";
}

function mostrarDados() {
  let texto = "";

  for (const numero of dados) {
    //mostrando o tamanho dos dados
    texto += `
        ${numero}`;
    //quantidade de elementos que existem dentro do byte
    texto += `Quantidade de elementos: ${dados.length}<br>`;
    //tamanho dos bytes
    texto += `Tamanho do buffer: ${buffer.byteLength} bytes`;
  }
  resultado.innerHTML = texto;
}

function limparDados() {
  //zera todas as posições, com um loop percorrendo sobre elas
  for (let i = 0; i < dados.length; i++) {
    //zerando os indices
    dados[i] = 0;
  }
  //Esse último ponto é especialmente importante:
  //  posicao é uma variável de controle do seu programa.
  //  enquanto length e byteLength são informações fornecidas pelas próprias estruturas.
  posicao = 0;
  resultado.textContent = "Zerado com sucesso";
}

adicionar.addEventListener("click", adicionarValor);
mostrar.addEventListener("click", mostrarDados);
limpar.addEventListener("click", limparDados);

//////////////////////////////////////////////////////////////////////////////

/* sistema que recebe dados e valores , exemplo baterai, umidade etc*/

const temperatura = document.getElementById("temperatura");
const bateria = document.getElementById("bateria");

const registrar = document.getElementById("registrar");
const mostrar = document.getElementById("mostrar");
const limpar = document.getElementById("limpar");

const resultado = document.getElementById("resultado");

// Memória para temperaturas
const temperaturas = new Int8Array(5);

// Memória para bateria
const baterias = new Uint8Array(5);

let posicao = 0;

function registrarLeitura() {
  const temperaturaDigitada = Number(temperatura.value);
  if (posicao >= temperaturas.length) {
    resultado.textContent = "Chegou ao limite";
    return;
  }

  if (
    temperatura.value === "" ||
    temperaturaDigitada < -128 ||
    temperaturaDigitada > 127
  ) {
    resultado.textContent = "Numero disponivel de -128 até 127";
    return;
  }

  const bateriaMostrada = Number(bateria.value);

  if (posicao >= baterias.length) {
    resultado.textContent = "Chegou ao limite";
    return;
  }

  if (bateriaMostrada < 0 || bateriaMostrada > 100) {
    resultado.textContent = "erro";
    return;
  }
  temperaturas[posicao] = temperaturaDigitada;
  baterias[posicao] = bateriaMostrada;
  posicao++;

  resultado.textContent = "Registrado com sucesso";
}

function mostrarSensores() {
  let texto = "";
  //percorre a temperatura e bateria ao mesmo tempo e mostra elas
  for (let i = 0; i < posicao; i++) {
    //i + 1 percorre a partir do indice i, naturalmente ele ja vem do 0, então com o i + 1, ele comeca do 1
    texto += `
        sensor ${i + 1}<br>
        temperatura ${temperaturas[i]}<br>
        bateria ${baterias[i]}<br>`;
  }
  resultado.innerHTML = texto;
}

function limparDados() {
  //percorre a temperatura e a bateria ao mesmo tempo e zera elas duas
  for (let i = 0; i < posicao; i++) {
    temperaturas[i] = 0;
    baterias[i] = 0;
  }

  posicao = 0;
  resultado.textContent = "Zerada";
}

registrar.addEventListener("click", registrarLeitura);
mostrar.addEventListener("click", mostrarSensores);
limpar.addEventListener("click", limparDados);

///////////////////////////////////////////////////////
//um exemplo de um sistema basico de monitoramento agricola

const temperatura = document.getElementById("temperatura");
const umidade = document.getElementById("umidade");

const registrar = document.getElementById("registrar");
const mostrar = document.getElementById("mostrar");
const limpar = document.getElementById("limpar");

const resultado = document.getElementById("resultado");

const temperaturas = new Float32Array(5);
const umidades = new Float32Array(5);

let posicao = 0;

function registrarLeitura() {
  const temperaturaInformada = Number(temperatura.value);
  if (posicao >= temperaturas.length) {
    resultado.textContent = "Chegou ao limite";
    return;
  }
  if (
    temperatura.value === "" ||
    temperaturaInformada < -50 ||
    temperaturaInformada > 60
  ) {
    resultado.textContent = "Digite uma temperatura entre -50 a 60";
    return;
  }
  const umidadeInformado = Number(umidade.value);
  if (posicao >= umidades.length) {
    resultado.textContent = "Chegou ao limite";
    return;
  }
  if (umidade.value === "" || umidadeInformado < 0 || umidadeInformado > 100) {
    resultado.textContent = "Digite de 0 a 100";
    return;
  }

  temperaturas[posicao] = temperaturaInformada;
  umidades[posicao] = umidadeInformado;
  posicao++;
  resultado.textContent = "Concluido com sucesso";
}

function mostrarDados() {
  let texto = "";
  for (let i = 0; i < posicao; i++) {
    texto += `
        sensor ${i + 1}<br>
        temperatura ${temperaturas[i]}<br>
        umidade ${umidades[i]}<br>`;
  }
  resultado.innerHTML = texto;
}

function limparDados() {
  for (let i = 0; i < posicao; i++) {
    temperaturas[i] = 0;
    umidades[i] = 0;
  }
  posicao = 0;
  resultado.textContent = "concluido";
}

registrar.addEventListener("click", registrarLeitura);
mostrar.addEventListener("click", mostrarDados);
limpar.addEventListener("click", limparDados);
