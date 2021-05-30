import React, { memo } from 'react';
import { View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import SignUp from 'components/Form/SignUp';
import Header from 'components/Header';

const SignUpScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <Header isGoBack />
      <SignUp />
    </View>
  );
};

export default memo(SignUpScreen);
