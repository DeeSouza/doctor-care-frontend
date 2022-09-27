import Title from "atoms/Title";
import CardsSpeciality from "molecules/CardsSpeciality";

import { Section } from "./styles";

const Services = () => {
  return (
    <Section>
      <Title title="SERVIÇOS" />
      <p>Como podemos ajudá-lo a se sentir melhor?</p>

      <CardsSpeciality />
    </Section>
  );
};

export default Services;
