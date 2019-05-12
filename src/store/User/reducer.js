import * as actionTypes from './action';

const initState = {
    user: {},
    userIsLoading: false,
    userErrorLoading: false,
    userErrorMessage: '',
}

function userReducer(state = initState, action) {
    switch(action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.CREATE_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.USER_LOADING:
            return {
                ...state,
                userIsLoading: true
            }
        case actionTypes.USER_DONE_LOADING:
            return {
                ...state,
                userIsLoading: false
            }
        case actionTypes.USER_ERROR_LOADIONG:
            return {
                ...state,
                userIsLoading: false,
                userErrorLoading: true,
                userErrorMessage: action.errorMessage
            }
        default: 
            return {
                ...state
            }
    }
}

export default userReducer;