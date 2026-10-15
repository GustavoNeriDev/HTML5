//Imagine que um sistema receba uma resposta de API e precise encaminhar os dados para dois destinos: um para exibir informações e outro para armazenar uma cópia em cache. O tee() permite que ambos leiam os mesmos dados de forma independente.
//Atenção: em fluxos grandes, a ramificação que consome os dados mais lentamente pode acumular dados em memória. Por isso, tee() exige cuidado quando os consumidores têm velocidades muito diferentes.

const distribuir = document.getElementById("distribuir");
const financeiro = document.getElementById("financeiro");
const expedicao = document.getElementById("expedicao");

async function lerPedidos(fluxo, destino) {
    const leitor = fluxo.getReader();

    while (true) {
        //getReader e read consumiram os done até o done indicar o fim
        const { value, done } = await leitor.read();

        if (done) break;

        // Exiba o pedido no destino recebido.
        // Preserve os pedidos anteriores.
        destino.textContent += `${value}\n`
    }
}

async function distribuirPedidos() {
    financeiro.textContent = "";
    expedicao.textContent = "";

    const origem = new ReadableStream({
        start(controller) {
            controller.enqueue("Pedido 201 - R$ 150");
            controller.enqueue("Pedido 202 - R$ 300");
            controller.enqueue("Pedido 203 - R$ 90");
            controller.close();
        }
    });

    // Divida o fluxo em duas ramificações usando tee().
    const [fluxoFinanceiro, fluxoExpedicao] = origem.tee()

    // Use Promise.all() para ler as duas ramificações:
    // uma para financeiro e outra para expedicao.
    await Promise.all([
        //chamando as propriedades da função e lendo elas, promise sendo usada para aguardar as duas terminar
        lerPedidos(fluxoFinanceiro, financeiro),
        lerPedidos(fluxoExpedicao, expedicao)
    ])
}

distribuir.addEventListener("click", distribuirPedidos);