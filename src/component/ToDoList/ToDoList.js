import React from 'react';
import ToDoContainer from './ToDo/ToDoContainer';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { Transition } from 'react-transition-group';

const transitionStyles = {
    entering: { opacity: '0' },
    entered: { opacity: '1' },
    exiting: { opacity: '0' },
    exited: { opacity: '0' },
}


const ToDoList = () => {

    const todos = useSelector(state => state.todoReducer.todos);
    const test = todos.length === 0;

    return (
        <div className="todo__listWrapper">
            {
                todos.length 
                ? todos.map(todo => (<ToDoContainer key={todo.id} todo={todo} />))
                : <p></p>
            }
            <Transition in={test} timeout={0} appear={true}>
                { state => (
                    <Spinner transitionStyles={transitionStyles} state={state} />
                )}
            </Transition>
        </div>
    );
}

export default ToDoList;