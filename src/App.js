// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Link, List, ListItem, Drawer, ListItemText, useMediaQuery, IconButton } from '@mui/material';
import Home from './components/Home/Home';
import AcercaDe from './components/AcercaDe/AcerdaDe';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import Productos from './components/Productos/Productos';
import MenuIcon from '@mui/icons-material/Menu';

import './App.css';

const App = () => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar className='contenedor'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='logo'>
            <Link href="/" color="inherit" underline="none">
              AG Accesorios Gómez
            </Link>
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <List component="nav" aria-labelledby="main navigation" className='menu-nav' sx={{ display: { xs: 'none !important', sm: 'block !important' } }}>
            <ListItem>
              <Link href="/" color="inherit" underline="none">
                Inicio
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about" color="inherit" underline="none">
                Acerca de
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/servicios" color="inherit" underline="none">
                Servicios
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/productos" color="inherit" underline="none">
                Productos
              </Link>
            </ListItem>
          </List>
        </Toolbar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button>
              <Link href="/" color="inherit" underline="none">
                Inicio
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/about" color="inherit" underline="none">
                Acerca de
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/servicios" color="inherit" underline="none">
                Servicios
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/productos" color="inherit" underline="none">
                Productos
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
