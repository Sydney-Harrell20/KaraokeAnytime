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
        <Container>
        <Grid container style={{justifyContent: 'center', margin: '5px'}}>
            {
                stream && (
                    <Card>
                            <video style={{display: "flex", justifyContent: 'center', maxHeight: '500px', maxWidth: "600px" }} playsInline muted ref={myVideo} autoPlay />
                    </Card>
                )
            }
            { callAccepted && !callEnded && (
                <Paper >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>Name</Typography>
                        <video playsInline ref={userVideo} autoPlay/>
                    </Grid>
                </Paper>
            )}
            </Grid>
            </Container>
    );
}

export default VideoPlayer