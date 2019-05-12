import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoStore from '../../store/ToDos/ToDoStore';
import './Home.css';
import CategoryWrapper from '../Category/CategoryWrapper';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AddMenu from '../../component/addMenu/AddMenu';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            visible: 'all'
        }
        this.toDo = this.toDo.bind(this);
        this.createToDo = this.createToDo.bind(this);
    }

    componentDidMount() {
        this.props.getTodos(this.props.user.token);
    }

    toDo(e) {
        this.setState({
            todo: e.target.value
        });
    }

    createToDo() {
        this.props.createToDo(this.props.user.token, this.state.todo);
    }

    visibleCategory() {
        
    }

    render() {
        return (
            <React.Fragment>
            <div className="container home__container">
            <AddMenu />
                <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                {/* {this.props.todos.map(todo => 
                    (<div key={todo.id}>
                        <input type="checkbox" defaultChecked={todo.completed}></input> 
                        <p style={{display: 'inline'}}>{todo.todo}</p>
                        <button type="button" onClick={() => this.props.deleteToDo(this.props.user.token, todo.id)}>delete</button>
                    </div>)
                )}
                <InputText label="ToDo" onChange={this.toDo} />
                <button type="button" onClick={this.createToDo}>Create</button> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                <filter id="shadowed-goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                    <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                    <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                    <feBlend in2="shadow" in="goo" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
                </defs>
            </svg>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos,
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: (token) => dispatch(ToDoStore.getTodos(token)),
        createToDo: (token, todo) => dispatch(ToDoStore.createToDo(token, todo)),
        deleteToDo: (token, id) => dispatch(ToDoStore.deleteToDo(token, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);