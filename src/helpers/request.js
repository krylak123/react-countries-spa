import axios from 'axios';

const request = axios.create({
  baseURL: 'https://restcountries.com/v2',
});

export default request;
