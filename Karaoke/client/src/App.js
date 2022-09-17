import React from 'react';
import {AppBar} from '@mui/material';
import {Box} from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import {IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';

import {makeStyles} from "@mui/styles";


import Notifications from "./components/Notifications.jsx";
import Options from "./components/Options.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";

const App = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{background: '#000000'}}>
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <Menu />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <div align="center">
                          Karaoke Bar
                      </div>
                  </Typography>
                  <Button color="inherit">Login</Button>
              </Toolbar>
          </AppBar>
          <div align="center">
              <VideoPlayer />
              <Options>
                  <Notifications />
              </Options>
          </div>
      </Box>


  );
}
export default App;