import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import base64 from 'base-64';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// 1- create context object
export const LoginContext = React.createContext();
const API = 'http://localhost:3001';
// 2- create a component that will have the provider
export default function LoginProvider(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({ email: '' });
    const [pickedArr, setpickedArr] = useState({ pickedArr: [] });
    const [idd, setidd] = useState({ idd:''});
    // token will be saved in the cookies after login

    const login = async (email, password) => { // from login form

        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${email}:${password}`)}`)
            console.log(response.body);
            console.log('ressss signin id' ,response.body.id);
            let x =response.body.id
            setidd(x)
            validateMyToken(response.body.token);
       
            console.log("idddddddddddddddd",idd);
        } catch (err) {

        }
    }


    const signup = async (email, userName, password) => { // from login form
        let obj = {
            email: email,
            userName: userName,
            password: password
        }
        console.log("obj", obj);
        try {
            const response = await superagent.post(`${API}/signup`, obj)
            console.log('resssssssssssssss', response.body);
            validateMyTokenSignup(response.body.student.token);
            setidd(response.body.id)
            console.log("signupboddddddddddy",response.body);
        } catch (err) {

        }
    }

    // =============================> pickedcourses
// let dataArr =[];
    const getPickedCourses = async () => {
    console.log("testt id",idd);
        if (loggedIn) {
            const token = cookie.load("token");
            let response = await superagent
                .get(`http://localhost:3001/pickedbook/${idd}`)
                .set("authorization", `Bearer ${token}`);
            console.log('response11111111111', response.body);
            let dataArr= response.body
             console.log("dataaArr11111111",dataArr);
            setpickedArr(dataArr);
            console.log('pickedArrpickedArr1111111111111',pickedArr);
        }
    }



    // initial render
    useEffect(() => {
        const myTokenCookie = cookie.load('token'); // read the cookie from browser
        console.log("myTokenCookie: ", myTokenCookie)
        console.log("initial render here !!");
        validateMyToken(myTokenCookie);
    }, []);

    const validateMyToken = (token) => {
        if (token) {
            const user = jwt.decode(token);
            console.log("user >>>>>>>>> ", user);



            setLoginState(true, user);
            cookie.save('token', token);

        } else {
            setLoginState(false, {});
        }
    }
    const validateMyTokenSignup = (token) => {
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
        loggedIn: loggedIn,
        login: login,
        logout: logout,
        signup: signup,
        user: user,
        getPickedCourses: getPickedCourses,
        pickedArr:pickedArr,
        idd:idd


    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}