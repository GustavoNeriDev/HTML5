//Uso profissional: essa conversão é útil para ler texto de respostas HTTP em partes, processar arquivos grandes e transmitir dados textuais sem precisar armazenar todo o conteúdo de uma vez.
//Esse padrão é útil para processar arquivos textuais grandes ou respostas de rede em partes, permitindo começar a tratar os dados antes de receber todo o conteúdo. Em aplicações reais, também é importante considerar erros de rede, status HTTP e cancelamento de requisições.
const converter = document.getElementById("converter");
const resultado = document.getElementById("resultado");

async function converterMensagens() {
    resultado.textContent = "";

    const origem = new ReadableStream({
        start(controller) {
            controller.enqueue("Relatório de vendas");
            controller.enqueue("Total: R$ 450");
            controller.enqueue("Situação: concluída");
            controller.close();
        }
    });

    
    //transformando em bytes 
    //() --> executa o construtor
    const cod = origem.pipeThrough(new TextEncoderStream())
//pipe through encaminha os dados e retorna um fluxo
//revertendo os bytes para string
    const dec = origem.pipeThrough(new TextDecoderStream())
  

    // 3. Percorra o fluxo final com for await...of.
    for await (const message of dec) {
        resultado.textContent += `${message}\n`
    }

    resultado.textContent += `\nconcluido`
}

converter.addEventListener("click", converterMensagens);


////////// aplicando os metodos HTTP
const buscar = document.getElementById("buscar");
const resultados = document.getElementById("resultado");

async function buscarNoticia() {
    resultados.textContent = "Buscando notícia...";

    try {
        //requisição da API feita
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/2")

        //verificando se a resposta está de acordo com oque foi pedido
        if(!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}`);
            
        }
        //verificando se o body vai possuir conteudo
        if(!resposta.body) {
            throw new Error("A resposta não existe");
            
        }

        //tranformando o body em texto retornando um fluxo por meio do metodo Pipethrough
        const fluxoRetornado = resposta.body.pipeThrough(new TextDecoderStream())

        resultados.textContent = ""
        // com for await...of.
        for await (const msg of fluxoRetornado) {
            resultados.textContent += msg
        }
        resultados.textContent = `\n\nleitura concluida`

    } catch (erro) {
        resultados.textContent = `Erro: ${erro.message}`;
    }
}

buscar.addEventListener("click", buscarNoticia);


//verifica um fluxo de texto linha por linha 
const importar = document.getElementById("importar");
const result = document.getElementById("resultado");

async function importarProdutos() {
    result.textContent = "";

    const chunks = [
        "Notebook - R$ 3000\nMou",
        "se - R$ 80\nTeclado - R$ ",
        "150"
    ];

    let buffer = "";

    for (const chunk of chunks) {
        // 1. Acrescente o chunk ao buffer.
        buffer += chunk

        let posicao;

    
        //pegando as quebra de linha e os percorrendo
        while((posicao = buffer.indexOf("\n")) !== -1) {
            //vai extrair a linha toda
            const linha = buffer.slice(0, posicao)
            result.textContent += `${linha}\n`
          //vai removendo as linhas que ja foi processada
            buffer = buffer.slice(posicao + 1)
        }
    }

    // 3. Exibe o texto restante, se houver.
    if(buffer.length > 0) {
        result.textContent += buffer
    }

    result.textContent += "\nImportação concluída!";
}

importar.addEventListener("click", importarProdutos);