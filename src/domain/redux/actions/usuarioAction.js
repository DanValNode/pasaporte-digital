import {GET_USERS_ERROR, GET_USERS_SUCCESS} from "../types";

export function getUsers(users) {
    return (dispatch) => {
        if (users)
            dispatch(getUsersSuccess(users));
        else
            dispatch(getUsersError());
    }
}

const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});

const getUsersError = () => ({
    type: GET_USERS_ERROR,
    payload: true,
});