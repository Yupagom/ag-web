import { Search } from "@mui/icons-material";
import { Box, Input, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Turismo = () => {
  const getTouristicAttraction = () => {

  };

  const searchTouristicAttraction = (text) => {

  };
  const [touristicAtraccions, setTouristicAtraccions] = useState([]);
  const [keyword, setKeyWord] = useState('');

  return (
    <Box mt={4} className='turisticos'>
      <Typography variant="h1">Sitios Túristicos de Colombia</Typography>
      <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      
    </Box>
  );
};

export default Turismo;