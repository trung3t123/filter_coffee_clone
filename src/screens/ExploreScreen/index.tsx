import React from 'react';
import { Text, View } from 'react-native';
import Screen from 'utils/screen';
import Header from 'components/Header';
import CommonFonts from 'theme/CommonFonts';

type PropTypes = {
  navigation: any;
};

const ExploreScreen: React.FC<PropTypes> = ({}) => {
  return (
    <View
      style={{
        height: Screen.height,
        width: Screen.width,
        backgroundColor: 'white',
      }}>
      <Header>
        <Text
          style={{
            color: 'white',
            fontSize: CommonFonts.res22,
            fontWeight: '600',
          }}>
          Explore
        </Text>
      </Header>
      <Text style={{ color: 'black' }}> Coming Soon</Text>
    </View>
  );
};

export default ExploreScreen;
