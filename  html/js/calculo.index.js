








const valor = document.getElementById("valor");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function calcularDesconto() {

    if (valor.value === "") {
        resultado.textContent = "Digite o valor da compra.";
        return;
    }

    const valorCompra = Number(valor.value);

    if (valorCompra <= 0) {
        resultado.textContent = "Digite um valor válido.";
    } else if (valorCompra >= 100) {

        const desconto = valorCompra * 0.10;
        const valorFinal = valorCompra - desconto;

        resultado.innerHTML = `
            Valor original: R$ ${valorCompra.toFixed(2)} <br>
            Desconto: R$ ${desconto.toFixed(2)} <br>
            Valor final: R$ ${valorFinal.toFixed(2)}
        `;

    } else {
        resultado.innerHTML = `
            Essa compra não possui desconto. <br>
            Valor: R$ ${valorCompra.toFixed(2)}
        `;
    }
}

botao.addEventListener("click", calcularDesconto);







const valor = document.getElementById("valor");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function calcularFrete() {

    if (valor.value === "") {
        resultado.textContent = "Digite o valor da compra.";
        return;
    }

    const valorCompra = Number(valor.value);

    if (valorCompra <= 0) {
        resultado.textContent = "Digite um valor válido.";
    } else if (valorCompra >= 200) {
        resultado.innerHTML = `
            Parabéns! Você ganhou frete grátis.<br>
            Valor da compra: R$ ${valorCompra.toFixed(2)}
        `;
    } else {
        const frete = 20;
        const total = valorCompra + frete;

        resultado.innerHTML = `
            Valor da compra: R$ ${valorCompra.toFixed(2)}<br>
            Frete: R$ ${frete.toFixed(2)}<br>
            Total: R$ ${total.toFixed(2)}
        `;
    }

    valor.value = "";
}

botao.addEventListener("click", calcularFrete);







const venda = document.getElementById("venda");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function calcularComissao() {

    if (venda.value === "") {
        resultado.textContent = "Digite o valor da venda.";
        return;
    }

    const valor = Number(venda.value);

    if (valor <= 0) {
        resultado.textContent = "Digite um valor válido.";
        return;
    }

    if (valor >= 500) {
        const comissao = valor * 0.05;

        resultado.innerHTML = `
            Valor da venda: R$ ${valor.toFixed(2)} <br>
            Comissão: R$ ${comissao.toFixed(2)}
        `;
    } else {
        resultado.innerHTML = `
            Essa venda não gera comissão. <br>
            Valor da venda: R$ ${valor.toFixed(2)}
        `;
    }

    venda.value = "";
}

botao.addEventListener("click", calcularComissao);







const nome = document.getElementById("nome");
const quantidade = document.getElementById("quantidade");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

let ingressosDisponiveis = 10;

function comprarIngresso() {

    if (nome.value === "" || quantidade.value === "") {
        resultado.textContent = "Preencha todos os campos";
        return;
    }

    const ingresso = Number(quantidade.value);

    if (ingresso <= 0) {
        resultado.textContent = "Número inválido";
        return;
    }

    if (ingresso > ingressosDisponiveis) {
        resultado.textContent = "Quantidade indisponível no momento";
        return;
    }

    ingressosDisponiveis -= ingresso;

    if (ingressosDisponiveis === 0) {
        resultado.textContent =
        `${nome.value}, compra realizada com sucesso. Todos os ingressos foram vendidos!`;
    } else {
        resultado.textContent =
        `${nome.value}, compra realizada com sucesso. Ingressos disponíveis: ${ingressosDisponiveis}`;
    }

}

botao.addEventListener("click", comprarIngresso);
