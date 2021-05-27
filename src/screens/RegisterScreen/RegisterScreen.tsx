import React, { memo } from 'react';

import { SafeAreaView, View } from 'react-native';
import CommonStyles from 'theme/CommonStyles';
import Register from 'components/Form/Register';

const RegisterScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <Register />
      </SafeAreaView>
    </View>
  );
};

export default memo(RegisterScreen);
