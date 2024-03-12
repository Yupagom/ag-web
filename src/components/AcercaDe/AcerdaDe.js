import React from 'react';
import { Box, Typography } from '@mui/material';

const AcercaDe = () => {
  return (
    <Box display="flex" alignItems="center" mt={4} className='seccion' >
      <Box flex="1">
        <img src="https://i.pinimg.com/736x/73/a2/b3/73a2b3b4cd310e596ee7bfb2d944031e.jpg" alt="Acerca de nosotros" height="480" />
      </Box>
      <Box flex="1">
        <Typography variant="h2">Acerca de Nosotros</Typography>
        <Typography variant="body1">
          Deja que nosotros nos encarguemos de tus viajes, somos un grupo especializado en organizar tus maletas de
          viajes de acuerdo al destino escogido, contamos con un excelente servicio y nada quedara fuera de tu
          equipaje, lo mejor es que tampoco llevaras útiles innecesarios.
        </Typography>
      </Box>
    </Box>
  );
}

export default AcercaDe;
