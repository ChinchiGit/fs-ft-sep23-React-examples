import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("Xabyer"); // user
  const [theme, setTheme] = useState("night"); // theme

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };
  const userData = { username, updateUsername };

  // Actualizar tema
  const toggleTheme = () =>
    theme == "day" ? setTheme("night") : setTheme("day");

  const themeData = {
    theme,
    toggleTheme,
  };

  return (
    <>

      <ThemeContext.Provider value={themeData}>
        <BrowserRouter>
          <UserContext.Provider value={userData}>
            <Header />
            <Main />
          </UserContext.Provider>
        </BrowserRouter>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
