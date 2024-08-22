import styles from './Header.module.scss'
import type {HeaderProps} from "./Header.types";

const Header = ({toggleMobileMenu}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <p className={styles.header__mobile_menu_toggle} onClick={toggleMobileMenu}>
        Menu
      </p>

      <p className={styles.header__title}>
        Header
      </p>
    </header>
  )
}

export default Header
