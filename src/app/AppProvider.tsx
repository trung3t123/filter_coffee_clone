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

import App from './App';
import SetupAPI from 'api/config';
import ErrorBoundary from './ErrorBoundary';

class AppProvider extends React.PureComponent {
  UNSAFE_componentWillMount() {
    SetupAPI.init();
    SetupAPI.setBaseUrl();
    SetupAPI.setupOnResponseInterceptors();
  }

  render() {
    return (
      <PaperProvider>
        <SafeAreaProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}

export default AppProvider;
