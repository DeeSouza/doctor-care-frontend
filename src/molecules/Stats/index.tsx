import Card from "atoms/Card";
import { Container } from "./styles";

const Stats = () => {
  return (
    <Container>
      <Card title="+3.500" subtitle="Pacientes atendidos" />
      <Card title="+15" subtitle="Especialistas disponíveis" />
      <Card title="+10" subtitle="Anos no mercado" />
    </Container>
  );
};

export default Stats;
