// pages/_app.js
import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}