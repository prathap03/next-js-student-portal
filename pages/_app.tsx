import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from '../node_modules/next/router';
import ProtectedRoute from '../components/ProtectedRoute';


function MyApp({ Component, pageProps }: AppProps) {
  
  const publicRoutes = ['/login','/demoDash','/treat']
  const router = useRouter()
  return (
    <AuthContextProvider>
      {publicRoutes.includes(router.pathname) ?
      (
        <Component {...pageProps} />
      ):(<ProtectedRoute>
         <Component {...pageProps} />
      </ProtectedRoute>)}
    
    </AuthContextProvider>
    
  );
}

export default MyApp
