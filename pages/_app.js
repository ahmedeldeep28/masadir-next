import '../styles/globals.scss'
import '../styles/bootstrap-grid-rtl.min.css'
import Navbar from './../components/layout/Navbar';
import Footer from './../components/layout/Footer';
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart",() => {
    NProgress.start();
  })
  Router.events.on("routeChangeComplete",() => {
    NProgress.done();
  })

  return (
    <>
      <Head>
        <title>موقع مصادر</title>
        <link rel="icon" href="/favicon.svg" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ToastContainer />
        <Navbar />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
