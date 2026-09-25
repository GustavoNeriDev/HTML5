const temperatura = document.getElementById("temperatura");
const bateria = document.getElementById("bateria");

const gravar = document.getElementById("gravar");
const ler = document.getElementById("ler");

const resultado = document.getElementById("resultado");
//buffer é a memoria
const buffer = new ArrayBuffer(6);
//O view é a visão que permite ler e escrever diferentes tipos nessa memória
const view = new DataView(buffer);

function gravarPacote() {
  const temperaturaInformada = Number(temperatura.value);
  if (
    temperatura.value === "" ||
    temperaturaInformada < -50 ||
    temperaturaInformada > 60
  ) {
    resultado.textContent = "Temperatura de -50 a 60";
    return;
  }

  const bateriaInformada = Number(bateria.value);
  if (bateria.value === "" || bateriaInformada < 0 || bateriaInformada > 100) {
    resultado.textContent = "digite de 0 a 100";
    return;
  }
  // O view é a visão que permite ler e escrever diferentes tipos nessa memória

  view.setFloat32(0, temperaturaInformada);
  view.setUint8(4, bateriaInformada);
  const status = 1;
  view.setUint8(5, status);
  resultado.textContent = "Gravado com sucesso";
}

function lerPacote() {
  //acessando a visão que permite ler e escrever diferentes tipo
  const temperaturaLida = view.getFloat32(0);
  const bateriaLida = view.getUint8(4);
  const statusLido = view.getUint8(5);

  if (statusLido === 1) {
    resultado.textContent = "sensor ativo";
  } else {
    resultado.textContent = "Não ativado";
  }

  resultado.innerHTML = ` Temperatura: ${temperaturaLida}°C<br> 
  Bateria: ${bateriaLida}%<br> 
  Status: ${statusTexto} `;
}

gravar.addEventListener("click", gravarPacote);
ler.addEventListener("click", lerPacote);

/////////////////////////////////////////////////////////////////////////
// analisar um arquivo enviado pelo usuario

const arquivoInput = document.getElementById("arquivo");
const analisar = document.getElementById("analisar");
const resultado = document.getElementById("resultado");

async function analisarArquivo() {
  //pegando os input do arquivo
  const arquivoSelecionado = arquivoInput.files[0];
  //sinal de diferente porque quando ele retorna undefined, tem que ser o sinal de diferente !
  if (!arquivoSelecionado) {
    resultado.textContent = "Selecione um arquivo";
    return;
  }

  //size não é metodo (), e sim propriedade

  resultado.textContent = `
    Nome: ${arquivoSelecionado.name}
    Tamanho: ${arquivoSelecionado.size} 
`;
  //tranformando em array buffer, await sendo usado porque array buffer é assincrona
  //arquivoselcionado.arrayBuffer pede ao navegador para ler o arquivo
  //espera oa await para receber as infomações
  const tranformar = await arquivoSelecionado.arrayBuffer();
  //acessa os valores separadamente, quando o de cima terminar, bytes recebe as informações
  const bytes = new Uint8Array(tranformar);

  if (bytes.length === 0) {
    resultado.textContent = "Não existe elementos";
    return;
  }
  //mostra os dez primeiro elementos do byte
  const mostrar = Math.min(10, bytes.length);
  let primeirosBytes = "";
  //percorrendo e mostrando os indice do elementos
  for (let i = 0; i < mostrar; i++) {
    primeirosBytes += `
    ${bytes[i]}`;
  }
  //mostrando as informações do arquivo
  resultado.innerHTML = ` Nome: ${arquivoSelecionado.name}<br>
 Tamanho: ${arquivoSelecionado.size} bytes<br>
 Tipo: ${arquivoSelecionado.type}<br>
 Primeiros ${mostrar} bytes: ${primeirosBytes} `;
}

analisar.addEventListener("click", analisarArquivo);
