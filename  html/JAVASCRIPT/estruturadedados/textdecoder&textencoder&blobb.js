const arquivoInput = document.getElementById("arquivo");
const ler = document.getElementById("ler");
const resultado = document.getElementById("resultado");

async function lerArquivo() {
  const arquivoSelecionado = arquivoInput.files[0];
  if (!arquivoSelecionado) {
    resultado.textContent = "Selecione um arquivo";
    return;
  }

  if (arquivoSelecionado.type !== "text/plain") {
    resultado.textContent = "Selcione um arquivo txt";
    return;
  }

  const buffer = await arquivoSelecionado.arrayBuffer();
  const byte = new Uint8Array(buffer);
  //objeto responsavel para decodificaro byte
  const decoder = new TextDecoder("utf-8");
  //convertendo para texto
  const texto = decoder.decode(byte);

  resultado.innerHTML = `
    arquivo ${arquivoSelecionado.name}
    tipo ${arquivoSelecionado.type}
    texto ${texto}`;
}

ler.addEventListener("click", lerArquivo);

//////////////////////////// encoder

const mensagem = document.getElementById("mensagem");
const converter = document.getElementById("converter");
const resultado = document.getElementById("resultado");

function converterTexto() {
  const texto = mensagem.value.trim();
  if (texto === "") {
    resultado.textContent = "Preencha com algum caractere";
    return;
  }
  //craindo o objeto que vai decodificar o texto
  const encoder = new TextEncoder();
  //transformando em bytes
  const bytes = encoder.encode(texto);
  //pecorrendo os indices  do byte, que seria a quantidade
  let textoByte = "";
  for (let i = 0; i < bytes.length; i++) {
    textoByte += `
            bytes ${bytes[i]}`;
  }

  resultado.innerHTML = `
    texto ${texto}
    quantidade  ${bytes.length}
    bytes ${textoByte}`;
}

converter.addEventListener("click", converterTexto);

///////////////////////////////////////blob

const relatorio = document.getElementById("relatorio");
const gerar = document.getElementById("gerar");
const resultado = document.getElementById("resultado");

function gerarArquivo() {
  const texto = relatorio.value.trim();
  if (texto === "") {
    resultado.textContent = "Preencha o campo";
    return;
  }
  const encoder = new TextEncoder();

  const bytes = encoder.encode(texto);
  //informando ao navegador que o conteudo é um texto
  const informarNavegador = new Blob([bytes], { type: "text/plain" });
  //criando a url temporaria, que aponta para os dados do blob
  const url = URL.createObjectURL(informarNavegador);
  //criar link para download
  const link = document.createElement("a");

  link.href = url;
  //definindo nome do arquivo
  link.download = "relatorio.txt";
  //fazendo o download
  link.click();
  //retirando a url temporaria
  URL.revokeObjectURL(url);
}

gerar.addEventListener("click", gerarArquivo);
