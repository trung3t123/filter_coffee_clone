import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

// import styles from './styles';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';
import ROUTES from 'routes/names';

import SessionSelector from 'data/session/selectors';
import Header from 'components/Header';

const HomeHeader = () => {
  const isAuthenticated = useSelector(SessionSelector.isLoggedInSelector);
  const navigation = useNavigation();

  const navigateToLogin = useCallback(() => {
    navigation.navigate(ROUTES.LOGIN);
  }, [navigation]);

  return (
    <Header>
      <>
        <View />
        <View>
          <View />
          {isAuthenticated && <Button>SHARE</Button>}
          {!isAuthenticated && (
            <Button onPress={navigateToLogin}>LOGIN/REGISTER</Button>
          )}
        </View>
      </>
    </Header>
  );
};

export default memo(HomeHeader);
