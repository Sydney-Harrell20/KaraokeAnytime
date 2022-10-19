import React from "react";
import { useCallback } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { WebPlaybackSDK, useWebPlaybackSDKReady } from "react-spotify-web-playback-sdk";
import SongTitle from './SongTitle'
import PauseResumeButton from './PauseResumeButton'


function Playback() {
    const { user, logout } = useUserAuth();
    const navigate = useNavigate();
    
    const AUTH_TOKEN = ""; //<------------------------------- PUT SPOTIFY API TOKEN HERE. IF YOU NEED TO GENERATE ONE, USE THIS LINK: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    const getOAuthToken = useCallback(callback => callback(AUTH_TOKEN), []);

    const MyPlayer = () => {
        const webPlaybackSDKReady = useWebPlaybackSDKReady();

        if (!webPlaybackSDKReady) return <>Loading...</>;

        return <>Spotify App is ready!</>;
    };

    
    
    
    return (
        <Card bg="dark" text="white" style={{width:'40vw'}}>
            <WebPlaybackSDK
                deviceName="My awesome Spotify app"
                getOAuthToken={getOAuthToken}
                volume={0.5}>
                <MyPlayer />
                
                <SongTitle />
            </WebPlaybackSDK>
            </Card>
        );
    };

export default Playback;