import ButtonAppointment from "atoms/ButtonAppointment";

import iconMap from "assets/icon-map.svg";
import iconEmail from "assets/icon-email.svg";
import iconManAppointment from "assets/doctor-care-homem-agendando-consulta.png";

import { Section } from "./styles";

const Contact = () => {
  return (
    <Section.Root>
      <Section.Wrapper>
        <Section.Description>
          <h2>Entre em contato com a gente!</h2>

          <address>
            <div role="column">
              <img src={iconMap} alt="Ícone do Mapa do Local" />
              <span>R. Amauri Souza, 346</span>
            </div>

            <div role="column">
              <img src={iconEmail} alt="Ícone do Mapa de E-mail" />
              <a
                href="mailto:contato@beautysalon.com"
                title="Clique aqui para enviar um e-mail para Doctor Care"
              >
                contato@doctorcare.com
              </a>
            </div>
          </address>
          <ButtonAppointment />
        </Section.Description>

        <Section.Image>
          <img
            src={iconManAppointment}
            alt="Homem usando o celular agendando uma consulta no site da Doctor Care"
          />
        </Section.Image>
      </Section.Wrapper>
    </Section.Root>
  );
};

export default Contact;
