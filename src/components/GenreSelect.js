import React from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import Playback from "./SpotifyAPI/Playback"


function GenreSelect() {
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();

    function onHome() {
        navigate("/home");
    }

    return (<Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}        >
        <Card className="w-50 mt-3">
            <Card.Title className="text-center mt-3">Select genres!</Card.Title>
            <Card.Body className="text-center">
                <Card.Body>
                    <Playback />
                </Card.Body>
                <Button className="secondary btn-secondary " onClick={onHome}>Home</Button>
            </Card.Body>
        </Card>
    </Container>);
}
export default GenreSelect;