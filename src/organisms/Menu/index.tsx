import { List, ListItem } from "organisms/Menu/styles";

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
    </List>
  );
};

export default Menu;
