/* eslint-disable react-hooks/exhaustive-deps */
/**
 * configure App elements and layout
 *
 * @summary configure App elements and layout
 * @author Thuan <nguyenbuiducthuan@gmail.com>
 *
 * Created at     : 2021-05-11 15:34:58
 * Last modified  : 2021-05-11 15:35:15
 */

import React, { useCallback, useLayoutEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import RootStack from '../routes/stacks/RootStack';
import SetupAPI from 'api/config';
import { useDispatch } from 'react-redux';
import { logout } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch: ActionDispatcher = useDispatch();

  const onNavigationReady = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  useLayoutEffect(() => {
    SetupAPI.setupResponseAxios(() => {
      dispatch(logout());
    });
  }, []);

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
