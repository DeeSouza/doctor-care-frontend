import { Container } from "./styles";

import instagramIcon from "assets/instagram.svg";
import facebookIcon from "assets/facebook.svg";
import youtubeIcon from "assets/youtube.svg";

const SocialLinks = () => {
  return (
    <Container>
      <a href="#">
        <img src={instagramIcon} alt="Instagram - Doctor Care" />
      </a>
      <a href="#">
        <img src={facebookIcon} alt="Facebook - Doctor Care" />
      </a>
      <a href="#">
        <img src={youtubeIcon} alt="Youtube - Doctor Care" />
      </a>
    </Container>
  );
};

export default SocialLinks;
