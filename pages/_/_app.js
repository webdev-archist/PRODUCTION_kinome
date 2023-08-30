import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {AuthContextProvider} from '../stores/authContext'
import Layout from './components/Layout'
import './globals.css'
import "../assets/scss/index.scss"






function MyApp({ Component, pageProps }) {
    return (
      <AuthContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    )
  }
  
  export default MyApp
  