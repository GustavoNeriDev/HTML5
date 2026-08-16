const cidade = document.getElementById("cidade");
const idUsuario = document.getElementById("idUsuario");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const usuarios = [
  {
    id: 1,
    nome: "Gustavo",
    idade: 20,
    cidade: "Aracaju",
    ativo: true,
    compras: 1200,
  },
  {
    id: 2,
    nome: "Lucas",
    idade: 17,
    cidade: "Salvador",
    ativo: true,
    compras: 500,
  },
  {
    id: 3,
    nome: "Pedro",
    idade: 25,
    cidade: "Aracaju",
    ativo: false,
    compras: 2000,
  },
  {
    id: 4,
    nome: "João",
    idade: 30,
    cidade: "Recife",
    ativo: true,
    compras: 3500,
  },
  {
    id: 5,
    nome: "Carlos",
    idade: 22,
    cidade: "Aracaju",
    ativo: true,
    compras: 1800,
  },
];

function gerarRelatorio() {
  if (cidade.value === "" || idUsuario.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const filtrar = usuarios.filter(({ cidade: cidadeUsuario, ativo }) => {
    return cidadeUsuario === cidade.value && ativo === true;
  });

  if (filtrar.length === 0) {
    resultado.textContent = "Não encontrado";
    return;
  }

  const mapear = filtrar.map(({ nome, idade, compras }) => {
    return `nome: ${nome} idade: ${idade} compras: ${compras} <br>`;
  });

  const somar = filtrar.reduce((soma, { compras }) => {
    return soma + compras;
  }, 0);

  const procurar = usuarios.find(({ id }) => {
    return id === Number(idUsuario.value);
  });

  if (!procurar) {
    resultado.textContent = "não encontrado";
    return;
  }

  const { nome, idade, cidade: cidadeUsuario, ativo, compras } = procurar;
  resultado.innerHTML = `
        <h3>Usuários ativos de ${cidade.value}</h3>

        ${mapear.join("")}

        <br>

        <strong>Total de compras: R$ ${somar}</strong>

        <hr>

        <h3>Usuário pesquisado</h3>

        Nome: ${nome}<br>
        Idade: ${idade}<br>
        Cidade: ${cidadeUsuario}<br>
        Compras: R$ ${compras}<br>
        Status: ${ativo ? "Ativo" : "Inativo"}
    `;

  idUsuario.value = "";
  cidade.value = "";
}

botao.addEventListener("click", gerarRelatorio);

//////////////////// ATIVIDADE ////////////////

const categoria = document.getElementById("categoria");
const idProduto = document.getElementById("idProduto");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    categoria: "Tecnologia",
    preco: 3500,
    estoque: 5,
    disponivel: true,
  },
  {
    id: 2,
    nome: "Mouse",
    categoria: "Tecnologia",
    preco: 100,
    estoque: 20,
    disponivel: true,
  },
  {
    id: 3,
    nome: "Teclado",
    categoria: "Tecnologia",
    preco: 250,
    estoque: 0,
    disponivel: false,
  },
  {
    id: 4,
    nome: "Cadeira",
    categoria: "Moveis",
    preco: 800,
    estoque: 8,
    disponivel: true,
  },
  {
    id: 5,
    nome: "Mesa",
    categoria: "Moveis",
    preco: 1200,
    estoque: 3,
    disponivel: true,
  },
];

function gerarRelatorio() {
  if (categoria.value === "" || idProduto.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const filtrar = produtos.filter(
    ({ categoria: categoriaDigitada, disponivel }) => {
      return categoriaDigitada === categoria.value && disponivel === true;
    },
  );

  if (filtrar.length === 0) {
    resultado.textContent = "Produto não encontrado";
    return;
  }

  const mapear = filtrar.map(({ nome, preco, estoque }) => {
    return `nome: ${nome} preço: ${preco} estoque: ${estoque}`;
  });

  const somar = filtrar.reduce((soma, { preco }) => {
    return soma + preco;
  }, 0);

  const encontrar = produtos.find(({ id }) => {
    return id === Number(idProduto.value);
  });

  if (!encontrar) {
    resultado.textContent = "Produto não encontrado";
    return;
  }

  const {
    nome,
    categoria: categoriaDigitada,
    preco,
    estoque,
    disponivel,
  } = encontrar;

  resultado.innerHTML = `<h3>produtos ativos de ${categoria.value}</h3>

        ${mapear.join("")}

        <br>

        <strong>Total de preco: R$ ${somar}</strong>

        <hr>

        <h3>Usuário pesquisado</h3>

        Nome: ${nome}<br>
        
        estoque: ${estoque}
        
        Compras: R$ ${preco}<br>
        Status: ${disponivel ? "disponivel" : "indisponivel"}
    `;

  idProduto.value = "";
  categoria.value = "";
}

botao.addEventListener("click", gerarRelatorio);

//////////////////// ATIVIDADE ////////////////

const cliente = document.getElementById("cliente");
const idPedido = document.getElementById("idPedido");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

const pedidos = [
  {
    id: 1,
    cliente: "Gustavo",
    produto: "Notebook",
    valor: 3500,
    pago: true,
  },
  {
    id: 2,
    cliente: "Lucas",
    produto: "Mouse",
    valor: 100,
    pago: true,
  },
  {
    id: 3,
    cliente: "Gustavo",
    produto: "Teclado",
    valor: 250,
    pago: false,
  },
  {
    id: 4,
    cliente: "Gustavo",
    produto: "Monitor",
    valor: 1200,
    pago: true,
  },
  {
    id: 5,
    cliente: "Carlos",
    produto: "Cadeira",
    valor: 800,
    pago: true,
  },
];

function gerarRelatorio() {
  if (cliente.value === "" || idPedido.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  const filtrar = pedidos.filter(({ cliente: clienteDigitado, pago }) => {
    return clienteDigitado === cliente.value && pago === true;
  });

  if (filtrar.length === 0) {
    resultado.textContent = "Sem pedido até o momento";
    return;
  }

  const mapear = filtrar.map(({ cliente, produto, valor }) => {
    return `cliente: ${cliente} produto: ${produto} valor: ${valor}<br>`;
  });

  const somar = filtrar.reduce((soma, { valor }) => {
    return soma + valor;
  }, 0);

  const encontrado = pedidos.find(({ id }) => {
    return id === Number(idPedido.value);
  });

  if (!encontrado) {
    resultado.textContent = "Não encontrado";
    return;
  }

  const { cliente: clienteDigitado, produto, valor, pago } = encontrado;

  resultado.innerHTML = `<h3>cliente ${cliente.value}</h3>

        ${mapear.join("")}

        <br>

        <strong>Total de preco: R$ ${somar}</strong>

        <hr>

        <h3>Usuário pesquisado</h3>

        Cliente: ${clienteDigitado}<br>
        
        produto: ${produto}
        
        preço: R$ ${valor}<br>
        Status: ${pago ? "pago" : "não pago"}
    `;

  idPedido.value = "";
  cliente.value = "";
}

botao.addEventListener("click", gerarRelatorio);
