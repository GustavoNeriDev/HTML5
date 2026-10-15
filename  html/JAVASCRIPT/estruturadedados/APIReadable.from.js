const importar = document.getElementById("importar");
const resultado = document.getElementById("resultado");

async function importarPedidos() {
    resultado.textContent = "";

    const pedidos = [
        "Pedido 501",
        "Pedido 502",
        "Pedido 503",
        "Pedido 504"
    ];
    //verificando se o metodo vai ser compativel com o navegador(função)
    if(typeof ReadableStream.from !== "function") {
        //aplicando um metodo estatico para converter um iteravel em um fluxo legivel
    const fluxo = ReadableStream.from(pedidos)
    // Percorre o fluxo com for await...of.
    for await (const pedido of fluxo) {
        resultado.textContent += `${pedido}\n`
      }
      resultado.textContent += `\nimportação concluida`
    } else {
        resultado.textContent = "Metodo não suportado nesse navegador"
    }
}

importar.addEventListener("click", importarPedidos);

//Uso profissional: essa técnica é útil quando você já tem uma sequência de dados e quer integrá-la a um pipeline de processamento com TransformStream, pipeThrough() ou outros componentes da Streams AP