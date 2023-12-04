import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ChristmasWish = ({title,price,url, deleteWish}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth:345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={url}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {price}€
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={deleteWish} size="small">Borrar</Button>
    </CardActions>
  </Card>
    // <article>
    //   <h3>{title}</h3>
    //   <p>Price:{price}€</p>
    //   <img style={{maxWidth:300}} src={url} alt="" />
    //   <br/>
    //   <button onClick={deleteWish}>Borrar</button>
    // </article>
  );
};

export default ChristmasWish;
