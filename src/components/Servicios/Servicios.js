import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import './Servicios.css';

const Servicios = () => {
  return (
    <Box mt={4} className='banda-productos' >
      <Typography variant="h2">Servicios</Typography>
      <List>
        <ListItem><ListItemText primary="Destinos" /></ListItem>
        <ListItem><ListItemText primary="Climas" /></ListItem>
        <ListItem><ListItemText primary="Vestuario" /></ListItem>
        <ListItem><ListItemText primary="Calzado" /></ListItem>
        <ListItem><ListItemText primary="Accesorios" /></ListItem>
        <ListItem><ListItemText primary="Transportes" /></ListItem>
        <ListItem><ListItemText primary="Idiomas" /></ListItem>
        <ListItem><ListItemText primary="Asesoria personal" /></ListItem>
        <ListItem><ListItemText primary="Acompañamiento" /></ListItem>
      </List>
    </Box>
  );
}

export default Servicios;
