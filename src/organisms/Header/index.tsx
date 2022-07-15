import { AnimationButton, useMenu } from "contexts/MainContextProvider";

import ButtonOpenMenu from "atoms/ButtonOpenMenu";
import doctorCareLogo from "assets/doctor-care-logo.svg";
import doctorCareLogoWhite from "assets/doctor-care-light-logo.svg";

import { Container } from "./styles";

const Header = () => {
  const { toggleMenu } = useMenu();

  function switchLogo(value: AnimationButton) {
    return value ? (
      <img src={doctorCareLogoWhite} alt="Doctor Care Logo" />
    ) : (
      <img src={doctorCareLogo} alt="Doctor Care Logo" />
    );
  }

  return (
    <Container backgroundColor={toggleMenu}>
      {switchLogo(toggleMenu)}

      <ButtonOpenMenu />
    </Container>
  );
};

export default Header;
