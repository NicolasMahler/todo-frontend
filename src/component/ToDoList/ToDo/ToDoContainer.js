import React from 'react';
import ToDo from './ToDo';
import ToDoStore from '../../../store/ToDos/ToDoStore';
import { connect } from 'react-redux';

const ToDoContainer = ({todo, key}) => {

    function onChange(event) {
        console.log(event)
    }

    return (
        <React.Fragment>
            <ToDo key={key} todo={todo} onChange={onChange} />
        </React.Fragment>
    )

};


const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveToDo: (todo) => dispatch(ToDoStore.updateTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);