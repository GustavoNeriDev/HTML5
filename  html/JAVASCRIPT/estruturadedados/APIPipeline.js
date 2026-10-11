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
             .pipeThrough(transformador)
             //sink
             .pipeTo(destino)
    } catch (erro) {
        resultado.textContent += `Erro: ${erro.message}`;
    }
}

processar.addEventListener("click", processarPedidos);