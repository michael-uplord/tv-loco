import Layout from "../components/layout";
import store from '../store/store';
import { Provider } from 'react-redux';
import { DM_Sans } from 'next/font/google'
import "../styles/style.scss";

const dmSans = DM_Sans({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout className={dmSans.className}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
