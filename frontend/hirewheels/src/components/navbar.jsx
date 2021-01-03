import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';

import React, { useState } from 'react';
import SignIn from './user/signin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './user/dashboard';

function NavBar({handleUserInfo}){

        let userInfoTemplate = {
            _id:undefined,
            firstName:undefined,
            lastName:undefined,
            email:undefined,
            mobileNumber:undefined,
            password:undefined,
            _v:undefined,
            token:undefined,
            admin:undefined
        }


        let [show, setShow] = useState(false);
        let [isLoggedIn, setLogin] = useState(false);
        let [userInfo, setUserInfo] = useState({...userInfoTemplate});
        const handleShow = ()=>setShow(true);
        const handleClose = ()=>setShow(false);

        const handleLogin = (receivedUserInfo) =>{
            setUserInfo({...receivedUserInfo});
            handleUserInfo(userInfo);
            setLogin(true);
            setShow(false);
        }
        
        return(
            <>
                <Navbar className="nav-bar" variant="dark">
                    <Navbar.Brand><a href="#home" style={{textDecoration:'none',color:'inherit'}}><FontAwesomeIcon icon={faCar}/>HireWheels</a></Navbar.Brand>
                    { isLoggedIn? <Dashboard user= {userInfo}/>: <button className="btn btn-success" onClick={handleShow}>Sign In</button>}
                </Navbar>
                <SignIn show = {show} close= {handleClose} handleLoginStatus={handleLogin}/>
            </>
        );
}

export default NavBar;