import Layout from '../components/Layout';
import '../styles/globals.css';
import Login from './login';

function MyApp({ Component, pageProps }) {
  return <Login />;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
