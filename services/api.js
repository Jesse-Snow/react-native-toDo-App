import axios from 'axios';
import { HOST_IP } from '@env';

function setupApiClient(){

    const api = axios.create({
        baseURL:`http://${HOST_IP}:3333`,
    })


    // Intecepta response, e faz algo antes de trazer a response
    api.interceptors.response.use(response => { 
        return response;
    },(error) => {
        alert(error);
        return Promise.reject(error);
    })

    return api;
}

export const api = setupApiClient();
