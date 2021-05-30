import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import Introduce from 'screens/IntroduceScreen/Introduce';
import CommonStyles from 'theme/CommonStyles';

const IntroduceScreen = () => {
  return (
    <View style={CommonStyles.flex1}>
      <Header />
      <Introduce />
    </View>
  );
};

export default IntroduceScreen;
