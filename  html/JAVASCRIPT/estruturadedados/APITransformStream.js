const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function padronizarProdutos() {
  resultado.textContent = "";

  const fluxo = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
      // Envie o resultado usando controller.enqueue()
    },
  });

  const escritor = fluxo.writable.getWriter();

  escritor.write("notebook");
  escritor.write("MOUSE");
  escritor.write("teclado");

  // Termine a entrada de dados
  await escritor.close();

  const leitor = fluxo.readable.getReader();

  while (true) {
    const { value, done } = await leitor.read();

    if (done) {
      break;
    }

    resultado.textContent += `${value}\n`;
  }

  resultado.textContent += "\nPadronização concluída!";
}

processar.addEventListener("click", padronizarProdutos);
