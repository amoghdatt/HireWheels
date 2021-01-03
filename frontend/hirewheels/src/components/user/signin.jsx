import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import React , { useState } from 'react';
import Login from './login';
import SignUp from './signup';

function SignIn({show, close:handleClose, handleLoginStatus}){

    let [isLoginSelected, setLoginSelected] = useState(true);
    let [isSignUpSelected, setSignUpSelected] = useState(false);

    const handleLogin= ()=>{
        setLoginSelected(true);
        setSignUpSelected(false);
    }

    const handleSignUp = ()=>{
        setSignUpSelected(true);
        setLoginSelected(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Nav fill variant="tabs" defaultActiveKey="link-2">
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={handleLogin}>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={handleSignUp}>Sign up</Nav.Link>
                </Nav.Item>
                </Nav>
                    {isLoginSelected?<Login handleLoginStatus = {handleLoginStatus} />:null}
                    {isSignUpSelected?<SignUp/>:null}
                </Modal.Body>

                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SignIn;