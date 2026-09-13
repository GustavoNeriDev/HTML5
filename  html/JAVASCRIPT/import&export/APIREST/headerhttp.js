const API_URL = "https://fakestoreapi.com/products";

export async function criarProduto(produto) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    body: JSON.stringify(produto),
  });

  if (!response.ok) {
    throw new Error("erro");
  }

  return response.json();
}
