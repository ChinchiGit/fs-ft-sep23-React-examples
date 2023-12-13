import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChristmasCourse = () => {
  //Iniciamos el estado formulario con un valor por defecto
  const [formulario, setFormulario] = useState({
    nombre: "Pepe",
    email: "pepe@pepe.es",
    curso: "React.js",
  });

  const { nombre, email, curso } = formulario;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value, //[] establece propiedad computada del objeto, si no puesieramos [] crearría una nueva propiedad del objeto
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      curso: e.target.curso.value,
    };
    setFormulario(data); // Modificar el estado de Formulario
  };

  //Usamos el useEffect, es recomendable disparar por separado los useEffect que tengan responsabilidad Única

  //este sólo se ejecutará la primera vez que se carge el componente
  useEffect(() => {
    console.log("1. se ejecuta el useEffect");
  }, []);

  //este se ejecutará cada vez que cambie el estado del formulario
  useEffect(() => {
    console.log("ha cambiado el estado del formulario");
  }, [formulario]);

  //este se ejecutará cada vez que cambie el estado del nombre
  useEffect(() => {
    console.log("Ha cambiado el nombre");
  }, [nombre]);

  return (
    <section>
      <h1>Christmas course</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        className="mt-4"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="filled"
          name="nombre"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="filled"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Curso"
          variant="filled"
          name="curso"
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </section>
  );
};

export default ChristmasCourse;
