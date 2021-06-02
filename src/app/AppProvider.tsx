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
import { KeyboardAvoidingView } from 'react-native';

PersistGate;

import App from './App';
import SetupAPI from 'api/config';
import ErrorBoundary from './ErrorBoundary';
import { configStore } from 'data/store';
import CommonStyles from 'theme/CommonStyles';
import Platform from 'utils/platform';

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
                <KeyboardAvoidingView
                  style={CommonStyles.flex1}
                  behavior={Platform.isIos ? 'height' : undefined}>
                  <App />
                </KeyboardAvoidingView>
              </ErrorBoundary>
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppProvider;
