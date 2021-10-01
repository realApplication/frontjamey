import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.js';

export default class Auth extends React.Component {
    static contextType = LoginContext;
    
    render() {
        const isLoggedIn = this.context.loggedIn;
        console.log("isLoggedIn >>>", isLoggedIn);
        console.log("user:", this.context.user);
       
        return (
            <When condition={isLoggedIn}>
                {this.props.children}
            </When>
        )
    }
}