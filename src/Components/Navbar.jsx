import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <div className={`navBar ${theme === "dark" ? "dark" : ""}`}>
        <div className="clinicTitle">Clinica Odontologica Tudoc</div>
        <div className="navLinks">
          <Link to="/">Inicio </Link>
          <Link to="/contact">Contacto </Link>
          <Link to="/favs">Favoritos </Link>
          <button onClick={toggleTheme}>Cambiar Tema</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
