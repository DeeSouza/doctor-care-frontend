import ButtonAppointment from "atoms/ButtonAppointment";
import Stats from "molecules/Stats";

import doctorCareWomanPatient from "assets/doctor-care-paciente-mulher.png";

import { Section } from "./styles";

const Intro = () => {
  return (
    <Section.Root>
      <Section.Wrapper>
        <Section.Intro>
          <h6>BOAS-VINDAS A DOCTORCARE 👋</h6>
          <h1>Assistência médica simplificada para todos</h1>

          <h5>
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa
            raiz de sua doença e proporcionar uma cura a longo prazo.
          </h5>

          <ButtonAppointment />
        </Section.Intro>

        <Section.Image>
          <img
            src={doctorCareWomanPatient}
            alt="Doctor Care - Mulher Paciente Sorrindo"
          />
        </Section.Image>
      </Section.Wrapper>

      <Stats />
    </Section.Root>
  );
};

export default Intro;
