import React, {useState, useEffect} from 'react';
import ToDoContainer from './ToDo/ToDoContainer';
import { connect } from 'react-redux';
import ToDoStore from '../../store/ToDos/ToDoStore';

const ToDoList = ({getTodos, todos}) => {
    
    useEffect(() => {
        getTodos(localStorage.getItem('token'));
    }, []);

    return (
        <React.Fragment>
            {todos.map(todo => (<ToDoContainer key={todo.id} todo={todo} />))}
        </React.Fragment>
    );

}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: (token) => dispatch(ToDoStore.getTodos(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);