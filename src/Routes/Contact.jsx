import React, { useContext, useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { ThemeContext } from "../Components/utils/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    setSuccessMessage(
      `Gracias ${values.name}, te contactaremos cuanto antes vía email.`
    );
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name || values.name.length < 5) {
      errors.name = "Por favor ingresa un nombre válido (mínimo 5 caracteres)";
    }

    if (
      !values.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Por favor ingresa un email válido";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { values, errors, handleChange, handleSubmit, touched } = formik;

  return (
    <Box
      sx={{
        color: theme === "dark" ? "#fff" : "#000",
        backgroundColor: theme === "dark" ? "#12121296" : "#fff",
      }}
    >
      <div>
        <h2>¿Quieres saber más?</h2>
        <p>Mándanos tu consulta y nos pondremos en contacto contigo.</p>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "400px",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" color="primary">
          Contáctanos
        </Typography>
        <TextField
          id="name"
          label="Nombre completo"
          variant="outlined"
          name="name"
          fullWidth
          value={values.name}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email"
          fullWidth
          value={values.email}
          onChange={handleChange}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <Button type="submit" variant="contained" color="primary">
          Agregar
        </Button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </Box>
  );
};

export default Contact;
