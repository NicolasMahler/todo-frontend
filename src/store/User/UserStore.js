import * as functions from './function';
import * as queries from '../../constants/queries';

export default class UserStore {
    static login(email, password) {
        return dispatch => {
            dispatch(functions.userIsLoading());
            queries.NO_TOKEN_QUERY(queries.LOGIN_QUERY(email, password))
            .then(response => response.json())
            .then(response => {
                if (!response.data.errors) {
                    let user = response.data.login.user;
                    user.token = response.data.login.token;
                    localStorage.setItem('token', user.token);
                    dispatch(functions.userDoneLoading());
                    dispatch(functions.login(user));
                } else {
                    dispatch(functions.userErrorLoading(response.data.errors[0].message));
                }
            })
            .catch(error => {
                console.log(error, 'login error');
                dispatch(functions.userErrorLoading('Oops! Something went wrong!'));
            });
        }
    }
    
    static createUser(email, password, firstName, lastName) {
        return dispatch => {
            dispatch(functions.userIsLoading());
            queries.NO_TOKEN_QUERY(queries.CREATE_USER(email, password, firstName, lastName))
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (!response.data.errors) {
                    let user = response.data.createUser.user;
                    user.token = response.data.createUser.token;
                    dispatch(functions.userDoneLoading());
                    dispatch(functions.createUser(user));
                } else {
                    dispatch(functions.userErrorLoading(response.data.errors[0].message));
                }
            })
            .catch(error => {
                console.log(error, 'create user error');
                dispatch(functions.userErrorLoading('Oops! Something went wrong!'));
            });
        }
    }
}