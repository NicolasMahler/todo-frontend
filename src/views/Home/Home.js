import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoStore from '../../store/ToDos/ToDoStore';
import './Home.css';
import CreateToDo from './components/CreateToDo/CreateToDo';
import ToDoList from '../../component/ToDoList/ToDoList';

class Home extends Component {
    componentDidMount() {
        this.props.getTodos(localStorage.getItem('token'));
    }

    render() {
        return (
            <div className="container home__container">
                <CreateToDo />
                <ToDoList />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTodos: (token) => dispatch(ToDoStore.getTodos(token))
    }
}

export default connect(null, mapDispatchToProps)(Home);