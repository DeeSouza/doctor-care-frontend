import { Container } from "./styles";
import ButtonOpenMenu from "../../atoms/ButtonOpenMenu";

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
