import React, {useContext, useEffect} from "react";
import {Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';
import { SocketContext } from '../../SocketContext.js';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
}));

const VideoPlayer = () => {

    // const classes = useStyles();

    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    
    return (
        <Container className="d-flex align-items-center justify-content-center" >
           <Card>
        
            {
                stream && (
                    
                        <video style={{ display: "flex", justifyContent: 'center', maxHeight: '600px', maxWidth: "700px", height: '60vh', width: '70vw' }} playsInline muted ref={myVideo} autoPlay />
                        
                        
                )
                }
                
            { callAccepted && !callEnded && (
                    
                    <video style={{ display: "flex", justifyContent: 'center', maxHeight: '600px', maxWidth: "700px", height: '60vh', width: '70vw' }} playsInline ref={userVideo} autoPlay />
                    
                )}
                </Card>
         </Container>
    );
}

export default VideoPlayer