import Card from "atoms/Card";
import { Container, Separator, Wrapper } from "./styles";

const Stats = () => {
  return (
    <Wrapper>
      <Container>
        <Card title="+3.500" subtitle="Pacientes atendidos" />
        <Separator />
        <Card title="+15" subtitle="Especialistas disponíveis" />
        <Separator />
        <Card title="+10" subtitle="Anos no mercado" />
      </Container>
    </Wrapper>
  );
};

export default Stats;
