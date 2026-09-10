const API_URL = "https://fakestoreapi.com/products";

export async function buscarProduto(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("erro");
  }

  return response.json();
}

//********************************************************** QUERY E PATH JUNTOS ******************************************************** */

const API_URL = "https://fakestoreapi.com/products";

export async function buscarProdutoPorCategoria(id, categoria) {
  const response = await fetch(`${API_URL}/${id}?category=${categoria}`);

  if (!response.ok) {
    throw new Error("erro");
  }
  return response.json();
}
