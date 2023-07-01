import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import CardO from "../Components/Card";
import styles from "../Home.module.css";
import { ThemeContext } from "../Components/utils/ThemeContext";

const Home = () => {
  const [odontologos, setOdontologos] = useState([]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setOdontologos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box
        sx={{
          color: theme === "dark" ? "#fff" : "#000",
          backgroundColor: theme === "dark" ? "#12121296" : "#fff",
        }}
      >
        <div
          className={`${styles.containerCards} ${
            theme === "dark" ? "dark" : ""
          }`}
        >
          {odontologos.map((odontologo) => {
            return <CardO key={odontologo.id} odontologo={odontologo} />;
          })}
        </div>
      </Box>
    </>
  );
};

export default Home;
