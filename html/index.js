const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function mostrarNome() {
    resultado.textContent = "olá" + nome.value + "!"
}

botao.addEventListener("click", mostrarNome);




const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function somar() {
    resultado.textContent =
        "O resultado é: " +
        (Number(numero1.value) + Number(numero2.value));
}

botao.addEventListener("click", somar);





const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function subtrair() {
    resultado.textContent = "o resultado é:" +
    (Number(numero1.value) - Number(numero2.value))

}

botao.addEventListener("click", subtrair);






const idade = document.getElementById("idade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function verificarIdade() {
    if (Number(idade.value) >= 18) {
        resultado.textContent = "Você é maior de idade.";
    } else {
        resultado.textContent = "Você é menor de idade.";
    }
}

botao.addEventListener("click", verificarIdade);




const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function verificarCadastro() {
    if (Number(idade.value) >= 18) {
        resultado.textContent = nome.value + "voce é maior de idade"
    } else {
        resultado.textContent = nome.value + "voce é menor de idade"
    }

}

botao.addEventListener("click", verificarCadastro);
