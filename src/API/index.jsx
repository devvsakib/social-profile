import axios from 'axios';

const api = axios.create({
  baseURL: 'https://socialprofile.onrender.com/'
});

export default api;