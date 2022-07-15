import { Container } from "./styles";

import okIcon from "assets/ok.svg";

type Props = {
  title: string;
  text: string;
};

const Speciality = ({ title, text }: Props) => {
  return (
    <Container>
      <img src={okIcon} alt="Ícone de OK" />
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Speciality;
