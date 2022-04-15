import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../context/Auth";

import "react-toastify/dist/ReactToastify.css";
import { globalStyles } from "../styles/global";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default MyApp;
