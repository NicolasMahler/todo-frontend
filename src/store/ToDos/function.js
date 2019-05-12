import * as actions from './action';

export function todoLoading() {
    return { type: actions.TODO_LOADING }
}
export function todoDoneLoading() {
    return { type: actions.TODO_DONE_LOADING }
}
export function todoErrorLoading(errorMessage) {
    return { type: actions.TODO_ERROR_LOADING, errorMessage }
}
export function todos(todos) {
    return { type: actions.TODOS, todos }
}

export function createLoading() {
    return { type: actions.CREATE_LOADING }
}
export function createDoneLoading() {
    return { type: actions.CREATE_DONE_LOADING }
}
export function createErrorLoading(errorMessage) {
    return { type: actions.CREATE_ERROR_LOADING, errorMessage }
}
export function createToDo(todo) {
    return { type: actions.CREATE_TODO, todo }
} 

export function deleteToDo(id) {
    return { type: actions.DELETE_TODO, id }
}