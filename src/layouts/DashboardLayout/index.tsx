import styles from './DashboardLayout.module.scss'
import {Inter} from "next/font/google";
import {Header, SideBar} from "@/components";
import {PropsWithChildren, useState} from "react";

const inter = Inter({subsets: ["latin"]});

const DashboardLayout = ({children}: PropsWithChildren) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={`${styles.main} ${inter.className}`}>
      <SideBar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>

      <main className={styles.main__content}>
        <Header toggleMobileMenu={() => setShowMobileMenu(!showMobileMenu)}/>

        <article>
          {children}
        </article>
      </main>
    </div>
  );
}

export default DashboardLayout;
