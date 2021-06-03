import React from 'react';
import { View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';

import HomeHeader from './HomeHeader';
import HomeListPosts from './HomeListPosts';
import HomeButtonCreatePost from './HomeButtonCreatePost';

type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <HomeHeader />
      <HomeListPosts />
      <HomeButtonCreatePost />
    </View>
  );
};

export default HomeScreen;
