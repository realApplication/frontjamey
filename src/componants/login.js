import React from 'react';
import {When} from 'react-if';
import { LoginContext } from './context.js';

export default class Login extends React.Component {
    
    static contextType = LoginContext;

    constructor(props) {
        super(props);
        this.state = {
            userame: '',
            email:'',
            password: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = e => {
        e.preventDefault();
        // use login context to perform login operation
        this.context.login(this.state.username, this.state.password);

    }
    handleSubmitSignup = e => {
        e.preventDefault();
        // use login context to perform login operation
        this.context.signup(this.state.email,this.state.username, this.state.password);
        console.log("this.state.email",this.state.email);

    }

    render() {
        return (
            <>
                <When condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit}>
                            <input placeholder="username" type="text" name="username" onChange={this.handleChange}/>
                            <input placeholder="password" type="password" name="password" onChange={this.handleChange}/>
                            <button type="submit">Login</button>
                        </form>
                </When>
                <When condition={this.context.loggedIn}>
                    <div>{this.context.user.email}</div>
                    <button onClick={this.context.logout}>Logout</button>
                </When>
                <h1>signup</h1>
            
                    <form onSubmit={this.handleSubmitSignup}>
                           <input placeholder="email" type="text" name="email" onChange={this.handleChange}/>
                            <input placeholder="username" type="text" name="username" onChange={this.handleChange}/>
                            <input placeholder="password" type="password" name="password" onChange={this.handleChange}/>
                            <button type="submit">Login</button>
                        </form>
             
                <When condition={this.context.loggedIn}>
                    <div>{this.context.user.email}</div>
                    <button onClick={this.context.logout}>Logout</button>
                </When>
            </>
            
        )
    }
}