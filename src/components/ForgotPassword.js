import React from 'react';
import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Nav, NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useUserAuth } from '../contexts/AuthContext'
import { useEffect } from 'react';

function ForgotPassword() {

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [error, setError] = useState();
    const [notif, setNotif] = useState();
    const [loading, setLoading] = useState();
    const [sent, setSent] = useState();
    const { forgotpassword } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            setError("");
            setLoading(true);
            
            await forgotpassword(email);
            setSent(true);
 



        }
        catch (err) { setError(err.message) };

        setLoading(false);
    }

    const handleResend = async (e) => {
        e.preventDefault()
        try {

            setError("");
            setLoading(true);


            await forgotpassword(email);
            setSent(true);
            setNotif("Email Sent.");

        }
        catch (err) { setError(err.message) };

        setLoading(false);
       
        window.setTimeout(() => { setNotif("") }, 3000);
            
    }

    return <>
    
        {sent ?
            (<Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "70vh" }}        >
                
                <Card className="w-50 text-center mt-3">
                    {notif && <Alert variant="success">{notif}</Alert>}
                    <Card.Body>
                        <Card.Title className="text-center">Forgot Password</Card.Title>
                        {error && <Alert variant="danger">{error}</Alert>}
                        
                        <Card.Text className="text-center">We should have just sent you an email to recover your password. If you can't find it, check your spam folder.</Card.Text>
                        
                        <Button className="primary mt-1 me-5" href="./" type="submit" >Back to Login</Button>
                        <Button variant="secondary" className="mt-1" onClick={handleResend}disabled={loading}> {loading ? 'Loading' : 'Send Another Email'} </Button>
                        
                    </Card.Body>
                    

                </Card>
            </Container>)
        :
            (<Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "70vh" }}        >
                <Card className="w-50 text-left mt-3">
                    <Card.Body>
                        <Card.Title className="text-center">Forgot Password</Card.Title>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Card.Text className="text-center">Provide the email you use to login below, and we will send you an email that will allow you to reset your password.</Card.Text>
                        <Form className="w-100 text-left mt-3" onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required maxLength={30} ></Form.Control>
                            </Form.Group>
                            <Button className="btn primary-btn mt-1"  type="submit" disabled={loading}> {loading ? 'Loading' : 'Send Recovery Email'} </Button>
                        </Form>

                    </Card.Body>
                    <div className="text-center">Need an Account?</div>
                    <Card.Link href="./Signup" className="text-center mb-2">Sign up!</Card.Link>

                </Card>
            </Container>)
        }
    </>
    }

export default ForgotPassword;