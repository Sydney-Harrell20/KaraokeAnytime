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
    
    const AUTH_TOKEN = "BQB17Gz8qezYgNZCQeEehB51eWLUnh1FINZB6mxuouyYR0TVYLf_wfxJZ8QmhApOlU8DbHORbEW4jyW5CZVDxcxuJ-8fkp-B-ZioSk8De0uyp8AWXJhK_RU0O_wQzW-wEMbvSICvA3CbRLQIpCUj0ZeTM1RPqG7NNoU1MboTGae7f0JWhDWUKy8zbt_CenhtqRgM25lGaRY1pw";
    const getOAuthToken = useCallback(callback => callback(AUTH_TOKEN), []);

    const MyPlayer = () => {
        const webPlaybackSDKReady = useWebPlaybackSDKReady();

        if (!webPlaybackSDKReady) return <div>Loading...</div>;

        return <div>Spotify App is ready!</div>;
    };

    
    
    
        return (
            <WebPlaybackSDK
                deviceName="My awesome Spotify app"
                getOAuthToken={getOAuthToken}
                volume={0.5}>
                <MyPlayer />
                
                <SongTitle />
            </WebPlaybackSDK>
        );
    };

export default Playback;