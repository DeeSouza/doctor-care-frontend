import { List, ListItem } from "organisms/Menu/styles";

import instagramIcon from "assets/instagram.svg";
import facebookIcon from "assets/facebook.svg";
import youtubeIcon from "assets/youtube.svg";

const Menu = () => {
  return (
    <List>
      <ListItem>
        <a href="#">Início</a>
      </ListItem>
      <ListItem>
        <a href="#">Sobre</a>
      </ListItem>
      <ListItem>
        <a href="#">Serviços</a>
      </ListItem>
      <ListItem>
        <a href="#">Departamentos</a>
      </ListItem>
      <ListItem button>
        <a href="#">AGENDE SUA CONSULTA</a>
      </ListItem>
      <ListItem social>
        <a href="#">
          <img src={instagramIcon} alt="Instagram - Doctor Care" />
        </a>
        <a href="#">
          <img src={facebookIcon} alt="Facebook - Doctor Care" />
        </a>
        <a href="#">
          <img src={youtubeIcon} alt="Youtube - Doctor Care" />
        </a>
      </ListItem>
    </List>
  );
};

export default Menu;
