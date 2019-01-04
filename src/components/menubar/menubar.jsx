import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const MenuBar = () => {

return (

    <Menu secondary attached="top">
    <Menu.Item>
      <Icon name="sidebar" />Menu
    </Menu.Item>          
  </Menu>
);

};

export default MenuBar;