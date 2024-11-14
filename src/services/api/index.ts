import axios from "axios";

async function GetAllProducts() {
  const response = await axios.get("https://api.escuelajs.co/api/v1/products");

  if (response.status !== 200) {
    throw new Error("Error al obtener los productos");
  }
  return response.data;
}

export { GetAllProducts };
