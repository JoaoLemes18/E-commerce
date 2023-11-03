interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  discount: number;
  average_rating: number;
  description: string;
  imageUrls: string[];
  imageUrl: string;
}

export const fetchProductData = async (): Promise<Product> => {
  try {
    const response = await fetch("https://json-rose-five.vercel.app/products");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Erro ao buscar os dados da API");
    }
  } catch (error) {
    throw error;
  }
};
