import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../../redux";

const UserContainer = () => {
  const userData = useSelector((state) => state.userR);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      dispatch(fetchUsers());
      setLoad(false);
    }
  }, [load, dispatch]);

  return (
    <section>
      <h1>Lista de usuarios</h1>
      <button onClick={() => setLoad(true)}>Descargar</button>
      {userData.loading ? (
        <p>Cargando....</p>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        userData.users.map((user, i) => <p key={i}>{user.name}</p>)
      )}
    </section>
  );
};

export default UserContainer;
