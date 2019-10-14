import React, {Component} from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";

class LoginForm extends Form {

    //Use refs only when you know what you're doing and you absolutely want to target the DOM directly through React.
    //Otherwise find another solution that isn't dependent on refs.
    //username= React.createRef();
    //Instead of using this ref to focus() you can also put autoFocus in the input field and it'll do the same.
    // componentDidMount(): void {
    //     this.username.current.focus();
    // }

    state = {
        data : {username: '', password: ''},
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        //Call the server, save changes and redirect user to different page.
        console.log("submitted")
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;