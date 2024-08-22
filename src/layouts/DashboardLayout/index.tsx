import styles from './DashboardLayout.module.scss'
import {Inter} from "next/font/google";
import {Header, SideBar} from "@/components";
import {PropsWithChildren, useState} from "react";

const inter = Inter({subsets: ["latin"]});

const DashboardLayout = ({children}: PropsWithChildren) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <SideBar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>

      <div className={styles.main__content}>
        <Header toggleMobileMenu={() => setShowMobileMenu(!showMobileMenu)}/>

        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;
