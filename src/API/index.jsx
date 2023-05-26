import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://socialprofile.onrender.com/'
  baseURL: 'http://localhost:5000/'
});

export default api;