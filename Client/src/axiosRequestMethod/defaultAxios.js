import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "jwtToken";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${TOKEN}` },
  withCredentials: true,
});
