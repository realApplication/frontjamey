import React, { useState, useEffect } from 'react';
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
    const {pickedPage , setPickedPage}=useState(false)
    const [loggedInSuper, setLoggedInSuper] = useState(false);
    const [user, setUser] = useState({ email: '' });
    const [pickedArr, setPickedArr] = useState([]);
    const [idd, setIdd] = useState(0);
    const [loginbtn, setLoginbtn] = useState(true);
    const [approval, setApproval] = useState([]);
    const [superVisor, setSuperVisor] = useState(false);
    const [status, setStatus] = React.useState(false);

    const [bookname,setBookname ]=useState([]);;
    // token will be saved in the cookies after login

    const login = async (email, password) => { // from login form
        console.log('sam------------------------------', email, password);
        try {
            const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${email}:${password}`)}`)
            console.log(response.body);
            let x = response.body.id
            setIdd(x)
            localStorage.setItem("id", JSON.stringify(x));
            validateMyToken(response.body.token);
        } catch (err) {
            //  console.log('soooooooooooooooooooory');
        }
    }
    const loginSupervisor = async (email, password) => { // from login form
        // console.log('loginSupervisor------------------------------',email,password);
        console.log('email ------------>', email, 'password------------->', password);
        try {
            const response = await superagent.post(`${API}/v1/signin`).set('authorization', `Basic ${base64.encode(`${email}:${password}`)}`)
            console.log('login supervisor---->', response.body.token);
            validateMyTokenloginSupervisor(response.body.token);
            //    console.log('on try');
        } catch (err) {
            console.log('sooooooologinSupervisorooooooooooooory',err.message);
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
            let x = response.body.student.id;
            setIdd(x);
            localStorage.setItem("id", JSON.stringify(x));
            validateMyTokenSignup(response.body.student.token);
            console.log(response.body.student.token);
        } catch (err) {

        }
    }


    // initial render
    useEffect(() => {
        const myTokenCookie = cookie.load('token'); 
        console.log("myTokenCookie: ", myTokenCookie)
        validateMyToken(myTokenCookie);
    }, []);

    const validateMyToken = (token) => {
        if (token) {
            const user = jwt.decode(token);

            setLoginState(true, user);
            cookie.save('token', token);

        } else {
            setLoginState(false, {});
        }
    }
    const validateMyTokenSignup = (token) => {
        if (token) {
            const user = jwt.decode(token);
            setLoginState(true, user);
            cookie.save('token', token);

        } else {
            setLoginState(false, {});
        }
    }

    const validateMyTokenloginSupervisor = (token) => {
        console.log("token//React supervisor" , token)
        if (token) {
            const user = jwt.decode(token);
            setLoginStateSuper(true, user);
            cookie.save('tokensuper', token);


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
        localStorage.clear();
    }
    const logoutSupervisor = () => {
        setLoggedInSuper(false);
        setUser({});
        cookie.remove('token');
        localStorage.clear();
    }

    // =============================> pickedcourses

    const getPickedCourses = async () => {

        if (loggedIn) {
            let idk = JSON.parse(localStorage.getItem('id'))
            const token = cookie.load("token");
            let response = await superagent
                .get(`${API}/pickedbook/${idk}`)
                .set("authorization", `Bearer ${token}`);
              
                    let dataArr = await response.body
                    setPickedArr(dataArr);
                    localStorage.setItem("data", JSON.stringify(dataArr));
        
              
           
        }
    }
    const postPickedCourses = async (id) => {

        if (loggedIn) {

            const token = cookie.load("token");
            let response = await superagent
                .post(`${API}/pickedbook/${id}`)
                .set("authorization", `Bearer ${token}`);
                if(response.body=="all ready have it  !!!!!!!!!!!!!!!"){
                 
                    alert("all ready have it")
                }
             
            console.log('response ----------------------->', response.body);
           

        }
    }

    let handleAskHelp = async () => {
        const token = cookie.load("token");
        let response = await superagent.get(`${API}/askHelp`).set("authorization", `Bearer ${token}`);
        console.log("respones//hadle ask help", response.body)
        return response.body;
    }

    let volunteer = async (book) => {
        console.log('boooooooook',book);
        const token = cookie.load("token");
        let response = await superagent.get(`${API}/volunteer`).set("authorization", `Bearer ${token}`);
        console.log("respones//volunteer", response.body)
        setSuperVisor(false)
        localStorage.setItem('bookname', JSON.stringify(book));
        console.log('bookname---------->',bookname);

        return response.body;


    }
    let setPicked_Page=()=>{
        setPickedPage(true)
    }

    const state = {
        loggedIn: loggedIn,
        login: login,
        logout: logout,
        signup: signup,
        user: user,
        loginSupervisor: loginSupervisor,
        loggedInSuper: loggedInSuper,
        logoutSupervisor: logoutSupervisor,
        getPickedCourses: getPickedCourses,
        pickedArr: pickedArr,
        idd: idd,
        postPickedCourses: postPickedCourses,
        loginbtn: loginbtn,
        setLoginbtn: setLoginbtn,
        handleAskHelp: handleAskHelp,
        volunteer:volunteer,
        approval:approval,
        setApproval:setApproval,
        bookname:bookname,
        pickedPage:pickedPage,
        setPicked_Page:setPicked_Page,
        setStatus:setStatus,
        status:status


    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}



