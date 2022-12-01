import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFkaWRhc2gxIiwiYSI6ImNsYjY5OHZ1NTBkZ2MzbnBnYTE0ano1cWQifQ.QUzrVjy2ysUN3BsZq798_w";


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

