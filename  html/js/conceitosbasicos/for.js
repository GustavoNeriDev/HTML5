const numero = document.getElementById("numero");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function mostrarPares() {
  let texto = "";
  if (numero.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const numeroDigitado = Number(numero.value);

  if (numeroDigitado <= 0) {
    resultado.textContent = "Digite um numero valido";
    return;
  } else {
    for (let i = 1; i <= numeroDigitado; i++) {
      texto += `${i} <br>`;
    }
  }
  resultado.innerHTML = texto;
}

botao.addEventListener("click", mostrarPares);

const numero = document.getElementById("numero");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function mostrarPares() {
  let texto = "";

  if (numero.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const numeroDigitado = Number(numero.value);

  if (numeroDigitado <= 0) {
    resultado.textContent = "Digite um número válido";
    return;
  }

  for (let i = 1; i <= numeroDigitado; i++) {
    if (i % 2 === 0) {
      texto += `${i} <br>`;
    }
  }

  resultado.innerHTML = texto;
}

botao.addEventListener("click", mostrarPares);

const numero = document.getElementById("numero");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function mostrarParesOuImpares() {
  let texto = "";

  if (numero.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const numeroDigitado = Number(numero.value);

  if (numeroDigitado <= 0) {
    resultado.textContent = "Digite um número válido";
    return;
  } else {
    for (let i = 1; i <= numeroDigitado; i++) {
      if (i % 2 === 0) {
        texto += `Par: ${i}<br>`;
      } else {
        texto += `Ímpar: ${i}<br>`;
      }
    }
  }

  resultado.innerHTML = texto;
}

botao.addEventListener("click", mostrarParesOuImpares);

const numero = document.getElementById("numero");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function contarPares() {
  let contador = 0;

  if (numero.value === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }

  const numeroDigitado = Number(numero.value);

  if (numeroDigitado <= 0) {
    resultado.textContent = "Digite um número válido";
    return;
  } else {
    for (let i = 1; i <= numeroDigitado; i++) {
      if (i % 2 === 0) {
        contador++;
      }
    }
  }

  resultado.textContent = `Existem ${contador} números pares.`;
}

botao.addEventListener("click", contarPares);
