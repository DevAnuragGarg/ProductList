import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const fetchProducts = async (limit: number = 10, skip: number = 0) => {
  const response = await axios.get(
    `${API_URL}/products?limit=${limit}&skip=${skip}`,
  );
  return response.data;
};
