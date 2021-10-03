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
    const [loggedInSuper, setLoggedInSuper] = useState(false);
    const [user, setUser] = useState({email: ''});

    // token will be saved in the cookies after login

    const login = async (email, password) => { // from login form
     console.log('sam------------------------------',email,password);
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${email}:${password}`)}`)
            console.log(response.body);
            validateMyToken(response.body.token);
        } catch(err) {
        //  console.log('soooooooooooooooooooory');
        }
    }
    const loginSupervisor = async (email, password) => { // from login form
        // console.log('loginSupervisor------------------------------',email,password);
           try {
               const response = await superagent.post(`${API}/v1/signin`).set('authorization', `Basic ${base64.encode(`${email}:${password}`)}`)
            //    console.log('login supervisor---->',response.body.supervisor.token);
               validateMyTokenloginSupervisor(response.body.supervisor.token);
            //    console.log('on try');
           } catch(err) {
            console.log('sooooooologinSupervisorooooooooooooory');
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
            validateMyTokenSignup(response.body.student.token);
            console.log(response.body.student.token);
        } catch(err) {

        }
    }


    // initial render
    useEffect(() => {
        const myTokenCookie = cookie.load('token'); // read the cookie from browser
        console.log("myTokenCookie: ", myTokenCookie)
        // console.log("initial render here !!");
        validateMyToken(myTokenCookie);
    }, []);

    const validateMyToken = (token)=> {
        if (token) {
            const user = jwt.decode(token); 
           
            setLoginState(true, user);
            cookie.save('token', token); 
          
        } else {
            setLoginState(false, {});
        }
    }
    const validateMyTokenSignup = (token)=> {
        if (token) {
            const user = jwt.decode(token); 
            setLoginState(true, user);
            cookie.save('token', token); 
          
        } else {
            setLoginState(false, {});
        }
    }

    const validateMyTokenloginSupervisor = (token)=> {
        if (token) {
            const user = jwt.decode(token); 
            setLoginStateSuper(true, user);
            cookie.save('token', token); 
          
        } else {
            setLoginStateSuper(false, {});
        }
    }
    const setLoginStateSuper = (isLoggedIn, user) => {
        setLoggedInSuper(isLoggedIn);
        setUser(user);
    }
    const setLoginState = (isLoggedIn, user) => {
        setLoggedIn(isLoggedIn);
        setUser(user);
    }

    const logout = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }
    const logoutSupervisor = () => {
        setLoggedInSuper(false);
        setUser({});
        cookie.remove('token');
    }

    const state = {
        loggedIn : loggedIn,
        login: login,
        logout: logout,
        signup:signup,
        user: user,
        loginSupervisor:loginSupervisor,
        loggedInSuper:loggedInSuper,
        logoutSupervisor:logoutSupervisor
       
    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
 }



