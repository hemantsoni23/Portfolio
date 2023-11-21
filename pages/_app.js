import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';
// import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>HS Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Hemant Soni"></meta>
        <meta name="description" content="Portfolio website" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="icon" href="/logo1.svg" />
      </Head>
      <Layout>
        {/* <AnimatePresence mode='wait'> */}
          <div key={router.route} className='h-full'>
            {/* <Transition /> */}
            <Component {...pageProps} />
          </div>
        {/* </AnimatePresence> */}
      </Layout>
    </>
  );
}

export default MyApp;
