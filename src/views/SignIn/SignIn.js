import React, { Component } from 'react';
import InputText from '../../component/InputText/InputText';
import Spinner from '../../component/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';

import './SignIn.css';

import UserStore from '../../store/User/UserStore';

const transitionStyles = {
    entering: { opacity: '0' },
    entered: { opacity: '1' },
    exiting: { opacity: '0' },
    exited: { opacity: '0' },
}

class SignIn extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            clickAllowed: false,
            createAccount: false,
            display: true,
        }
    }

    onEmail = (event) => {
        if (this.state.password.length < 7 || event.target.value === null || event.target.value === '') {
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
        if (this.state.email === '' || this.state.email === null || event.target.value.length < 7) {
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

    submitLogin = (event) => {
        if (this.state.clickAllowed && event.key === "Enter") {
            this.props.login(this.state.email, this.state.password);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoading) {
            this.setState({
                display: false
            });
        } else if (nextProps.isError) {
            this.setState({
                display: true
            });
        }
    }

    render() {
        return (
            <div className="global__wrapper">
                <div className="container">
                    {this.props.user.token ? <Redirect push to="/home" /> : null}
                    {this.state.createAccount ? <Redirect push to="/create-an-account" /> : null }
                    <Transition in={this.props.isLoading} timeout={0} appear={true}>
                        { state => (
                            <Spinner transitionStyles={transitionStyles} state={state} />
                        )}
                    </Transition>
                    <div className="row">
                        <Transition in={this.state.display} timeout={0} appear={true}>
                        {state => (
                            <form id="sign-in-form" className="container global__card sign-in__card" style={{
                                    ...transitionStyles[state]
                                }}>
                                    <div className="container">
                                        <section className="row sign-in__center sign-in__title--container">
                                            <h3 className={this.props.isError ? "sign-in__title error" : "sign-in__title"}>To Do</h3>
                                        </section>
                                        {this.props.isError ? (
                                            <section className="row">
                                                <p className="sign-in__error-message">{this.props.errorMessage}</p>
                                            </section>) : 
                                        null}
                                        <section className="row">
                                            <div className="sign-in__center">
                                                <InputText label="email" onKeyDown={this.submitLogin} onChange={this.onEmail} />
                                            </div>
                                        </section>
                                        <section className="row">
                                            <div className="sign-in__center">
                                                <InputText label="password" onKeyDown={this.submitLogin} onChange={this.onPassWord} password/>
                                            </div>
                                        </section>
                                        <section className="row">
                                        {this.state.clickAllowed ? (
                                            <button className="sign-in__button" type="button" onClick={() => this.props.login(this.state.email, this.state.password)}>Sign In</button>
                                        ) : (
                                            <button className="sign-in__button" type="button" disabled>Sign In</button>
                                        )}
                                        </section>
                                    </div>
                                    <section className="sign-in__create-account-container">
                                        <button onClick={() => {
                                            this.setState({
                                                display: false
                                            }, () => {
                                                setTimeout(() => {
                                                    this.setState({
                                                        createAccount: true
                                                    });
                                                }, 500);
                                            });
                                        }} type="button" className="sign-in__create-account global__hoverButton--secondary">create an account</button>
                                    </section>
                                </form>)}           
                        </Transition>
                    </div>
                </div>
            </div>
        )
    }
};

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
        login: (email, password) => dispatch(UserStore.login(email,password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);