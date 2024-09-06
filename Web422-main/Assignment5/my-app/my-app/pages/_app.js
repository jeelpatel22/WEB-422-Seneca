import Layout from '@/components/layout';
import Navbar from '../components/Navbar';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Navbar will be rendered in all pages */}
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
