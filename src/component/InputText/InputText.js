import React, { Component } from 'react';
import './InputText.css';

class InputText extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
        }
    }

    onFocus(event) {
        this.setState({
            active: true
        });
    }

    onBlur(event) {
        if (event.target.value === "" || event.target.value === null) {
            this.setState({
                active: false
            })
        }
    }

    onChange(event) {
        if (event.target.value !== "" || event.target.value !== null) {
            this.setState({
                active: true
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.active ? "input-text__container input-text__container__active" : "input-text__container"}>
                    <label 
                        htmlFor={this.props.label} 
                        className={!this.state.active ? "input-text__label" : "input-text__label input-text__label__active"}>
                            {this.props.label}
                            {this.props.optional ? (<span className="input-text__optional">&nbsp;-&nbsp;optional</span>) : null }
                    </label>
                    <input 
                        autoComplete="off" 
                        required 
                        name={this.props.label}
                        id={this.props.label} 
                        className="input-text__input" 
                        onChange={(e) => {this.props.onChange(e); this.onChange(e) } }
                        type={this.props.password ? "password" : "text"} 
                        onFocus={e => this.onFocus(e)} 
                        onBlur={e => this.onBlur(e)} />
                </div>
            </React.Fragment>
        )
    }

}

export default InputText;