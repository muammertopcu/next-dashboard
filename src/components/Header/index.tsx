import styles from './Header.module.scss'
import type {HeaderProps} from "./Header.types";
import {usePathname} from "next/navigation";
import {Menu} from "@/assets";

const Header = ({toggleMobileMenu}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <span className={styles.header__mobile_menu_toggle} onClick={toggleMobileMenu}>
        <Menu />
      </span>

      <p className={styles.header__title}>
        {pathname.split('/').pop()?.replace('-', ' ')}
      </p>
    </header>
  )
}

export default Header
