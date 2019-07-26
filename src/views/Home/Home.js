import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoStore from '../../store/ToDos/ToDoStore';
import './Home.css';
import InputText from '../../component/InputText/InputText';
import ToDoList from '../../component/ToDoList/ToDoList';

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

    toDo(e) {
        this.setState({
            todo: e.target.value
        });
    }

    createToDo() {
        this.props.createToDo(this.props.user.token, this.state.todo);
    }

    render() {
        return (
            <React.Fragment>
            <div className="container home__container">
                <ToDoList />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <InputText label="ToDo" onChange={this.toDo} />
                <button type="button" onClick={this.createToDo}>Create</button>
                </div>
            </div>
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
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