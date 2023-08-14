import axios, { AxiosInstance } from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: POKEAPI_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
