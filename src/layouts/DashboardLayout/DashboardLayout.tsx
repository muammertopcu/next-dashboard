import type {PropsWithChildren} from "react";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

const DashboardLayout = ({children}: PropsWithChildren) => {
  return (
    <main className={inter.className}>
      <div>{children}</div>
    </main>
  );
}

export default DashboardLayout;
