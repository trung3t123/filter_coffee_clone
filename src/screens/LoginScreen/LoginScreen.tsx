import React, { memo } from 'react';

import Login from 'components/Form/Login/Login';
import { SafeAreaView, View } from 'react-native';
import CommonStyles from 'theme/CommonStyles';

const LoginScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <Login />
      </SafeAreaView>
    </View>
  );
};

export default memo(LoginScreen);
