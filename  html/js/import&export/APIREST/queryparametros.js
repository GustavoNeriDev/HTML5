const API_URL = "https://fakestoreapi.com/products";

export async function buscarPorCategoria(categoria) {
  //cria e manipula os parametros URL
  const params = new URLSearchParams({
    category: categoria,
  });
  const response = await fetch(`${API_URL}?${params}`);
  if (!response.ok) {
    throw new Error("erro");
  }

  return response.json();
}
