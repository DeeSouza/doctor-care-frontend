import { Container } from "./styles";
import ButtonOpenMenu from "../../atoms/button-open-menu";

import doctorCareLogo from "../../assets/doctor-care-logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={doctorCareLogo} alt="Doctor Care Logo" />
      <ButtonOpenMenu />
    </Container>
  );
};

export default Header;
