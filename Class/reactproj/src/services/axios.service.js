import axios from "axios";

export const getProductData = async() => {
        const response = await axios('https://fakestoreapi.com/products');
        return response.data; 
        // console.log(response.data);
}

export const getProductById = async(id) => {
        const response = await axios(`https://fakestoreapi.com/products/${id}`);
        return response.data;
}