import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { globalStyles } from "../styles/global";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
