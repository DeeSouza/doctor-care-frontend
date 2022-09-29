import React from "react";
import { List, ListItem, ListLink } from "organisms/Menu/styles";
import { useMenu } from "contexts/MainContextProvider";

const links = [
  {
    text: "Início",
    active: true,
  },
  {
    text: "Sobre",
    active: false,
  },
  {
    text: "Serviços",
    active: false,
  },
  {
    text: "Departamentos",
    active: false,
  },
];

const Menu = () => {
  const { fixedMenu } = useMenu();

  return (
    <List>
      {React.Children.toArray(
        links.map(({ active, text }) => (
          <ListItem
            active={active}
            fixedMenu={fixedMenu}
            switchStyle={fixedMenu && active}
          >
            <ListLink href="#" fixedMenu={fixedMenu} active={active}>
              {text}
            </ListLink>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default Menu;
