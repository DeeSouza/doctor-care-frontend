import { useMenu } from "contexts/MainContextProvider";
import { Button } from "./styles";

const ButtonAppointment = () => {
  const { fixedMenu } = useMenu();

  return <Button fixedMenu={fixedMenu}>AGENDAR CONSULTA</Button>;
};

export default ButtonAppointment;
