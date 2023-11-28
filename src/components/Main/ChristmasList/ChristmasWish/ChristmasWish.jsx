import React from "react";

const ChristmasWish = ({title,price,url, deleteWish}) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>Price:{price}€</p>
      <img src={url} alt="" />
      <br/>
      <button onClick={deleteWish}>Borrar</button>
    </article>
  );
};

export default ChristmasWish;
