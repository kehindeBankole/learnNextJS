import '../styles/globals.css'
import Footer from '../co/Footer'
import Nav from '../co/Nav'
import Show from '../co/Show'
function MyApp({ Component, pageProps }) {
  return (
    <Show>

      <Component {...pageProps} />

   </Show>
  )
}

export default MyApp
