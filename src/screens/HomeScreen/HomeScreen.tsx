import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import CommonWidths from 'theme/CommonWidths';
import CommonHeights from 'theme/CommonHeights';

import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import HomeListPosts from './HomeListPosts';
import HomeButtonCreatePost from './HomeButtonCreatePost';
import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';

type PropTypes = {};

const HomeScreen: React.FC<PropTypes> = () => {
  return (
    <View style={CommonStyles.container}>
      <HomeHeader />
      <HomeBanner />
      <Text style={styles.titleFlatList}>Trending 🔥</Text>
      <HomeListPosts />
      <HomeButtonCreatePost />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleFlatList: {
    color: Colors.white,
    marginTop: CommonHeights.res15,
    marginBottom: CommonHeights.res20,
    fontWeight: '500',
    fontSize: CommonFonts.res17,
    marginHorizontal: CommonWidths.baseSpaceHorizontal,
  },
});
