import { Search } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Atraccion from "./Atraccion/Atraccion";
import axios from "axios";

import './Turismo.css';

const Turismo = () => {
  const getTouristicAttraction = () => {
    axios.get('https://api-colombia.com/api/v1/TouristicAttraction').then((resp) => {
      setTouristicAtraccions(resp.data);
    }).catch((error) => {
      setError('No se encuentra disponible la información')
      setTouristicAtraccions([]);
    });;
  };

  const searchTouristicAttraction = (text) => {
    if (text.length >= 4) {
      axios.get(`https://api-colombia.com//api/v1/TouristicAttraction/search/${text}`).then((resp) => {
        setTouristicAtraccions(resp.data);
      }).catch((error) => {
        setTouristicAtraccions([]);
        setError('No se encuentra informaciön con ese criterio de busqueda')
      });
    }
  };

  const handleKeyword = (e) => {
    const { value } = e.target;
    setKeyWord(value);
    searchTouristicAttraction(value);
  };

  useEffect(() => {
    getTouristicAttraction();
  }, []);

  const [touristicAtraccions, setTouristicAtraccions] = useState([]);
  const [keyword, setKeyWord] = useState('');
  const [error, setError] = useState('');

  return (
    <Box mt={4} className='turisticos'>
      <Typography variant="h4">Sitios Túristicos de Colombia</Typography>
      <Box className=''>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%', marginTop: '10px', marginBottom: '10px', border: 'solid 1px' }}>
          <span>Buscar con minímo 4 carácteres: </span>
          <TextField
            id="input-search"
            label="Palabra clave"
            value={keyword}
            onChange={handleKeyword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
        <div className="atracciones">
          {touristicAtraccions.length ?
            (touristicAtraccions.map((item) => (
              <Atraccion
                name={item.name}
                image={item.images[0]}
                location={item?.city?.name}
                description={item.description}
              />
            ))) : null}
        </div>
        {error ? (<span>{error}</span>) : null}
      </Box>
    </Box>
  );
};

export default Turismo;