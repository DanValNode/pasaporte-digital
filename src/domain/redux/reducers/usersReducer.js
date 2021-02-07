import {
    ADD_USER,
    BEGIN_GET_USERS,
    DOWNLOAD_USERS_SUCCESS,
    DOWNLOAD_USERS_ERROR,
    GET_USER_DELETE,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    GET_USER_EDIT,
    USER_EDIT_SUCCESS,
    EDIT_USER_ERROR,
    USER_REGISTER,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR, ADD_USER_SUCCESS, ADD_USER_ERROR
} from "../types";


const initialState = {
    users: [],
    error: null,
    loading: false,
    userDelete: null,
    userEdit: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_REGISTER:
        case BEGIN_GET_USERS:
        case ADD_USER:
            return {
                ...state,
                loading: action.payload,
            };
        case ADD_USER_SUCCESS:
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload],
            };
        case ADD_USER_ERROR:
        case DOWNLOAD_USERS_ERROR:
        case DELETE_USER_ERROR:
        case EDIT_USER_ERROR:
        case USER_REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case DOWNLOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload,
            };
        case GET_USER_DELETE:
            return {
                ...state,
                userDelete: action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== state. userDelete),
                userDelete: null
            }
        case GET_USER_EDIT:
            return {
                ...state,
                userEdit: action.payload
            }
        case USER_EDIT_SUCCESS:
            return {
                ...state,
                userEdit:null,
                users: state.users.map(user =>
                    user.id === action.payload.id ? user = action.payload : user
                )
            }
        default:
            return state;
    }
}