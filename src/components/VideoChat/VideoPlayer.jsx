import React, {useContext} from "react";
import {Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
        <Grid container style={{justifyContent: 'center', margin: '5px'}}>
            {
                stream && (
                    <Paper style={{justifyContent: 'center'}}>
                        <Grid item style={{justifyContent: 'top'}} align="center">
                            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                            <video style={{display: "flex", justifyContent: 'center'}} playsInline muted ref={myVideo} autoPlay />
                        </Grid>
                    </Paper>
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
    );
}

export default VideoPlayer