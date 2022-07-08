import { Container } from "./styles";

import logoDoctorCareWhite from "../../assets/doctor-care-light-logo.svg";
import iconInstagram from "../../assets/instagram.svg";
import iconFacebook from "../../assets/facebook.svg";
import iconYoutube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <Container>
      <img src={logoDoctorCareWhite} alt="Logo da Doctor Care na cor branca" />

      <div role="column">
        <span>&copy;2021 Doctor Care</span>
        <span>Todos os direitos reservados.</span>
      </div>

      <div role="column">
        <a href="#" title="Link para o Instagram da Doctor Care">
          <img src={iconInstagram} alt="Ícone da Rede Social do Instagram" />
        </a>
        <a href="#" title="Link para o Facebook do Doctor Care">
          <img src={iconFacebook} alt="Ícone da Rede Social do Facebook" />
        </a>
        <a href="#" title="Link para o Canal do Youtube da Doctor Care">
          <img src={iconYoutube} alt="Ícone da Rede Social do Youtube" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
