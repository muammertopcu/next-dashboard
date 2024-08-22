import styles from './SideBar.module.scss'
import type {SideBarProps} from "./SideBar.types";
import Image from "next/image";
import {Menu} from "@/components";

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

      <Menu />
    </aside>
  );
}

export default SideBar;
