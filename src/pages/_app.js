import "@/styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
