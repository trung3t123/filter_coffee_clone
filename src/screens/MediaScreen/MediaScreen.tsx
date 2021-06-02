import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Screen from 'utils/screen';
import Header from 'components/Header';
import CommonFonts from 'theme/CommonFonts';
import CacheImage from 'components/Image/CacheImage';
import Colors from 'utils/colors';

type PropTypes = {
  navigation: any;
};

const MediaScreen: React.FC<PropTypes> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header isAbsolute>
          <View />
          <Text style={styles.textTitle}>Media</Text>
          <View />
        </Header>
        <CacheImage
          source={require('../../../assets/Bitmap.png')}
          imageStyle={styles.imageBackground}
        />
      </View>
    </View>
  );
};

export default MediaScreen;

const styles = StyleSheet.create({
  container: {
    height: Screen.height,
    width: Screen.width,
    backgroundColor: Colors.white,
    position: 'relative',
  },

  content: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },

  textTitle: {
    color: Colors.white,
    fontSize: CommonFonts.res22,
    fontWeight: '600',
  },

  imageBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});
