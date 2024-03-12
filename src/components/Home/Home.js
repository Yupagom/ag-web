import React from 'react';
import { Box, Typography } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <Box mt={4} className='presentacion' >
      <Typography variant="h1">AG</Typography>
      <Typography variant="h2">Accesorios Gomez</Typography>
      <Typography variant="h3">Todo en estilo que necesitas para tus viajes</Typography>
    </Box>
  );
}

export default Home;
