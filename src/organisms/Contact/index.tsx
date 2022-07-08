import ButtonAppointment from "../../molecules/ButtonAppointment";
import { Section } from "./styles";

import iconMap from "../../assets/icon-map.svg";
import iconEmail from "../../assets/icon-email.svg";
import iconManAppointment from "../../assets/doctor-care-homem-agendando-consulta.png";

const Contact = () => {
  return (
    <Section>
      <h2>Entre em contato com a gente!</h2>

      <div role="column">
        <img src={iconMap} alt="Ícone do Mapa do Local" />
        <span>R. Amauri Souza, 346</span>
      </div>

      <div role="column">
        <img src={iconEmail} alt="Ícone do Mapa de E-mail" />
        <span>contato@beautysalon.com</span>
      </div>

      <ButtonAppointment />

      <img
        src={iconManAppointment}
        alt="Homem usando o celular agendando uma consulta no site da Doctor Care"
      />
    </Section>
  );
};

export default Contact;
