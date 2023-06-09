import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";

import { SnackbarProvider } from "notistack";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
      {getLayout(<Component {...pageProps} />)}
    </SnackbarProvider>
  );
};

export default App;
