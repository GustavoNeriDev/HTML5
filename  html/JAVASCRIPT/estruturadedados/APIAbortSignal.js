//Aplicação profissional: em uma loja virtual, isso permite cancelar consultas de produtos quando o usuário desiste e evitar que uma requisição fique aguardando indefinidamente.
//Um detalhe: se a API responder rapidamente, você verá o produto antes de cinco segundos. O timeout é um limite máximo, não uma espera obrigatória.
const consultar = document.getElementById("consultar");
const cancelar = document.getElementById("cancelar");
const resultado = document.getElementById("resultado");

let controlador = null;
let processando = false;

async function consultarProduto() {
    if (processando) return;
//iniciadno Consulta
    processando = true;
    controlador = new AbortController();
    resultado.textContent = "Consultando produto...";

    // Crie um sinal de timeout de 5 segundos.
    // Combine o sinal do controlador com o sinal de timeout.
    //sinal com o tempo limite de até 5 segundos
    const signalTempo = AbortSignal.timeout(5000)
    //fazendo um sinal combinado, com o controlador sinal e o sinal de tempo
    const sinalCombinado = AbortSignal.any([
                    controlador.signal,
                    signalTempo
                ])

    try {
        const resposta = await fetch(
            "https://fakestoreapi.com/products/1",
            {
                // Passando o sinal combinado aqui.
                signal: sinalCombinado
            }
        );
           //caso a requisição não tiver resposta
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
      //passando a resposta de uma forma legivel
        const produto = await resposta.json();

        resultado.textContent =
            `Produto: ${produto.title}\n` +
            `Preço: ${produto.price}`;
    } catch (erro) {
        if (erro.name === "TimeoutError") {
            resultado.textContent = "A consulta excedeu o tempo limite.";
        } else if (erro.name === "AbortError") {
            resultado.textContent = "Consulta cancelada pelo usuário.";
        } else {
            resultado.textContent = `Erro: ${erro.message}`;
        }
    } finally {
        processando = false;
        controlador = null;
    }
}

consultar.addEventListener("click", consultarProduto);

cancelar.addEventListener("click", () => {
    // Se houver controlador, solicita o cancelamento manual.
    if(controlador) {
        controlador.abort()
    }
});
  