import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-deploy-server.herokuapp.com/',
});

export default api;