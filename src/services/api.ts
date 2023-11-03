import axios from "axios";

const api = axios.create({
  baseURL: "https://json-rose-five.vercel.app/products",
});

export default api;
