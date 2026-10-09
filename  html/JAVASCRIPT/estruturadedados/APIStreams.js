const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function processarVendas() {
  resultado.textContent = "";

  // 1. Crie um ReadableStream.
  const fluxo = new ReadableStream({
    start(controller) {
      controller.enqueue("venda 101 - R$ 150");
      controller.enqueue("venda 102 - R$ 300");
      controller.enqueue("venda 103 - R$ 90");
      controller.close();
    },
  });

  // 4. Obtenha um leitor usando getReader()
  //objeto que controla a leitura do fluxo
  const leitor = fluxo.getReader();

  // 5. Leia os dados enquanto o fluxo não terminar.
  while (true) {
    //registro recebido, percorrendo eles
    const { value, done } = await leitor.read();

    if (done) {
      break;
    }
    //percorrendo ele e mostrando todos os registros caso o value for true
    // o += acrescenta o proximo registro ao texto existente então  não pode usar só =
    resultado.textContent += `${value}\n`;
  }

  resultado.textContent += `terminou\n`;
}

processar.addEventListener("click", processarVendas);
