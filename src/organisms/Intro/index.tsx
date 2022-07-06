import ButtonAppointment from "../../molecules/ButtonAppointment";
import { Section } from "./styles";

import doctorCareWomanPatient from "../../assets/doctor-care-paciente-mulher.png";

const Intro = () => {
  return (
    <Section>
      <h6>BOAS-VINDAS A DOCTORCARE 👋</h6>

      <h1>Assistência médica simplificada para todos</h1>

      <h5>
        Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz
        de sua doença e proporcionar uma cura a longo prazo.
      </h5>

      <ButtonAppointment />

      <img
        src={doctorCareWomanPatient}
        alt="Doctor Care - Mulher Paciente Sorrindo"
      />
    </Section>
  );
};

export default Intro;
