const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function padronizarProdutos() {
  resultado.textContent = "";

  const fluxo = new TransformStream({
    transform(chunk, controller) {
      //tranforma as letras em maiusculo
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

///////////////////// transformar os registros recebidos e descatar os que não  são usados
const validar = document.getElementById("validar");
const resultado = document.getElementById("resultado");

async function validarPedidos() {
    resultado.textContent = "";

    const origem = new ReadableStream({
        start(controller) {
            controller.enqueue({ id: 101, produto: "Notebook", quantidade: 2 });
            controller.enqueue({ id: 102, produto: "Mouse", quantidade: 0 });
            controller.enqueue({ id: 103, produto: "Teclado", quantidade: 5 });
            controller.enqueue({ id: 104, produto: "Monitor", quantidade: -1 });
            controller.close();
        }
    });

    const filtro = new TransformStream({
        transform(pedido, controller) {
            // Verifica se a quantidade é maior que zero.
             if(pedido.quantidade > 0) {
              controller.enqueue(pedido)
             }
            
        }
    });

    const destino = new WritableStream({
        write(pedido) {
            // Exibe o ID, o produto e a quantidade.
            //{} Preserva os pedidos anteriores.
            resultado.textContent += `produto: ${pedido.produto} quantidade: ${pedido.quantidade} Id: ${pedido.id}\n`

        },

        close() {
            resultado.textContent += "\nValidação concluída!";
        }
    });

    try {
      await origem 
           .pipeThrough(filtro)
           .pipeTo(destino)
      
    } catch (erro) {
        resultado.textContent += `Erro: ${erro.message}`;
    }
}

validar.addEventListener("click", validarPedidos);