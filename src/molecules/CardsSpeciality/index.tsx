import React from "react";
import Speciality from "../Speciality";
import content from "./content";

import { Container } from "./styles";

const CardsSpeciality = () => {
  return (
    <Container>
      {React.Children.toArray(content.map((item) => <Speciality {...item} />))}
    </Container>
  );
};

export default CardsSpeciality;
