import React from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"



function Home() {
    const {user , logout} = useUserAuth();
    const navigate = useNavigate();

   async function  onLogout() {
       logout();
       navigate("/");
    }

    function onSing() {
        navigate("/genreSelect");
    }

    return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
        <Card className="text-center d-flex align-items-center justify-content-center" style={{ minWidth: "300px", minHeight: "200px", width: '30vw', height: '20vh'}}>
            <Card.Title className="text-center mt-3">Home</Card.Title>
            <Card.Text>Hello, {user && user.email}</Card.Text>
            
            <Button className="primary btn-primary " onClick={onSing}>Sing!</Button>
            <Button className="secondary btn-secondary "  onClick={onLogout}>Logout</Button>
                
        </Card>
    </Container>);
}
export default Home;