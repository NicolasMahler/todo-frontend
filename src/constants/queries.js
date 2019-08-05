import {
    stringify
} from './utils';

// QUERIES //
export const TOP_LEVEL_TODOS = (first = null, skip = null, after = null, orderBy = "createdAt_DESC") => {
    first = stringify(first);
    skip = stringify(skip);
    after = stringify(after);
    orderBy = stringify(orderBy);
    return `query { topLevelToDos(first: ${first}, skip: ${skip}, after: ${after}, orderBy: ${orderBy}) { 
        completed,
        todo,
        id
    } }`
}

// MUTATIONS //
export const LOGIN_QUERY = (email, password) => {
    return `mutation 
        { login(email: "${email}", password: "${password}") { 
            user { 
                id, 
                email, 
                firstName, 
                lastName 
            } 
            token 
        } 
    }`
}

export const CREATE_USER = (email, password, firstName, lastName = '') => {
    return `mutation {
        createUser(data: {email: "${email}", password: "${password}", firstName: "${firstName}", lastName: "${lastName}"}) {
            user {
                id,
                email,
                firstName,
                lastName
            }
            token
        }
    }`
}

export const CREATE_TODO = (todo) => {
    return `mutation {
        createToDo(data: {todo: "${todo}"}) {
            todo,
            completed,
            id
        }
    }`
}

export const DELETE_TODO = (id) => {
    return `mutation {
        deleteToDo(id: "${id}") {
            id
        }
    }`
}

export const UPDATE_TODO = (todo) => {
    return `mutation {
    updateToDo(id: "${todo.id}", data: {
            todo: "${todo.todo}",
            completed: ${todo.completed}
        }) {
            id,
            todo,
            completed
        }
    }`

}

// FETCHES //
export const NO_TOKEN_QUERY = async (query) => {
    let response = await fetch("https://limitless-waters-16319.herokuapp.com/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query
        }),
    });

    return response;
}

export const TOKEN_QUERY = async (query, token) => {
    let response = await fetch("https://limitless-waters-16319.herokuapp.com/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            query: query
        }),
    });

    return response;
}