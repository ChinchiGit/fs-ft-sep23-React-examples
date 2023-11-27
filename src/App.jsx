import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Array inicial de deseos
  const initialData = [
    {
      title: "Calcetines navideños",
      price: 10,
      url: "https://r.rp-static.com/r/catalog/public/8ca88a0deef8f716c0e9131bcb489f80ee2e05e3/558/desktop.jpg",
    },
    {
      title: "Nuevo libro Brandon Sanderson",
      price: 15,
      url: "https://imagessl0.casadellibro.com/a/l/s5/00/9788418037900.webp",
    },
    {
      title: "Jersey",
      price: 22,
      url: "https://qmode.es/wp-content/uploads/2016/12/6a668901063c7ef50b4fc1e48a3b6b88-255x300.jpg",
    },
  ];

  const [data, setData] = useState({}); // Deseo actual
  const [list, setList] = useState(initialData); //[{},{},{}] lista deseos

  const createWish = () => {
    alert("Pide tus deseos");
    const title = prompt("introduce título");
    const price = prompt("introduce precio");
    const url = prompt("introduce url imágen");

    const myProduct = { title, price, url };

    setData(myProduct); // {} deseo
    setList([...list, myProduct]); // [{},{},{},{}] lista de deseos
  };

  const deleteWish = (i) => {
    // [<Product>,<Product>,<Product>] 
    // borrar i=2
    // [<Product>,<Product>] 
    const remainingWishes = list.filter((product,j)=> i !== j);
    setList(remainingWishes);
  };

  const paintWishes = () => {
    // Leer estado array deseos y devolver array componentes producto
    // [{},{},{}] -->[<Product>,<Product>,<Product>]
    return list.map((product,i) => (
      <Product
        key={uuidv4()}
        title={product.title}
        price={product.price}
        url={product.url}
        deleteWish={()=>deleteWish(i)}
      />
    ));
  };

  const clearWishes = () => {
    setList([]); // vaciar lista de deseos (state)
  };

  const resetWishes = () => {
    // Cargar al estado incial
    setList(initialData); // Recargar lista de deseos (state)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const url = e.target.url.value;

    const myProduct = { title, price, url };

    const confirmated = confirm(`¿Desea crear el deseo? title:${title} price:${price}`);

    if(confirmated){
      setData(myProduct); // {} deseo
      setList([...list, myProduct]); // [{},{},{},{}] lista de deseos
      alert("Deseo concedido");
    }
  }

  return (
    <>
      <div>
        <h3>Feliz Navidad!</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Lista de deseos</h2>
      <button onClick={createWish}>Pide tu deseo</button>
      <button onClick={clearWishes}>Limpiar</button>
      <button onClick={resetWishes}>Recargar</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label><br />
        <input type="text" name="title" /><br />

        <label htmlFor="price">Precio</label><br />
        <input type="number" name="price" /><br />

        <label htmlFor="url">URL imagen</label><br />
        <input type="url" name="url"/><br />

        <button type="submit">Crear deseo</button>
      </form>

      <section>{paintWishes()}</section>

      <Footer />
    </>
  );
}

export default App;
