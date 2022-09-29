import { Container } from "./styles";

import okIcon from "assets/ok.svg";

interface Props {
  title: string;
  text: string;
}

const Speciality = ({ title, text }: Props) => {
  return (
    <Container
      initial={{ opacity: 0, scale: 0.9, translateY: "-15px" }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{
        transform: "translateY(-5px)",
        transition: { duration: 0 },
      }}
    >
      <img src={okIcon} alt="Ícone de OK" />
      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export default Speciality;
