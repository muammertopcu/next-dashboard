import styles from './SideBar.module.scss'
import type {SideBarProps} from "./SideBar.types";
import Image from "next/image";

const SideBar = ({showMobileMenu, setShowMobileMenu}: SideBarProps) => {
  return (
    <aside className={`${styles.sidebar} ${showMobileMenu ? styles.active : ''}`}>

      <div className={styles.sidebar__header}>
        <Image src={require('@/assets/logo.svg')} alt={'logo'} className={styles.sidebar__header__logo}/>

        <Image
          src={require('@/assets/arrow-full-left.svg')}
          alt={'close-menu-icon'}
          className={styles.sidebar__header__close}
          onClick={() => setShowMobileMenu(false)}
        />
      </div>

      <nav className={styles.sidebar__nav}>
        {
          Array.from({length: 10}).map((_, index) => (
            <div key={index}>SideBar {index}</div>
          ))
        }
      </nav>
    </aside>
  );
}

export default SideBar;
