import React, { useContext } from "react";
import { Box } from "@mui/material";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/utils/ThemeContext";

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const storedDentists = JSON.parse(localStorage.getItem("dentists")) || [];

  return (
    <>
    <Box
      sx={{
        color: theme === "dark" ? "#fff" : "#000",
        backgroundColor: theme === "dark" ? "#12121296" : "#fff",
      }}
    >
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {storedDentists.map((dentist) => (
          <Card key={dentist.id} odontologo={dentist} />
        ))}
      </div>
      </Box>
    </>
  );
};

export default Favs;
