import React from 'react';

import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import ElevationScroll from './ElevationScroll/ElevationScroll';

function Header() {
    const pages = 
    [{ label: 'About', href: '#about'}, 
    { label: 'Portfolio', href: '#portfolio'}, 
    { label: 'Resume', href: '#resume'}, 
    { label: 'Contact', href: 'mailto:olha@demchyna.com?subject=From+portfolio'}];

const [anchorNav, setAnchorNav] = React.useState(null);
const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
};
const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

    return (
        <ElevationScroll>
            <AppBar position="fixed" color="inherit">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                            <Menu 
                                id="menu-appbar"
                                anchorEl={anchorNav}
                                open={Boolean(anchorNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block' } }}
                                >
                                {pages.map((page) => (
                                    <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                                    <Button textalign="center" href={page.href}>{page.label}</Button>
                                    </MenuItem>
                                ))}
                            </Menu>
                    </Box>
                        <Typography variant="h6"
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        }}>
                            Olha Demchyna
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button href="#about">
                            About
                        </Button>
                    
                        <Button href='#portfolio'>
                            Portfolio
                        </Button>

                        <Button href='https://drive.google.com/file/d/1aH0pDpDHmV9tAeoVKWUcNvl2xNfcGXHs/view?usp=sharing' target='_blank'>
                            Resume
                        </Button>

                        <Button href="mailto:olha@demchyna.com?subject=From+portfolio">
                            Contact
                        </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
}

export default Header;