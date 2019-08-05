import * as actions from './action';

const initState = {
    todos: [],
    loading: false,
    error: false,
    createLoading: false,
    createError: false,
    createErrorMessage: '',
    errorMessage: '',
}

export default function todoReducer(state = initState, action) {
    switch (action.type) {
        case (actions.TODO_LOADING):
            return {
                ...state,
                loading: true
            }
        case (actions.TODO_DONE_LOADING):
            return {
                ...state,
                loading: false
            }
        case (actions.TODO_ERROR_LOADING):
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.errorMessage
            }
        case (actions.TODOS):
            return {
                ...state,
                todos: action.todos
            }
        case (actions.CREATE_LOADING):
            return {
                ...state,
                createLoading: true
            }
        case (actions.CREATE_DONE_LOADING):
            return {
                ...state,
                createLoading: false
            }
        case (actions.CREATE_ERROR_LOADING):
            return {
                ...state,
                createError: false,
                createErrorMessage: action.errorMessage
            }
        case (actions.CREATE_TODO):
            let createToDos = [action.todo, ...state.todos];
            return {
                ...state,
                todos: createToDos
            }
        case (actions.DELETE_TODO):
            let deleteToDos = state.todos.filter(todo => {
                return action.id !== todo.id
            });
            return {
                ...state,
                todos: deleteToDos
            }
        case (actions.UPDATE_TODO):
            let updatedList = state.todos.map(todo => {
                if (todo.id === action.todo.id) {
                    todo.todo = action.todo.todo;
                    todo.completed = action.todo.completed;
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedList
            }
        default:
            return state;
    }
}