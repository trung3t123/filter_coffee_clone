import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Header from 'components/Header';
import Introduce from 'screens/IntroduceScreen/Introduce';
import CommonStyles from 'theme/CommonStyles';
import CommonHeights from 'theme/CommonHeights';
// import CacheImage from 'components/Image/CacheImage';

const IntroduceScreen = () => {
  return (
    <View style={CommonStyles.flex1}>
      <Header />
      <Introduce />
      <Image
        source={require('../../../assets/IntroduceImage.png')}
        style={styles.imageBackGround}
      />
    </View>
  );
};

export default IntroduceScreen;

const styles = StyleSheet.create({
  imageBackGround: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
    height: CommonHeights.res730,
    width: '100%',
  },
});
