import { useMenu } from "contexts/MainContextProvider";

import ButtonOpenMenu from "atoms/ButtonOpenMenu";
import ButtonAppointmentMenu from "atoms/ButtonAppointmentMenu";
import SocialLinks from "atoms/SocialLinks";
import Menu from "organisms/Menu";

import doctorCareLogo from "assets/doctor-care-logo.svg";
import doctorCareLogoWhite from "assets/doctor-care-light-logo.svg";

import { Container, Navigation, WrapperNavigation } from "./styles";

const Header = () => {
  const { toggleMenu, fixedMenu } = useMenu();

  function switchLogo() {
    const toggle = toggleMenu || fixedMenu;

    return toggle ? (
      <img src={doctorCareLogoWhite} alt="Doctor Care Logo" />
    ) : (
      <img src={doctorCareLogo} alt="Doctor Care Logo" />
    );
  }

  return (
    <Navigation toggleMenu={toggleMenu} fixedMenu={fixedMenu}>
      <WrapperNavigation>
        <Container>
          {switchLogo()}
          <ButtonOpenMenu />
        </Container>

        <Menu />
        <ButtonAppointmentMenu />
        <SocialLinks />
      </WrapperNavigation>
    </Navigation>
  );
};

export default Header;
