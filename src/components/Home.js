import React from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"



function Home() {
    const {user , logout} = useUserAuth();
    const navigate = useNavigate();

   async function  onLogout() {
        await logout();
       navigate("/");
    }

    function onSing() {
        navigate("/genreSelect");
    }

    return (<Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}        >
        <Card className="w-50 mt-3">
            <Card.Title className="text-center mt-3">Home</Card.Title>
            <Card.Body className="text-center">
                <Card.Text>Hello, {user && user.email}</Card.Text>

                <Button className="secondary btn-secondary " onClick={onSing}>Sing!</Button>
                <Button className= "secondary btn-secondary "onClick={onLogout}>Logout</Button>
            </Card.Body>
        </Card>
    </Container>);
}
export default Home;