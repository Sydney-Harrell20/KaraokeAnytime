import React, {useContext, useState} from "react";
import { Button, TextField, Grid, Typography, Container, Paper} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { CopyToClipboard} from "react-copy-to-clipboard/src";
import {Assignment, Phone, PhoneDisabled, Style} from "@mui/icons-material";

import { SocketContext } from "../../SocketContext.js";

const Options = ({children}) => {

    const {me, callAccepted, name, setName,callEnded, leaveCall, callUser} = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    return (
        <Container>
            <Paper elevation={10}>
                <form noValidate autoComplete="off">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h6">
                                Account Info
                            </Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me}>
                                <Button
                                    style={{backgroundColor: '#000000'}}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    startIcon={<Assignment fontSize="large" />}>
                                    Copy your Bar ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h6">
                                Karaoke Bar info
                            </Typography>
                            <TextField label="Karaoke to Join" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullwidth />
                            {callAccepted && !callEnded ? (
                               <Button
                                   style={{backgroundColor: '#000000'}}
                                   variant="contained"
                                   color="secondary"
                                   startIcon={<PhoneDisabled fontSize="Large" />}
                                   fullWidth
                                   onClick={leaveCall}
                               >
                                   Leave Karaoke Bar
                               </Button >
                            ) : (
                                <Button
                                        style={{backgroundColor: '#000000'}}
                                        variant="contained"
                                        color="primary"
                                        startIcon={<Phone fontSize="Large" />}
                                        fullWidth
                                        onClick={() => callUser(idToCall)}
                                >
                                    Join Karaoke Bar
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
            )
}

export default Options