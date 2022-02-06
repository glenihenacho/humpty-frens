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

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
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
        <AppBar position="static">
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {['1', '2'].map((page) => (
                    <Button
                    key={page}
                    onClick={() => {}}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                    {page}
                    </Button>
                ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={() => {}} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={() => <div />}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={false}
                    onClose={() => {}}
                >
                    {['1', '2'].map((setting) => (
                    <MenuItem key={setting} onClick={() => {}}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                    ))}
                </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
}

export default Nav;