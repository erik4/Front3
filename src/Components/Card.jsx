import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import doctor from "../../src/img/doctor1.png";
import { ThemeContext } from "./utils/ThemeContext";

const CardO = ({ odontologo }) => {
  const { theme } = useContext(ThemeContext);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    const storedDentists = JSON.parse(localStorage.getItem("dentists")) || [];
    storedDentists.push(odontologo);
    localStorage.setItem("dentists", JSON.stringify(storedDentists));
  };

  const handleDetailClick = () => {
    const dentist = {
      id: odontologo.id,
      name: odontologo.name,
      username: odontologo.username,
      email: odontologo.email,
      address: {
        street: odontologo.address.street,
        suite: odontologo.address.suite,
        city: odontologo.address.city,
        zipcode: odontologo.address.zipcode,
        geo: {
          lat: odontologo.address.geo.lat,
          lng: odontologo.address.geo.lng,
        },
        phone: odontologo.phone,
        website: odontologo.website,
        company: {
          name: odontologo.company.name,
          catchPhrase: odontologo.company.catchPhrase,
          bs: odontologo.company.bs,
        },
      },
    };

    window.location.href = `/detail/${dentist.id}?dentist=${encodeURIComponent(
      JSON.stringify(dentist)
    )}`;
  };

  return (
    <>
      <Card sx={{ width: 300, height: 400 }} className={theme === "dark" ? "dark" : ""}>
        <CardHeader title={odontologo.name} subheader={odontologo.username} />
        <CardMedia component="img" height="194" image={doctor} alt="ImgDoctor" />

        <CardActions
          sx={{ display: "flex", justifyContent: "space-between" }}
          className={theme === "dark" ? "dark" : ""}
        >
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            <FavoriteIcon />
          </IconButton>
          <Button variant="contained" color="primary" onClick={handleDetailClick}>
            Detalle
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardO;
