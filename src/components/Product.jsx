// rfce
import React from "react";

function Product({title,price,url, deleteWish}) {
  return (
    <article>
      <h3>{title}</h3>
      <p>Price:{price}€</p>
      <img src={url} alt="" />
      <br/>
      <button onClick={deleteWish}>Borrar</button>
    </article>
  );
}

export default Product;
