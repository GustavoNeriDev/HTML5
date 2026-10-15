//O for await...of simplifica o processamento de dados recebidos em partes, como o conteúdo de uma resposta HTTP. Em vez de controlar manualmente getReader(), read() e done, você percorre os dados com um loop mais legível

const gerar = document.getElementById("gerar");
const resultado = document.getElementById("resultado");

async function gerarRelatorio() {
    resultado.textContent = "";

    const vendas = new ReadableStream({
        start(controller) {
            controller.enqueue("Venda 401 - R$ 120");
            controller.enqueue("Venda 402 - R$ 250");
            controller.enqueue("Venda 403 - R$ 80");
            controller.close();
        }
    });

    // Percorre o fluxo usando for await...of.
    //pedido representa o valor atual
    for await (const pedido of vendas) {
        resultado.textContent += `${pedido}\n`
    }
    
    // Depois do loop, exiba "Relatório concluído!".
    resultado.textContent += `\nrelatorio concluido`

}

gerar.addEventListener("click", gerarRelatorio);