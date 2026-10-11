const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function processarPedidos() {
    resultado.textContent = "";
      // o fluxo da que vai ter uma fila
    const fluxo = new WritableStream(
        {
            async write(chunk) {
                //espera uma promessa ja resolvida
                await Promise.resolve()
                
                resultado.textContent += `Processado: ${chunk}\n`;
            }
        },
        //o fluxo terá capacidade desejada de uma unidade na fila, se os dados  forem consumidos, novamente terá uma unidade de capacidade
        {
            highWaterMark: 1
        }
    );
//faz com que o write e close retornem promise
    const escritor = fluxo.getWriter();

    try {
        const pedidos = [
            "Pedido 101",
            "Pedido 102",
            "Pedido 103",
            "Pedido 104"
        ];

        for (const pedido of pedidos) {
            //espera até que o fluxo esteja pronto para aceitar mais dados
            await escritor.ready
            //indica o espaço desejado que ainda está na fila
            resultado.textContent += `espaço diponivel ${escritor.desiredSize}\n`
            //enviando cada pedido de forma assincrona
            await escritor.write(pedido)

          
        }

        await escritor.close();

        resultado.textContent += "\nTodos os pedidos foram processados!";

    } catch (erro) {
        resultado.textContent += `Erro: ${erro.message}`;
    }
}

processar.addEventListener("click", processarPedidos);