import axios from 'axios';
import ClientAxios from "./clientAxios";

const client = new ClientAxios();

const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '45afa9553e6846a18016187235b8cbd3'
}

const get = (action) => {
    const URL = client.getBaseUrl() + action;
    return axios.get(URL, {headers})
        .then((response) => {
            return response;
        }).catch(error => {
            console.log(error);
            return error.response;
        });
}

const post = (action, params) => {
    return axios.post(client.getBaseUrl() + action, params, {headers})
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
            console.log("headers...");
            console.log(error.response.headers);
            return error.response;
        });
}

const put = (action, params) => {
    return axios.put(client.getBaseUrl() + action, params, {headers})
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
            return error.response;
        });
}

const _delete = (action) => {
    return axios.delete(client.getBaseUrl() + action, {headers})
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
            return error.response;
        });
}

const patch = (action, params) => {
    return axios.patch( client.getBaseUrl() + action, params, {headers} )
        .then(response => {

        }).catch(error => {
            console.log(error);
            return error.response;
        })
}

const http = {
    get,
    post,
    put,
    delete: _delete,
    patch,
    setUrl: client.setBaseUrl
};

export default http;