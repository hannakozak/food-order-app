import React, { useEffect, useState } from "react";

import MenuItem from "../MenuItem/MenuItem";
import { ListWrapper } from "./MenuList.styles";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://food-order-app-ab838-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      const responseData = await response.json();
      const loadedMenu = [];
      for (const key in responseData) {
        loadedMenu.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setMenu(loadedMenu);
      console.log(loadedMenu);
    };
    fetchMenu();
  }, []);
  const menuList = menu.map((item) => (
    <MenuItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
    />
  ));

  return (
    <section>
      <ListWrapper>{menuList}</ListWrapper>
    </section>
  );
};

export default MenuList;
