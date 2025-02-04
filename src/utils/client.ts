import axios from 'axios';

const BACKED_URL = import.meta.env.VITE_BACKEND_SERVER_URL || 'http://localhost:3000';

const client = axios.create({ baseURL: `${BACKED_URL}`, withCredentials: true });

client.interceptors.response.use((res) => res);
export default client;
