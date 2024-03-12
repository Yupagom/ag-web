import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

import './Productos.css';

const productos = [
  { id: 'producto-1', src1: '/producto-1-1.webp', src2: 'producto-1-2.webp', descripcion: 'Producto-1' },
  { id: 'producto-2', src1: '/producto-2-1.webp', src2: 'producto-2-2.webp', descripcion: 'Producto-2' },
  { id: 'producto-3', src1: '/producto-3-1.webp', src2: 'producto-3-2.webp', descripcion: 'Producto-3' },
  { id: 'producto-4', src1: '/producto-4-1.webp', src2: 'producto-4-2.webp', descripcion: 'Producto-4' },
]

const Productos = () => {
  return (
    <Box className="banda-productos" py={4} textAlign="center">
      <Divider />
      <Typography variant="h2">PRODUCTOS</Typography>
      <Divider />
      <Box className="lista-productos">
        {productos.map((producto) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component={'img'}
              height={'195'}
              image={producto.src1}
            />
            <CardContent>
              <Typography variant="body2" color={'text.secondary'}>
                {producto.descripcion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Productos;
