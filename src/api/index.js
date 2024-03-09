import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

const instance2 = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getBooks = () => instance.get('/books');
const getCart = () => instance.get('/cartItems');
const addToCart = (payload) => instance.post('cartItems', payload);
const editCartItem = (payload) => instance.put(`/cartItems/${payload.id}`, payload);
const deleteCartItem = (id) => instance.delete(`/cartItems/${id}`);
const getPosts = () => instance2.get('/posts')

const api = {
    getBooks,
    getCart,
    addToCart,
    editCartItem,
    deleteCartItem,
};

const api2 = {
    getPosts,
};

export { api, api2 }