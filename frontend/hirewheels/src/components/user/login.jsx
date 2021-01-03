import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Login({handleLoginStatus}){
    
    let [loginInfo, setLoginInfo] = useState({email:"", password:""})
    let [isUserExists, setUserExists] = useState(true);

    const handleChange = (event) => {
        let {id, value} = event.target;
        loginInfo[id] = value;
        setLoginInfo({...loginInfo});
        
    }

    const handleLogin = () =>{

        fetch('http://localhost:8086/hirewheels/v1/users/access-token', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body :JSON.stringify({...loginInfo})
            }).then(res=>{
               
                if(res.status ===  400) {
                    setUserExists(false);
                }else {
                    res.json()
                    .then(responseBody=>{
                        handleLoginStatus(responseBody);
                    }).catch(err=>console.log(err));
                    
                }
            }).catch(err=>{console.log(err)})
    }

    return (
            <div className="card">
                <div className="card-body">
                <Form>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" size="sm" id="email" onChange={handleChange} required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                    <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" size="sm" id="password" onChange={handleChange} required/>
                </Form.Group>
                </Form>
                    <Button className="signInBtn" variant="primary" type="submit" size="sm" block onClick={handleLogin}>
                        Sign In
                    </Button>
                    <div className="container center forgot-password">
                        <p><a href="#forgotPassword">Forgot Password</a></p>
                        <p>Don't have an account?<a href="#signup">Sign Up</a></p>
                    </div>
                
                </div>
            </div>
        
    )
}

export default Login;