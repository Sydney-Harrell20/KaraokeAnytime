import React from 'react';
import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Nav, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useUserAuth } from '../contexts/AuthContext'



function Signup() {
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    
    const { signup } = useUserAuth();
    const navigate = useNavigate();


   const handleSubmit = async (e) => {
        e.preventDefault()
       try {
            setError("");
            setLoading(true);
            await signup(email, password);
            navigate("/home");
            /*createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert(user.displayName + "  a")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });*/
            
        
        }
        catch { setError("Failed to Log in.") };
       
        setLoading(false);
    }

    

    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "70vh" }}        >
            <Card className="w-50 mt-3">
                <Card.Title className="text-center mt-3">Create an Account</Card.Title>
                <Card.Body className="text-left">
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="w-100 text-left mt-3" onSubmit={handleSubmit}>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required maxLength={50} ></Form.Control>
                        </Form.Group>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" onChange={(e) => setUsername(e.target.value)} required maxLength={20} ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required maxLength={30} minLength={10}></Form.Control>
                            <Form.Text id="passwordHelpBlock" muted>Password must be 10 characters long.</Form.Text>
                        </Form.Group>

                        <Button className="btn primary-btn mt-1" type="submit" disabled={loading}> {loading ? 'Loading' : 'Signup'} </Button>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Signup;