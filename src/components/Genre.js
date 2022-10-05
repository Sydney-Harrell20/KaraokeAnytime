import React, { useContext, useEffect, useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import Playback from "./SpotifyAPI/Playback"
import VideoDisplay from "./VideoChat/VideoDisplay"
import VideoPlayer from "./VideoChat/VideoPlayer"
import { SocketContext } from '../SocketContext.js';
import axios from 'axios';



function Genre() {
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();
    const [post, setPost] = useState("");


//https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=af34e23922361c5da5c4b1168b6dc540
    const baseURL = "https://dog.ceo/api/breeds/image/random";

    function onHome() {
        navigate("/home");
    }

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    useEffect(() => {
        if (myVideo.current) {
            myVideo.current.srcObject = stream;
            console.log("idk");
        }

        axios.get(baseURL).then((response) => {
            setPost(response.data.message);
        });
    }, []);

    let lyrics = post

    
  

    return (<Container className="d-flex align-items-center justify-content-center"
        >
        <Card className="w-50 mt-3" style={{ maxWidth: "700px" }}>
            <Card.Title className="text-center mt-3"></Card.Title>
            <Card.Body className="text-center">
                
                
                    <Playback />
                <img style={{maxWidth: "700px", maxHeight: "400px"}} src={post}/>
                <script type="text/javascript" src="http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP"></script>
                    <VideoDisplay style={{ justifyContent: "center" }} />
                 
                
                
            </Card.Body>
            <Button className="secondary btn-secondary " onClick={onHome}>Home</Button>
        </Card>
    </Container>);
}
export default Genre;