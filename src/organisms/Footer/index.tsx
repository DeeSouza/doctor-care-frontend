import SocialLinks from "atoms/SocialLinks";
import logoDoctorCareWhite from "assets/doctor-care-light-logo.svg";

import { Container, Copyright, WrapperContainer } from "./styles";

const Footer = () => {
  return (
    <Container>
      <WrapperContainer>
        <Copyright>
          <img
            src={logoDoctorCareWhite}
            alt="Logo da Doctor Care na cor branca"
          />

          <p>&copy;2021 Doctor Care</p>
          <p>Todos os direitos reservados.</p>
        </Copyright>

        <SocialLinks align="left" />
      </WrapperContainer>
    </Container>
  );
};

export default Footer;
