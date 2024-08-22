import styles from './MenuItems.module.scss';
import type {MenuItemProps} from "./MenuItems.types";
import {usePathname} from "next/navigation";
import Image from "next/image";

const MenuItems = ({items}: MenuItemProps) => {
  const pathname = usePathname()

  return (
    <div className={styles.menu_items}>
      {items.map(item => (
        <div
          key={item.name}
          className={`${styles.menu_items__item} ${item.link === pathname ? styles.active : ''}`}
        >
          <Image className={styles.menu_items__item__icon} src={require(`@/assets/${item.icon}`)} alt={''} />

          {item.name}
        </div>
      ))}
    </div>
  )
}

export default MenuItems;
