import axios from 'axios';

const url = "http://localhost:8080/"

const api = axios.create({url});

export const getItem = config => api.get('api/items/', config);
export const sortItem = status => api.get(`api/items/sort/${status}`);
export const createItem = (name, tag, status, config) => api.post('api/items/create/', {name, tag, status}, config);
export const editItem = (name, tag, status, config) => api.post('api/items/edit/', {name, tag, status}, config);
export const deleteItem = config => api.delete('api/items/delete/', config);

const apis = {getItem, sortItem, createItem, editItem, deleteItem, }

export default apis