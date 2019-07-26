import React, {useEffect} from 'react';
import ToDoContainer from './ToDo/ToDoContainer';
import { connect } from 'react-redux';
import ToDoStore from '../../store/ToDos/ToDoStore';
import { TransitionGroup } from 'react-transition-group';

const ToDoList = ({getTodos, todos}) => {
    
    useEffect(() => {
        getTodos(localStorage.getItem('token'));
    }, []);

    return (
        <TransitionGroup>
            {todos.map(todo => (<ToDoContainer key={todo.id} todo={todo} />))}
        </TransitionGroup>
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