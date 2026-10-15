//Esses métodos são úteis para encadear etapas de processamento de arquivos, transformar dados recebidos pela rede e encaminhar resultados a outro componente. Em vez de controlar manualmente cada leitura e escrita, você conecta as etapas do pipeline
//Uso profissional: pipelines são úteis para processar arquivos, transformar dados de respostas HTTP e encaminhar informações entre componentes. Eles também ajudam a propagar erros e controlar o fluxo de dados automaticamente. 


const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function processarPedidos() {
    resultado.textContent = "";

    const origem = new ReadableStream({
        start(controller) {
            //fluxo de origem que tem as propriedade por meio do controller(controladores de fluxo)
            controller.enqueue("notebook");
            controller.enqueue("mouse");
            controller.enqueue("teclado");
            controller.close();
        }
    });
    const limpar = new TransformStream({
        transform(texto, controller) {
            controller.enqueue(texto.trim())
        }
    })

    const transformador = new TransformStream({
        transform(chunk, controller) {
            //convertendo para letras maiusculas
            controller.enqueue(chunk.toUpperCase())
        }
    });

    const destino = new WritableStream({
        write(chunk) {
            //metodo que envia ao fluxo
            resultado.textContent += `${chunk}\n`
        },

        close() {
            resultado.textContent += "\nProcessamento concluído!";
        }
    });

    try {
        //origem(source) é de onde os dados vem
        await origem 
        //o primeiro devolve um fluxo legivel, quanto ao segundo devolve uma promise que permite aguardar a tranferência
             .pipeThrough(limpar)
             .pipeThrough(transformador)
             //sink
             .pipeTo(destino)
    } catch (erro) {
        resultado.textContent += `Erro: ${erro.message}`;
    }
}

processar.addEventListener("click", processarPedidos);

//converte um valor padronizado e calcula eles

const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function processarVendas() {
    resultado.textContent = "";

    const origem = new ReadableStream({
        start(controller) {
            controller.enqueue("150.50");
            controller.enqueue("89.90");
            controller.enqueue("200.00");
            controller.close();
        }
    });

    let total = 0;

    // Transformador 1: converter texto para número
    const converter = new TransformStream({
        transform(valor, controller) {
            // Faça a conversão e use controller.enqueue()
            controller.enqueue(Number(valor))
        }
    });

    // Transformador 2: acumular os valores
    const somar = new TransformStream({
        //soma os valores vendidos 
        transform(valor, controller) {
            total += valor
            controller.enqueue(valor)
        },

        flush(controller) {
            //envia o resultado final de todo o calculo que foi feito
            controller.enqueue(`Total R$: ${total.toFixed(2)}`)
        }
    });

    const destino = new WritableStream({
        write(dado) {
            resultado.textContent += `${dado}\n`;
        },

        close() {
            resultado.textContent += "\nProcessamento concluído!";
        }
    });

    try {
        await origem
            .pipeThrough(converter)
            .pipeThrough(somar)
            .pipeTo(destino);
    } catch (erro) {
        resultado.textContent += `\nErro: ${erro.message}`;
    }
}

processar.addEventListener("click", processarVendas);
             


////////////verificar se o numero são finitos ou não


const processar = document.getElementById("processar");
const resultado = document.getElementById("resultado");

async function importarVendas() {
    resultado.textContent = "";

    const origem = new ReadableStream({
        start(controller) {
            controller.enqueue("150.50");
            controller.enqueue("89.90");
            controller.enqueue("abc");
            controller.enqueue("-20");
            controller.enqueue("200");
            controller.close();
        }
    });

    let total = 0;

    const validar = new TransformStream({
        transform(valor, controller) {
           const numero = Number(valor)
            //se o numero for finito, e maior que 0 ele vai ser validado
            if(Number.isFinite(numero) && numero > 0) {
                controller.enqueue(numero)
            }
        
        }
    });

    const somar = new TransformStream({
        transform(valor, controller) {
            total += valor
            controller.enqueue(valor)
            
        },

        flush(controller) {
   
            controller.enqueue(`total R$: ${total.toFixed(2)}`)
        }
    });

    const destino = new WritableStream({
        write(dado) {
            resultado.textContent += `${dado}\n`;
        },

        close() {
            resultado.textContent += "\nImportação concluída!";
        }
    });

    try {
        await origem
            .pipeThrough(validar)
            .pipeThrough(somar)
            .pipeTo(destino);
    } catch (erro) {
        resultado.textContent += `\nErro: ${erro.message}`;
    }
}

processar.addEventListener("click", importarVendas);
