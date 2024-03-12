// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Box, Link, List, ListItem, ListItemText } from '@mui/material';
import Home from './components/Home/Home';
import AcercaDe from './components/AcercaDe/AcerdaDe';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import Productos from './components/Productos/Productos';
import './App.css';


const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar className='contenedor'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='logo'>
            <Link href="/" color="inherit" underline="none">
              AG Accesorios Gómez
            </Link>
          </Typography>
          <List component="nav" aria-labelledby="main navigation" className='menu-nav'>
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
