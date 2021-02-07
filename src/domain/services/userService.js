import UserModel from '../models/userModel';
import {getUsers} from '../redux/actions/usuarioAction';
import http from "../../infrastructure/http/http";

const api = 'pasaportedigital-security/';

const newUSer = (user, callback) => {
    let userResponse = {};
    return http.post(api + "Users", user)
        .then(resp => {
            userResponse = new UserModel(resp.data);
            const response = {
                data: userResponse,
                status: resp.status,
                errorMessage: resp.status === 200 ? "" : manageErrors(resp.status)
            }
            if(callback)
                callback(resp.status);
            return response;
        });
}

const getAllUsers = (callback) => {
    //http.setUrl('');//modificar url en caso de que haya otro servicio
    let response = {};
    return http.get(api + "Users").then(resp => {
        getUsers(resp.status === 200 ? resp.data : null);
        response = {
            data: resp.data,
            status: resp.status,
            errorMessage: resp.status === 200 ? "" : manageErrors(resp.status)
        }
        if(callback)
            callback(resp.status);
        return response;
    });
}

const manageErrors = (errorCode) => {
    switch (errorCode) {
        case 404:
            return "Servicio no responde ..."
        break;
        default:
            return "Estamos trabajando para mejorar el servicio, por favor vuelve más tarde";
    }
}

export const userService = {
    getAllUsers,
    newUSer
}