/**
 * Config providers for Application
 *
 * @summary Config providers for Application
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:34:27
 * Last modified  : 2021-05-11 15:44:08
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

PersistGate;

import App from './App';
import SetupAPI from 'api/config';
import ErrorBoundary from './ErrorBoundary';
import { configStore } from 'data/store';

const { store, persistor } = configStore();

class AppProvider extends React.PureComponent {
  UNSAFE_componentWillMount() {
    SetupAPI.init();
    SetupAPI.setBaseUrl();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <SafeAreaProvider>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppProvider;
