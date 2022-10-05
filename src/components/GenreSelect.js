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

    let genre = options[0]["key"];

    function onHome() {
        navigate("/home");
    }

    function onKaraoke() {
        navigate("/KaraokeRoom/" + genre);
    }

    function onOptionChangeHandler(event) {
        console.log(event.target.value)
        genre = event.target.value;
    }

    return (<Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}        >
        <Card className="w-50 mt-3">
            <Card.Title className="text-center mt-3">Select genres!</Card.Title>
            <Card.Body className="text-center">
                <Card.Body className="mt-3">
                    <select name="genres" id="genres" onChange={onOptionChangeHandler}>
                        {options.map((option, index) => {
                            return <option key={option["key"]} value={option["key"]}>
                                {option["display"]}
                            </option>
                        })}
                    </select>
                    <br />
                </Card.Body>
                <Button className="secondary btn-secondary " onClick={onHome}>Home</Button>
                <Button className="secondary btn-secondary " onClick={onKaraoke}>Join Karaoke Room</Button>
            </Card.Body>
        </Card>
    </Container>);
}
export default GenreSelect;