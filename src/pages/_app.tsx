import "@/styles/normalize.css";

import type {AppProps} from "next/app";
import {DashboardLayout} from "@/layouts";

export default function App({Component, pageProps}: AppProps) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
