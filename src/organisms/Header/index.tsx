import { AnimationButton, useMenu } from "contexts/MainContextProvider";

import ButtonOpenMenu from "atoms/ButtonOpenMenu";
import Menu from "organisms/Menu";

import doctorCareLogo from "assets/doctor-care-logo.svg";
import doctorCareLogoWhite from "assets/doctor-care-light-logo.svg";

import { Container, Navigation } from "./styles";
import { useEffect } from "react";

const Header = () => {
  const { toggleMenu } = useMenu();

  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (!bodyElement) {
      return;
    }

    if (toggleMenu) {
      bodyElement.classList.add("no-scrollbars");
    } else {
      bodyElement.classList.remove("no-scrollbars");
    }
  }, [toggleMenu]);

  function switchLogo(openMenu: AnimationButton) {
    return openMenu ? (
      <img src={doctorCareLogoWhite} alt="Doctor Care Logo" />
    ) : (
      <img src={doctorCareLogo} alt="Doctor Care Logo" />
    );
  }

  return (
    <Navigation toggleMenu={toggleMenu}>
      <Container backgroundColor={toggleMenu}>
        {switchLogo(toggleMenu)}

        <ButtonOpenMenu />
      </Container>

      <Menu />
    </Navigation>
  );
};

export default Header;
