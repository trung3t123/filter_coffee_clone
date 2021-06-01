import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Screen from 'utils/screen';
import Header from 'components/Header';
import CommonFonts from 'theme/CommonFonts';

type PropTypes = {
  navigation: any;
};

const ExploreScreen: React.FC<PropTypes> = ({}) => {
  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.titleHeader}>Explore</Text>
      </Header>
      <Text> Coming Soon</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    height: Screen.height,
    width: Screen.width,
    backgroundColor: 'white',
  },

  titleHeader: {
    color: 'white',
    fontSize: CommonFonts.res22,
    fontWeight: '600',
  },
});
