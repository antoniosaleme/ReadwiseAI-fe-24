import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
// const API_BASE_URL = "http://192.168.0.216:3000";

export const api = axios.create({
  baseURL: API_BASE_URL,
});
