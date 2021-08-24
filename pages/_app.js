import '../styles/globals.css';
import '../styles/navbar.css';
import { useStore } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import Wrapper from '../components/Wrapper';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
