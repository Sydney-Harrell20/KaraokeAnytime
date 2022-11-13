import React, { useContext, useEffect, useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom"
import Playback from "./SpotifyAPI/Playback"
import VideoDisplay from "./VideoChat/VideoDisplay"



function Genre() {
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();
    const { genre } = useParams();
    const [post, setPost] = useState("");


//https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=af34e23922361c5da5c4b1168b6dc540
    const baseURL = "https://dog.ceo/api/breeds/image/random";


    function onHome() {
        navigate("/");
    }

    return (
        <Container className="d-flex align-items-center justify-content-center mt-5" >
            <Card className="text-center d-flex align-items-center justify-content-center mt-10" >
            
                <Button className="secondary btn-secondary " style={{width: '40vw'}} onClick={onHome}>Home</Button>
                <script type="text/javascript" src="http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP"></script>
                <Playback />
                <VideoDisplay genre={genre} />     
            </Card>
        
    </Container>
        );
}
export default Genre;