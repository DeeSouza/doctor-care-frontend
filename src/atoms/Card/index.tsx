import { Container } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

const Card = ({ title, subtitle }: Props) => {
  return (
    <Container>
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </Container>
  );
};

export default Card;
