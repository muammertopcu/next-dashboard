'use client';

import styles from './Menu.module.scss'
import {useEffect, useState} from "react";
import {MenuData} from "@/type";
import {MenuItems} from "@/components";


const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuData[]>([]);

  useEffect(() => {
    fetch('/data/menu.json')
      .then(response => response.json())
      .then(data => setMenuItems(data));
  }, []);

  return (
    <nav className={styles.menu}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menu__section}>
          {item.section && (
            <span className={styles.menu__section__title}>{item.section}</span>
          )}

          <MenuItems items={item.items}/>
        </div>
      ))}
    </nav>
  )
}

export default Menu;
