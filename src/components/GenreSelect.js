import React, { useContext, useEffect } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import Playback from "./SpotifyAPI/Playback"
import VideoDisplay from "./VideoChat/VideoDisplay"
import VideoPlayer from "./VideoChat/VideoPlayer"
import { SocketContext } from '../SocketContext.js';

function GenreSelect() {
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();
    const options = [
            {"key":"J-pop", "display":"J-pop"},
            {"key":"pop", "display":"Pop"},
            {"key":"softRock", "display":"Soft Rock"}
    ];

    const { name, callAccepted, joinRoom, me, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    let genre = options[0]["key"];

    function onHome() {
        navigate("/");
    }

    function onKaraoke() {
       // joinRoom(genre , me);
        navigate("/KaraokeRoom/" + genre);
    }

    function onOptionChangeHandler(event) {
        console.log(event.target.value)
        genre = event.target.value;
    }

    return (<Container className="d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
        <Card className="text-center d-flex align-items-center justify-content-center" style={{ minWidth: "300px", minHeight: "200px", width: '30vw', height: '20vh' }}>
            <Card.Title className="text-center mt-3">Select genres!</Card.Title>
            <Card.Body className="text-center">
                <Card.Body >
                    <select className = "mb-4"name="genres" id="genres" onChange={onOptionChangeHandler}>
                        {options.map((option, index) => {
                            return <option key={option["key"]} value={option["key"]}> {option["display"]} </option>
                        })}
                    </select>
                    <br />
                </Card.Body>
                <Button className="secondary btn-secondary " onClick={onHome}>Home</Button>
                <Button className="primary btn-primary " onClick={onKaraoke}>Join Karaoke Room</Button>
            </Card.Body>
        </Card>
    </Container>);
}
export default GenreSelect;