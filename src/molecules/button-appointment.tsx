import { Button } from "./styles";
import iconWhatsapp from "../assets/icon-whatsapp.svg";

const ButtonAppointment = () => {
  return (
    <Button type="button" title="Agende uma consulta no Whatsapp">
      <img src={iconWhatsapp} alt="Ícone Whatsapp" />
      <div>AGENDE SUA CONSULTA</div>
    </Button>
  );
};

export default ButtonAppointment;
