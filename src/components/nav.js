import React, { Fragment, useContext } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, 
    Avatar, 
    Box, 
    Button, 
    Container, 
    CssBaseline, 
    IconButton, 
    Menu, 
    MenuItem, 
    Stack, 
    Toolbar ,
    Typography,
    useScrollTrigger } from '@mui/material';
import Logo from '../assets/title.png'

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 20,
        target: window ? window() : undefined,
    });
    
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: { backgroundColor: `rgba(0, 0, 255, ${trigger ? '.3' : '0'})` }
    });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Nav(props) {
  return (
    <Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="fixed">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}>
                    {['Story', 'Roadmap', 'Team'].map((page) => (
                        <Button
                            key={page}
                            onClick={() => {}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => {}}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={() => <div />}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={false}
                        onClose={() => {}}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {['1', '2'].map((page) => (
                        <MenuItem key={page} onClick={() => {}}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <div
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                    <img src={Logo} style={{ height: 30, objectFit: 'contain' }}/>
                </div>

                <Box sx={{ justifyContent: 'flex-end', display: 'flex', flex: 1 }}>
                    <Button style={{ backgroundColor: 'yellow' }}>
                        Mint
                    </Button>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}

export default Nav;