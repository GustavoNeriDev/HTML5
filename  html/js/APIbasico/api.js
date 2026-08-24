const idUsuario = document.getElementById("idUsuario");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

async function buscarUsuario() {
  if (idUsuario.value === "") {
    resultado.textContent = "Digite um ID";
    return;
  }
  ////////CONVERTENDO PARA NUMERO /////
  const id = Number(idUsuario.value);

  ////////REQUISIÇÃO DO API SE FAZ COM O COMANDO FETCH E AWAIT
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  //////////TRANFORMANDO EM JSON
  const user = await result.json();

  //////DESTRUCTURING/////

  const {
    name,
    username,
    email,
    address: { city },
  } = user;

  resultado.innerHTML = `
    <h2>Usuário encontrado</h2>

    Nome: ${name}<br>
    Usuário: ${username}<br>
    Email: ${email}<br>
    Cidade: ${city}
`;
}

botao.addEventListener("click", buscarUsuario);

/////ATIVIDADE //////

const idUsuario = document.getElementById("idUsuario");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

async function buscarUsuario() {
  if (idUsuario.value === "") {
    resultado.textContent = "Digite o ID";
    return;
  }

  try {
    const id = Number(idUsuario.value);

    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!result.ok) {
      resultado.textContent = "Usuario não encontrado";
      return;
    }

    const usuario = await result.json();

    const {
      name,
      username,
      email,
      address: { city },
    } = usuario;

    resultado.innerHTML = `
    <h2>Usuário encontrado</h2>

    Nome: ${name}<br>
    Usuário: ${username}<br>
    Email: ${email}<br>
    Cidade: ${city}
`;
  } catch (erro) {
    resultado.textContent = "Erro";
  }
}

botao.addEventListener("click", buscarUsuario);

////////////ATIVIDADE /////////

const cidade = document.getElementById("cidade");
const idUsuario = document.getElementById("idUsuario");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

async function gerarRelatorio() {
  if (cidade.value === "" || idUsuario.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  try {
    const id = Number(idUsuario.value);

    const buscar = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!buscar.ok) {
      resultado.textContent = "Usuario não encontrado";
      return;
    }

    const user = await buscar.json();

    const filtrar = user.filter(({ address }) => {
      return address.city === cidade.value;
    });

    if (filtrar.length === 0) {
      resultado.textContent = "Não encontrado";
      return;
    }

    const mapear = filtrar.map(({ name, username, email }) => {
      return `nome: ${name} usuario ${username} email: ${email}`;
    });

    const somar = filtrar.reduce((soma, { name }) => {
      return soma + name.length;
    });

    const procurarUser = user.find(({ id }) => {
      return id === Number(idUsuario.value);
    });

    if (!procurarUser) {
      resultado.textContent = "Usuario não encontrado";
    }

    const {
      id,
      name,
      username,
      email,
      address: { city: cidadeUsuario },
    } = procurarUser;

    resultado.innerHTML = `<h2>Usuários de ${cidade.value}</h2>

            ${mapear.join("")}

            <strong>
                Total de caracteres dos nomes: ${somar}
            </strong>

            <hr>

            <h2>Usuário pesquisado</h2>

            ID: ${id}<br>
            Nome: ${name}<br>
            Usuário: ${username}<br>
            Email: ${email}<br>
            Cidade: ${cidadeUsuario}
        `;
  } catch (erro) {
    resultado.textContent = "Erro ao buscar dados";
  }
}

botao.addEventListener("click", gerarRelatorio);

//////ATIVIDADE/////

const categoria = document.getElementById("categoria");
const idProduto = document.getElementById("idProduto");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

async function gerarRelatorio() {
  if (categoria.value === "" || idProduto.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }
  try {
    const id = Number(idProduto.value);
    const buscar = await fetch("https://fakestoreapi.com/products");

    if (!buscar.ok) {
      resultado.textContent = "Não encontrado";
      return;
    }

    const user = await buscar.json();

    const filtrar = user.filter(({ category }) => {
      return category === categoria.value;
    });

    if (filtrar.length === 0) {
      resultado.textContent = "Nenhum produto encontrado nessa categoria";
      return;
    }

    const text = filtrar.map(({ title, price, rating: { rate } }) => {
      return `Produto: ${title}<br>
    Preço: ${price}<br>
    Nota: ${rate}<br><br>`;
    });
    const valores = filtrar.reduce((soma, { price }) => {
      return soma + price;
    });

    const enconstrarId = user.find(({ id }) => {
      return id === Number(idProduto.value);

      if (!enconstrarId) {
        resultado.textContent = "Produto não encontrado";
        return;
      }
    });

    const {
      id,
      title,
      price,
      category,
      rating: { rate },
    } = enconstrarId;

    resultado.innerHTML = `<h2>categorias ${categoria.value}</h2>

            ${text.join("")}

            <strong>
                Total de Produtos: ${valores}
            </strong>

            <hr>

            <h2>Produto pesquisado</h2>

            ID: ${id}<br>
            Produtos: ${title}<br>
            Preço: ${price}<br>
            categoria do produto: ${category}<br>
            Nota: ${rate}
        `;
  } catch (erro) {
    resultado.textContent = "Erro";
  }
}
botao.addEventListener("click", gerarRelatorio);

////////////ATIVIDADE//////////

const categoria = document.getElementById("categoria");
const idProduto = document.getElementById("idProduto");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

async function gerarRelatorio() {
  if (categoria.value === "" || idProduto.value === "") {
    resultado.textContent = "Preencha todos os campos";
    return;
  }

  try {
    const id = Number(idProduto);
    const buscarProduto = await fetch("https://fakestoreapi.com/products");

    if (!buscarProduto.ok) {
      resultado.textContent = "não encontrado";
      return;
    }

    const produto = await buscarProduto.json();

    const filtrar = buscarProduto.filter(({ category }) => {
      return category === categoria.value;
    });

    if (filtrar.length === 0) {
      resultado.textContent = "Não encontrado";
      return;
    }

    const mapear = filtrar.map(({ title, price, rating: { rate, count } }) => {
      return `Produto: ${title}<br>
        Preço: ${price}<br>
        Nota: ${rate}<br>
        Avaliação: ${count}`;
    });

    const calculo = filtrar.reduce((soma, { price }) => {
      return soma + price;
    }, 0);

    const totalAvaliacoes = filtrar.reduce((soma, { rating: { count } }) => {
      return soma + count;
    }, 0);

    const enconstrarId = produto.find(({ id }) => {
      return id === Number(idProduto.value);
    });

    if (!encontrarId) {
      resultado.textContent = "Produto não encontrado";
      return;
    }

    const {
      id,
      price,
      title,
      category,
      rating: { rate, count },
    } = enconstrarId;

    resultado.innerHTML = `<h2>categorias ${category.value}</h2>

            ${mapear.join("")}

            <strong>
                Total de Produtos: ${calculo.toFixed(2)}
                Total de avaliações: ${totalAvaliacoes}
            </strong>

            <hr>

            <h2>Produto pesquisado</h2>

            ID: ${id}<br>
            Produtos: ${title}<br>
            Preço: ${price}<br>
            categoria do produto: ${category}<br>
            Nota: ${rate}
            avaliações: ${count}
        `;
  } catch (error) {
    resultado.textContent = "Erro";
  }
}

botao.addEventListener("click", gerarRelatorio);
