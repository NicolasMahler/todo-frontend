import * as actionTypes from './action';

export function login(user) {
    return { type: actionTypes.LOGIN, user }
}
export function createUser(user) {
    return { type: actionTypes.CREATE_USER, user }
}
export function userIsLoading() {
    return { type: actionTypes.USER_LOADING }
}
export function userDoneLoading() {
    return { type: actionTypes.USER_DONE_LOADING }
}
export function userErrorLoading(errorMessage) {
    return { type: actionTypes.USER_ERROR_LOADIONG, errorMessage }
}