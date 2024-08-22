import styles from './Header.module.scss'
import type {HeaderProps} from "./Header.types";
import {usePathname} from "next/navigation";

const Header = ({toggleMobileMenu}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <p className={styles.header__mobile_menu_toggle} onClick={toggleMobileMenu}>
        Menu
      </p>

      <p className={styles.header__title}>
        {pathname.split('/').pop()?.replace('-', ' ')}
      </p>
    </header>
  )
}

export default Header
