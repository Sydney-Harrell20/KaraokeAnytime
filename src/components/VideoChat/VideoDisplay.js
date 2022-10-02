import React, { useContext , useEffect} from "react";
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import Notifications from "./Notifications.jsx";
import Options from "./Options.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

import { SocketContext } from '../../SocketContext.js';

const VideoDisplay = () => {

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
        useEffect(() => {
            if (myVideo.current) {
                myVideo.current.srcObject = stream;
                console.log("idk");
            }
        }, []);

    return (
        <Box sx={{ flexGrow: 1 }} align="center">
            <div style={{ justifyContent: "center" }}>
                <VideoPlayer style={{ justifyContent: "center"}} />
                <Options style={{  margin: '3px' }}>
                    <Notifications />
                </Options>
            </div>
        </Box>
    );
}
export default VideoDisplay;