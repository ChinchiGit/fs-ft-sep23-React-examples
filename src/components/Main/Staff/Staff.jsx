import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Staff = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json();
      console.log(data);
      setPokemons(data);
    };
    getPokemons();
  }, []);

  return (
    <ul className="staffList">
      {pokemons.length!=0? 
        pokemons.results.map((pokemon, i) => (
            <Card sx={{ maxWidth: 275, minWidth:275 }} key={i}>
              <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {pokemon.name}
              </Typography>
              <Button variant="outlined">
              <a href={pokemon.url}> URL</a>
              </Button>
              </CardContent>
            </Card>
          ))
        : null}
    </ul>

  );
};

export default Staff;
