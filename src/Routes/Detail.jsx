import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const dentistData = JSON.parse(params.get("dentist"));
        setDentist(dentistData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDentist();
  }, []);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Detalle Dentista id: {id}</h1>
      <div>
        <p>Nombre: {dentist.name}</p>
        <p>Email: {dentist.email}</p>
        <p>Teléfono: {dentist.address.phone}</p>
        <p>Sitio Web: {dentist.address.website}</p>
      </div>
    </>
  );
};

export default Detail;
