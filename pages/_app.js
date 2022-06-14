import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
    // <SessionProvider session={pageProps.session}>
      
    {/* </SessionProvider> */}
  
}

export default MyApp
