import React from "react";
import { List, ListItem, ListLink } from "organisms/Menu/styles";

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
  return (
    <List>
      {React.Children.toArray(
        links.map((item) => (
          <ListItem active={item.active}>
            <ListLink href="#">{item.text}</ListLink>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default Menu;
