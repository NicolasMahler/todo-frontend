import React, { Component } from 'react';
import './CreateAccount.css';
import InputText from '../../component/InputText/InputText';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import UserStore from '../../store/User/UserStore';

const transitionStyles = {
    entering: { opacity: '0' },
    entered: { opacity: '1' },
    exiting: { opacity: '0' },
    exited: { opacity: '0' },
}

class CreateAccount extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            clickAllowed: false,
            display: true,
            login: false,
        }
        this.callCreateUser = this.callCreateUser.bind(this);
    }

    onEmail = (event) => {
        if (this.state.password.length < 7 
            || this.state.firstName === ''
            || event.target.value === null
            || event.target.value === '') {
            this.setState({
                email: event.target.value,
                clickAllowed: false
            });
        } else {
            this.setState({
                email: event.target.value,
                clickAllowed: true
            });
        }
    }

    onPassWord = (event) => {
        if (this.state.username === '' 
        || this.state.firstName === ''
        || event.target.value.length < 7
        || event.target.value === null) {
            this.setState({
                password: event.target.value,
                clickAllowed: false
            });
        } else {
            this.setState({
                password: event.target.value,
                clickAllowed: true
            })
        }
    }

    onFirstName = (event) => {
        if (event.target.value === '' 
        || event.target.value === null
        || this.state.password.length < 7
        || this.state.email === '') {
            this.setState({ 
                firstName: event.target.value,
                clickAllowed: false
            });
        } else {
            this.setState({
                firstName: event.target.value,
                clickAllowed: true
            })
        } 
    }
    
    onLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    callCreateUser() {
        this.props.createUser(this.state.email, this.state.password, this.state.firstName, this.state.lastName ? this.state.lastName : null);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                {this.props.user.token ? <Redirect push to="/home" /> : null}
                {this.state.login ? <Redirect push to="/sign-in" /> : null }
                <Transition in={this.state.display} timeout={300} appear={true}>
                    {state => (
                    <form id="createAnAccount" className="container global__card create-account__card" style={{
                                ...transitionStyles[state]
                            }}>
                        <div className="container">
                            <section className="row">
                                <h3 className="create-account__title">Create An Account</h3>
                            </section>
                            {this.state.error ? (
                                <section className="row">
                                    <p className="create-account__error-message">{this.state.errorMessage}</p>
                                </section>) : 
                            null}
                            <section className="row">
                                <div className="create-account__center global__flexContainer">
                                    <div className="create-account__inputTextContainer">
                                        <InputText label="Email" onChange={this.onEmail} />
                                    </div>
                                    <div className="create-account__inputTextContainer">
                                        <InputText label="Password" onChange={this.onPassWord} password />
                                    </div>
                                    <div className="create-account__inputTextContainer">
                                        <InputText label="First&nbsp;Name" onChange={this.onFirstName} />
                                    </div>
                                    <div className="create-account__inputTextContainer">
                                        <InputText label="Last&nbsp;Name" onChange={this.onLastName} optional />
                                    </div>
                                </div>
                            </section>
                            <section className="row">
                            {this.state.clickAllowed ? (
                                <button className="create-account__button" type="button" onClick={this.callCreateUser}>Create Account</button>
                            ) : (
                                <button className="create-account__button" type="button" disabled>Create Account</button>
                            )}
                            </section>
                            <section className="create-account__sign-in-container">
                                <button onClick={() => {
                                            this.setState({
                                                display: false
                                            }, () => {
                                                setTimeout(() => {
                                                    this.setState({
                                                        login: true
                                                    });
                                                }, 500);
                                            });
                                        }} type="button" className="create-account__sign-in global__hoverButton--secondary">Sign In</button>
                            </section>
                        </div>
                    </form>)}
                    </Transition>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        isLoading: state.userReducer.userIsLoading,
        isError: state.userReducer.userErrorLoading,
        errorMessage: state.userReducer.userErrorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: (email, password, firstName, lastName = '') => dispatch(UserStore.createUser(email, password, firstName, lastName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);