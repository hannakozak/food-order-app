import React from 'react';
import { data } from '../../../assets/data';

import MenuItem from '../MenuItem/MenuItem';
import { ListWrapper } from './MenuList.styles';


const MenuList = () => {

  const menuList = data.map((item) => 
  <MenuItem
     id={item.id}
     name={item.name}
     price={item.price}
  />
  )
  return (
    <section>
      <ListWrapper>
        {menuList}
      </ListWrapper>
    </section>
  )
}

export default MenuList;