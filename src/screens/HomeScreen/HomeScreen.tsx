import React from 'react';
import { SafeAreaView, View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import HomeHeader from './HomeHeader';

type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <HomeHeader />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
