import axios from 'axios';

export const BASE_URL = 'https://api-cookenu.onrender.com';

export const Login = async (body) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/user/login`, body);
        return data;
    } catch (error) {
        throw error;
    }
};

export const Signup = async (body) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/user/signup`, body);
        return data;
    } catch (error) {
        throw error;
    }
};

export const AddRecipe = async (body) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/recipe`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem("cookenu.token")
                }
            }
        );
        return data;
    } catch (error) {
        throw error;
    }
};

export const ListRecipe = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/recipe/all`, {
            headers: {
                Authorization: localStorage.getItem("cookenu.token")
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

export const GetRecipe = async (id) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/recipe/${id}`, {
            headers: {
                Authorization: localStorage.getItem("cookenu.token")
            }
        });
        return [data];
    } catch (error) {
        throw error;
    }
};


export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validatePassword = password => /.{6,}/.test(password);
export const validateName = (name, length = 4) => new RegExp(`.{${length},}`).test(name);
