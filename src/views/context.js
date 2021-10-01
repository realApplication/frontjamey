import React, {useState, useEffect} from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// 1- create context object
export const LoginContext = React.createContext();
const API = 'http://localhost:7896';
// 2- create a component that will have the provider
 export default function LoginProvider(props) {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({email: ''});

    // token will be saved in the cookies after login

    const login = async (email, password) => { // from login form
     console.log('sam------------------------------',email,password);
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${email}:${password}`)}`)
            console.log(response.body);
            validateMyToken(response.body.token);
        } catch(err) {
         console.log('soooooooooooooooooooory');
        }
    }

    
    const signup = async (email,userName, password) => { // from login form
        let obj ={
            email : email,
            userName:userName,
            password:password
        }
        console.log("obj",obj);
        try {
            const response = await superagent.post(`${API}/signup`,obj)
            console.log('resssssssssssssss',response.body);
            validateMyTokenSignup(response.body.student.token);
            console.log(response.body.student.token);
        } catch(err) {

        }
    }


    // initial render
    useEffect(() => {
        const myTokenCookie = cookie.load('token'); // read the cookie from browser
        console.log("myTokenCookie: ", myTokenCookie)
        console.log("initial render here !!");
        validateMyToken(myTokenCookie);
    }, []);

    const validateMyToken = (token)=> {
        if (token) {
            const user = jwt.decode(token); 
            console.log("user >>>>>>>>> ", user);
       
          
    
            setLoginState(true, user);
            cookie.save('token', token); 
          
        } else {
            setLoginState(false, {});
        }
    }
    const validateMyTokenSignup = (token)=> {
        if (token) {
            const user = jwt.decode(token); 
            console.log("user >>>>>>>>> signupppppppp ", user);
       
          
    
            setLoginState(true, user);
            cookie.save('token', token); 
          
        } else {
            setLoginState(false, {});
        }
    }

    const setLoginState = (isLoggedIn, user) => {
        setLoggedIn(isLoggedIn);
        setUser(user);
    }

    const logout = () => {
        // update loggedIn = false
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }

    const state = {
        loggedIn : loggedIn,
        login: login,
        logout: logout,
        signup:signup,
        user: user,
       
    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
 }