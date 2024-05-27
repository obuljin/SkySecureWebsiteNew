import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap")
};
import "../style/index.scss";

import AppProvider from "@/contextApi/AppProvider";
import { ToastContainer } from "react-toastify";
import { childrenType } from "@/interFace/interFace";
import ReduxProvider from "@/redux/ReduxProvider";
export default function RootLayout({ children }: childrenType) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>SkySecure - React Next Js  </title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
