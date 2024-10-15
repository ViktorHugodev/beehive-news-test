// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.3.7:3000/api', // IP do Windows host
});

export default api;
