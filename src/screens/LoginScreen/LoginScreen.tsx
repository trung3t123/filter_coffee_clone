import React, { memo } from 'react';
import { View } from 'react-native';

import Login from 'components/Form/Login/Login';
import CommonStyles from 'theme/CommonStyles';
import Header from 'components/Header';

const LoginScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <Header isGoBack={true} />
      <Login />
    </View>
  );
};

export default memo(LoginScreen);
