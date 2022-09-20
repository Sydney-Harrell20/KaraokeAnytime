import React from 'react';
import { useState, useRef  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Nav, NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form, Alert} from 'react-bootstrap';
import { useUserAuth } from '../contexts/AuthContext'

function Login() {
    const usernameRef = useRef();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const { login } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            setError("");
            setLoading(true);
            
            await login(email, password);
            
            navigate("/home")

        }
        catch(err){ setError(err.message) };

        setLoading(false);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "70vh" }}        >
            <Card className="w-50 text-left mt-3">
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="w-100 text-left mt-3" onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required maxLength={30} ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required maxLength={30} minLength={10}></Form.Control>
                        </Form.Group>
                        <Button className="btn primary-btn mt-1" type="submit" disabled={loading}> {loading ? 'Loading' : 'Login'} </Button>
                    </Form>
                </Card.Body>
                <div className="text-center">Need an Account?</div>
                    <Card.Link href="./Signup" className="text-center mb-2">Sign up!</Card.Link>
                
            </Card>
        </Container>
        )
}
export default Login;