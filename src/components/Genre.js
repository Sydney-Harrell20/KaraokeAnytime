import React, { useContext, useEffect } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import Playback from "./SpotifyAPI/Playback"
import VideoDisplay from "./VideoChat/VideoDisplay"
import VideoPlayer from "./VideoChat/VideoPlayer"
import { SocketContext } from '../SocketContext.js';

function Genre() {
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();

    function onHome() {
        navigate("/home");
    }

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    useEffect(() => {
        if (myVideo.current) {
            myVideo.current.srcObject = stream;
            console.log("idk");
        }
    }, []);

    return (<Container className="d-flex align-items-center justify-content-center"
        >
        <Card className="w-50 mt-3" style={{ maxWidth: "700px" }}>
            <Card.Title className="text-center mt-3"></Card.Title>
            <Card.Body className="text-center">
                
                
                    <Playback />
                    <VideoDisplay style={{ justifyContent: "center" }} />
                 
                
                
            </Card.Body>
            <Button className="secondary btn-secondary " onClick={onHome}>Home</Button>
        </Card>
    </Container>);
}
export default Genre;