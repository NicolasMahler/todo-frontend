import * as functions from './function';
import * as queries from '../../constants/queries';

export default class ToDoStore {
    
    static getTodos(token) {
        return dispatch => {
            dispatch(functions.todoLoading());
            queries.TOKEN_QUERY(queries.TOP_LEVEL_TODOS(), token)
            .then(response => response.json())
            .then(response => {
                if (!response.data.errors) {
                    dispatch(functions.todoDoneLoading());
                    dispatch(functions.todos(response.data.topLevelToDos));
                } else {
                    dispatch(functions.todoErrorLoading(response.data.errors[0].message))
                }
            })
            .catch(error => {
                dispatch(functions.todoErrorLoading('Oops! Something went wrong'));
            })
        }
    }
    static createToDo(token, todo) {
        return dispatch => {
            dispatch(functions.createLoading());
            queries.TOKEN_QUERY(queries.CREATE_TODO(todo), token)
            .then(response => response.json())
            .then(response => {
                if (!response.data.errors) {
                    dispatch(functions.createDoneLoading());
                    dispatch(functions.createToDo(response.data.createToDo));
                } else {
                    dispatch(functions.createErrorLoading(response.data.errors[0].message));
                }
            })
            .catch(error => {
                dispatch(functions.createErrorLoading('Oops! Something went Wrong'))
            });
        }
    }
    static deleteToDo(token, id) {

        return dispatch => {
            queries.TOKEN_QUERY(queries.DELETE_TODO(id), token)
            .then(response => response.json())
            .then(response => {
                if (!response.errors) {
                    dispatch(functions.deleteToDo(response.data.deleteToDo.id));
                }
            })
        }
    }

    static updateToDo(token, todo) {
        return dispatch => {
            queries.TOKEN_QUERY(queries.UPDATE_TODO(todo), token)
            .then(response => response.json())
            .then(response => {
                if (!response.data.errors) {
                    dispatch(functions.updateToDo(response.data.updateToDo));
                } else {
                    console.log({...todo, complete: !todo.complete})
                    dispatch(functions.updateToDo({...todo, completed: !todo.complete}));
                }
            })
            .catch(error => {
                console.log(error);
                console.log({...todo, complete: !todo.complete})
               dispatch(functions.updateToDo({...todo, completed: !todo.complete}));
            })
        }
    }
}