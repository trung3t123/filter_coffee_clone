import React from 'react';
import { View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import HomeHeader from './HomeHeader';

type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;
