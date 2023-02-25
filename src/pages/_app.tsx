import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { Providers } from "./providers";
import { AnimatePresence } from "framer-motion";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </AnimatePresence>
  );
};

export default MyApp;
