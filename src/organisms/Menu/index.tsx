import React from "react";

import { List, ListItem } from "organisms/Menu/styles";

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
            <a href="#">{item.text}</a>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default Menu;
