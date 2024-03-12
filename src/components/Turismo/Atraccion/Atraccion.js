import { Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";


const Atraccion = ({ name, image, location, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={location}
      />
      <CardMedia
        component={'img'}
        height={'195'}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color={'text.secondary'}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default Atraccion;