import "@/styles/globals.css";

// This is to show Header on every pages!
import Header from "./header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
