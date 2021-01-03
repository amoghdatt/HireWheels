import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';

function SignUp(){

    let [userInfo, setUserInfo] = useState({});
    let [keysLength, setKeysLength] = useState(0);
    let [userCreateStatus, setUserCreateStatus] = useState({userCreated:false, userExists:false});

    const updateStates = ()=>{
        
        let currentKeysLength = Object.keys(userInfo).length;
        
        setUserInfo(userInfo)
        setKeysLength(currentKeysLength);  
    }

    const handleChange = (event)=>{
        let {id, value} = event.target
        
        if(value==="" && userInfo[id]) delete userInfo[id];  
        else userInfo[id] = value;

        updateStates();    
    };

    const handleSubmit = ()=>{
        delete userInfo.confirmPassword;
    
        
        fetch('http://localhost:8086/hirewheels/v1/users', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body :JSON.stringify({...userInfo})
            }).then(res=>{
                if(res.status ===  409) userCreateStatus.userExists = true;
                else userCreateStatus.userCreated = true;
                setUserCreateStatus({...userCreateStatus});
            }).catch(err=>{console.log(err)})

        
    }

    return (
        <div className="card">
                <div className="card-body">
                    <Form>
                    <Form.Group>
                        <Form.Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control size="sm" id="firstName" onChange={handleChange} placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control size="sm" id="firstName" onChange={handleChange} placeholder="Last name" />
                        </Col>
                        </Form.Row>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" size="sm" id="email" onChange={handleChange}/>
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control type="number" placeholder="Enter your 10 digit mobile number" size="sm" id="mobileNumber" onChange={handleChange}/>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" id="password" onChange={handleChange}/>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" id="confirmPassword" onChange={handleChange}/>   
                    </Form.Group>
                        <Button className = "signInBtn" variant="primary" type="submit" size="sm" block disabled={keysLength < 5} onClick={handleSubmit}>
                            Sign Up
                        </Button>
                    </Form>
                    {userCreateStatus.userExists? <Alert variant="danger">User already exists. Sign In</Alert>: 
                    userCreateStatus.userCreated? <Alert variant="success">User successfully created. Log In here</Alert>:null}
                </div>
        </div>
    )
}

export default SignUp;