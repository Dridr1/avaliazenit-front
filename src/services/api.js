import axios from "axios";

const api_url = "https://avaliazenit-back.herokuapp.com";

const createConfig = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

export const signUp = async (data) => await axios.post(`${api_url}/new-evaluator`, data);

export const signIn = async (data) => await axios.post(`${api_url}/login`, data);

export const evaluate = async (data, token) => await axios.post(`${api_url}/new-evaluation`, data, createConfig(token));

export const candidates = async (token) => await axios.get(`${api_url}/candidates`, createConfig(token));