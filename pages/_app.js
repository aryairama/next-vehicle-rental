/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css';
import '../styles/navbar.css';
import { useStore } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import Wrapper from '../components/Wrapper';
import NextNProgress from 'nextjs-progressbar';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from '../components/base';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState('');
  const start = () => {
    setLoading(true);
    setBg('white');
  };
  const end = () => {
    setLoading(false);
    setBg('');
  };
  useEffect(() => {
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
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
