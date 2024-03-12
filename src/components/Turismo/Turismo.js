import { Search } from "@mui/icons-material";
import { Box, Input, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Turismo = () => {
  const getTouristicAttraction = () => {

  };

  const searchTouristicAttraction = (text) => {

  };

  const handleKeyword = (e) => {
    const { value } = e.target;
    setKeyWord(value);
  };

  const [touristicAtraccions, setTouristicAtraccions] = useState([]);
  const [keyword, setKeyWord] = useState('');

  return (
    <Box mt={4} className='turisticos'>
      <Typography variant="h1">Sitios Túristicos de Colombia</Typography>
      <Box>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
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
        
      </Box>
    </Box>
  );
};

export default Turismo;