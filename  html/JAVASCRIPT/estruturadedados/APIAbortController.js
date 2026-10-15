//Esse padrão é útil para cancelar downloads, interromper processamento de arquivos e parar operações que deixaram de ser necessárias. O controle processando também evita que o usuário inicie vários processamentos simultaneamente.

const iniciar = document.getElementById("iniciar");
const cancelar = document.getElementById("cancelar");
const resultado = document.getElementById("resultado");

let controlador = null;
let processando  = false

async function processarPedidos() {
    if(processando) return
    //se estiver processando vai transformar em verdadeiro
    processando = true
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
        }
    });

    const destino = new WritableStream({
        async write(pedido) {
            // Simule uma etapa de processamento usando await. que é mais demorada em foram assincrona
            await new Promise(resolve => setTimeout(resolve, 1500));

            resultado.textContent += `Processado: ${pedido}\n`;
        },

        close() {
            resultado.textContent += "\nProcessamento concluído!";
        },

        abort(razao) {
            //exibe com clareza qual pode ser o erro, quando existir, ?? String dizendo ao javascript que é uma  string
            const mensagem = razao?.message ?? String(razao)
            resultado.textContent += `\nFluxo cancelado: ${mensagem}`;
        }
    });

    try {
        await origem.pipeTo(destino, {
            // Passe o sinal do controlador aqui.
            //permite cancelar a requisição enquanto ela está em andamento
            //tambem estou passando o sinal para o pipeTo
            signal: controlador.signal
            
        });
        resultado.textContent = "operação concluida"

    } catch (erro) {
        // Trate o cancelamento e outros erros.
        //nome do erro que recebido 
        if(erro.name === "AbortError") {
            resultado.textContent += "\nOperação cancelada"

        } else {
            resultado.textContent += `\nErro: ${erro.message}`
        }
    } finally {
        processando = false
        controlador = null
    }
}

iniciar.addEventListener("click", processarPedidos);

cancelar.addEventListener("click", () => {
    if(!controlador) {
        controlador.abort()
    } else {
        resultado.textContent = `\nnão existe operação em andamento`
    }
})
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

        if(signal.aborted) {
            reject(signal.reason)
            return
        }
        //rejeita a Promise e encerre a função.

        const temporizador = setTimeout(() => {
            //caso o cliente não cancelar Remove o listener de cancelamento.
            signal.removeEventListener("abort", cancelarOperacao)
            resolve("Pedido processado com sucesso!");
        }, 5000);

        function cancelarOperacao() {
            // 3. Cancele o temporizador.
            clearTimeout(temporizador)
            reject(signal.reason)
            // 4. Rejeite a Promise com signal.reason.
        }
        //registrando novamente o evento
        signal.addEventListener("abort", cancelarOperacao, { once: true})
        
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
            signal: controlador.signal
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
    if(controlador) {
        controlador.abort()
    }
});
  
//Quando você chama controlador.abort(), a razão padrão do cancelamento é normalmente um DOMException com nome AbortError. Por isso, sua verificação erro.name === "AbortError" funciona nesse caso. Se você fornecer uma razão personalizada, o tipo e o nome do erro podem ser diferentes.