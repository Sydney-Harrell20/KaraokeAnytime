import React, { useContext , useEffect} from "react";
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Container, Card } from 'react-bootstrap';

import Notifications from "./Notifications.jsx";
import Options from "./Options.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

import { SocketContext } from '../../SocketContext.js';

const VideoDisplay = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
        useEffect(() => {
            if (myVideo.current) {
                myVideo.current.srcObject = stream;
                
            }
        }, []);

    return (
        <Container>
                
            <VideoPlayer style={{ margin: '0px', minWidth: "300px", minHeight: "200px", width: '30vw', height: '20vh' }} />
            
                <Options style={{  margin: '0px' }}>
                <Notifications />
                </Options>
         </Container>
    );
}
export default VideoDisplay;