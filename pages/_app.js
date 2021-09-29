import '../styles/globals.css';
import '../styles/navbar.css';
import { useStore } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import Wrapper from '../components/Wrapper';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from '../components/base';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState('');
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
      setBg('bg-white');
    });
    router.events.on('routeChangeComplete', () => {
      setLoading(false);
      setBg('');
    });
    router.events.on('routeChangeError', () => {
      setLoading(false);
      setBg('');
    });
  }, [router]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <NextNProgress color="#ffce65" startPosition={0.3} stopDelayMs={200} height={4} showOnShallow={true} />
          <Loader show={loading} bg={bg} />
          <Component {...pageProps} />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
