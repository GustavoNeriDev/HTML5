//Esse padrão é útil para cancelar downloads, interromper processamento de arquivos e parar operações que deixaram de ser necessárias. O controle processando também evita que o usuário inicie vários processamentos simultaneamente.

const iniciar = document.getElementById("iniciar");
const cancelar = document.getElementById("cancelar");
const resultado = document.getElementById("resultado");

let controlador = null;
let processando = false;

async function processarPedidos() {
  if (processando) return;
  //se estiver processando vai transformar em verdadeiro
  processando = true;
  resultado.textContent = "";
  //vai permitir solicitar um cancelamento
  controlador = new AbortController();

  const origem = new ReadableStream({
    start(controller) {
      controller.enqueue("Pedido 101");
      controller.enqueue("Pedido 102");
      controller.enqueue("Pedido 103");
      controller.enqueue("Pedido 104");
      controller.close();
    },
  });

  const destino = new WritableStream({
    async write(pedido) {
      // Simule uma etapa de processamento usando await. que é mais demorada em foram assincrona
      await new Promise((resolve) => setTimeout(resolve, 1500));

      resultado.textContent += `Processado: ${pedido}\n`;
    },

    close() {
      resultado.textContent += "\nProcessamento concluído!";
    },

    abort(razao) {
      //exibe com clareza qual pode ser o erro, quando existir, ?? String dizendo ao javascript que é uma  string
      const mensagem = razao?.message ?? String(razao);
      resultado.textContent += `\nFluxo cancelado: ${mensagem}`;
    },
  });

  try {
    await origem.pipeTo(destino, {
      // Passe o sinal do controlador aqui.
      //permite cancelar a requisição enquanto ela está em andamento
      //tambem estou passando o sinal para o pipeTo
      signal: controlador.signal,
    });
    resultado.textContent = "operação concluida";
  } catch (erro) {
    // Trate o cancelamento e outros erros.
    //nome do erro que recebido
    if (erro.name === "AbortError") {
      resultado.textContent += "\nOperação cancelada";
    } else {
      resultado.textContent += `\nErro: ${erro.message}`;
    }
  } finally {
    processando = false;
    controlador = null;
  }
}

iniciar.addEventListener("click", processarPedidos);

cancelar.addEventListener("click", () => {
  if (!controlador) {
    controlador.abort();
  } else {
    resultado.textContent = `\nnão existe operação em andamento`;
  }
});
//metodo que vai solicitar o cancelamento do chamando o controlador
//evitar chammar abort() enquanto o controlador for null

///////////////////////////
//Agora vamos avançar para um conceito diferente: tornar uma função assíncrona cancelável de verdade, interrompendo também uma espera que está acontecendo dentro dela.

const iniciar = document.getElementById("iniciar");
const cancelar = document.getElementById("cancelar");
const resultado = document.getElementById("resultado");

let controlador = null;
let processando = false;

function processarPedido({ signal }) {
  return new Promise((resolve, reject) => {
    //Se signal.aborted já for true, informa que foi cancelado

    if (signal.aborted) {
      reject(signal.reason);
      return;
    }
    //rejeita a Promise e encerre a função.

    const temporizador = setTimeout(() => {
      //caso o cliente não cancelar Remove o listener de cancelamento.
      signal.removeEventListener("abort", cancelarOperacao);
      resolve("Pedido processado com sucesso!");
    }, 5000);

    function cancelarOperacao() {
      // 3. Cancele o temporizador.
      clearTimeout(temporizador);
      reject(signal.reason);
      // 4. Rejeite a Promise com signal.reason.
    }
    //registrando novamente o evento
    signal.addEventListener("abort", cancelarOperacao, { once: true });
  });
}

async function iniciarProcessamento() {
  if (processando) return;

  processando = true;
  controlador = new AbortController();
  resultado.textContent = "Processando pedido...";

  try {
    //o pedido esta sendo enviado ao controlador para o processar
    const mensagem = await processarPedido({
      signal: controlador.signal,
    });

    resultado.textContent = mensagem;
  } catch (erro) {
    if (erro.name === "AbortError") {
      resultado.textContent = "Processamento cancelado.";
    } else {
      resultado.textContent = `Erro: ${erro.message}`;
    }
  } finally {
    processando = false;
    controlador = null;
  }
}

iniciar.addEventListener("click", iniciarProcessamento);

cancelar.addEventListener("click", () => {
  // Se existir um controlador, chama abort().
  if (controlador) {
    controlador.abort();
  }
});

//Quando você chama controlador.abort(), a razão padrão do cancelamento é normalmente um DOMException com nome AbortError. Por isso, sua verificação erro.name === "AbortError" funciona nesse caso. Se você fornecer uma razão personalizada, o tipo e o nome do erro podem ser diferentes.

/////////////////
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const produtos = [
  { id: 1, nome: "Camiseta" },
  { id: 2, nome: "Calça" },
  { id: 3, nome: "Tênis" },
  { id: 4, nome: "Boné" },
  { id: 5, nome: "Mochila" },
];

const progresso = { importados: 0 };

async function importarProdutos(produtos, signal, progresso) {
  // TODO 1: já foi cancelado antes de começar?
  signal.throwIfAborted();

  for (const produto of produtos) {
    // TODO 2: verificar ANTES da espera
    signal.throwIfAborted();

    await esperar(500); // simula o envio ao servidor

    // TODO 3: verificar DEPOIS da espera
    signal.throwIfAborted();

    // TODO 4: só conta o produto depois de confirmar que não foi cancelado
    progresso.importados++;

    console.log(`Importado: ${produto.nome}`);
  }

  // TODO 5: retornar a quantidade importada
  return progresso.importados;
}

const controller = new AbortController();

importarProdutos(produtos, controller.signal, progresso)
  .then((total) => {
    console.log(`Importação concluída: ${total} produtos`);
  })
  .catch((erro) => {
    if (erro.name === "AbortError") {
      // TODO 6: cancelamento
      console.log(
        `Importação cancelada. Produtos importados até aqui: ${progresso.importados}`,
      );
    } else {
      // TODO 7: erro real
      console.log("Erro inesperado na importação:", erro);
    }
  });

setTimeout(() => controller.abort(), 1200);

/////////////////////////////////
// ===== PRONTO: não precisa mexer =====

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const linhas = [
  "1;Camiseta;Roupas;59.90",
  "2;Calça;Roupas;129.90",
  "3;Tênis;Calçados;249.90",
  "2;Calça;Roupas;129.90",
  "4;Boné;;39.90",
  "5;Mochila;Acessórios;abc",
  "6;Meia;Roupas;19.90",
];

const catalogo = new Map();
const categorias = new Set();
const estatisticas = { duplicados: 0, invalidos: 0 };

const usuario = new AbortController();
const signal = AbortSignal.any([usuario.signal, AbortSignal.timeout(3000)]);

// Etapa A: fonte de dados
async function* lerLinhas(signal) {
  for (const linha of linhas) {
    await esperar(300);
    signal.throwIfAborted(); // TODO 1
    yield linha;
  }
}

// Etapa B: texto -> objeto
const parsear = new TransformStream({
  transform(linha, controller) {
    // TODO 2
    const [id, nome, categoria, preco] = linha.split(";");
    controller.enqueue({
      id: Number(id),
      nome,
      categoria,
      preco: Number(preco),
    });
  },
});

// Etapa C: descarta inválidos
const validar = new TransformStream({
  transform(produto, controller) {
    // TODO 3
    if (produto.categoria === "" || Number.isNaN(produto.preco)) {
      estatisticas.invalidos++;
      return; // descarta: não chama enqueue
    }
    controller.enqueue(produto);
  },
});

// Etapa D: destino final
const destino = new WritableStream({
  write(produto) {
    // TODO 4
    if (catalogo.has(produto.id)) {
      estatisticas.duplicados++;
      return;
    }
    catalogo.set(produto.id, produto);
    categorias.add(produto.categoria);
  },
});

async function importar() {
  try {
    await ReadableStream.from(lerLinhas(signal)) // TODO 5
      .pipeThrough(parsear)
      .pipeThrough(validar)
      .pipeTo(destino, { signal });

    console.log("Importação concluída"); // TODO 6
    console.log(`Produtos importados: ${catalogo.size}`);
    console.log(`Duplicados ignorados: ${estatisticas.duplicados}`);
    console.log(`Inválidos descartados: ${estatisticas.invalidos}`);
    console.log(`Categorias: ${[...categorias].join(", ")}`);
  } catch (erro) {
    // TODO 7
    if (erro.name === "AbortError") {
      console.log(
        `Cancelado pelo usuário. Produtos no catálogo: ${catalogo.size}`,
      );
    } else if (erro.name === "TimeoutError") {
      console.log(`Tempo esgotado. Produtos no catálogo: ${catalogo.size}`);
    } else {
      console.log("Erro inesperado:", erro);
    }
  }
}

importar();
