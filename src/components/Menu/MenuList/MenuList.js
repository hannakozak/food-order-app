import React, { useState, useEffect } from "react";
import { useHttp } from "../../../hooks/useHttp";

import MenuItem from "../MenuItem/MenuItem";
import { ListWrapper } from "./MenuList.styles";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const { isLoading, error, sendRequest: fetchMenu } = useHttp();

  useEffect(() => {
    const transformedMenu = (menuObj) => {
      const loadedMenu = [];
      for (const key in menuObj) {
        loadedMenu.push({
          id: key,
          name: menuObj[key].name,
          price: menuObj[key].price,
          image: menuObj[key].image,
        });
      }
      setMenu(loadedMenu);
    };
    fetchMenu(
      {
        url: "https://food-order-app-ab838-default-rtdb.europe-west1.firebasedatabase.app/menu.json",
      },
      transformedMenu
    );
  }, [fetchMenu]);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    return <section>{error}</section>;
  }
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
