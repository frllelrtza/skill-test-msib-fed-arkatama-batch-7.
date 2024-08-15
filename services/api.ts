// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pmb.alkautsar.ponpes.id/api/cms',
});

export default api;