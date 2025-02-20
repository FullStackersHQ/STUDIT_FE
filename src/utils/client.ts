import axios from 'axios';

const BACKEND_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.VITE_SERVER_URL;

const client = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

client.interceptors.response.use((res) => res);
export default client;
