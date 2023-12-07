import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Audio, Vortex } from "react-loader-spinner";

const Staff = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await resp.json();
      // simular retardo de llamada a API
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      console.log(data);
      setPokemons(data);
    };
    getPokemons();
  }, []);

  return (
    <ul className="staffList">
      {pokemons.length != 0 ? (
        pokemons.results.map((pokemon, i) => (
          <Card sx={{ maxWidth: 275, minWidth: 275 }} key={i}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {pokemon.name}
              </Typography>
              <Button variant="outlined">
                <a href={pokemon.url}> URL</a>
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <>
          <h3>Cargando...</h3>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </>
      )}
    </ul>
  );
};

export default Staff;
