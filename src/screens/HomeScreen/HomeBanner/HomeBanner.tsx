import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import LinearBackground from 'components/Theme/LinearBackground';
import CacheImage from 'components/Image/CacheImage';

import CommonFonts from 'theme/CommonFonts';

import styles from './styles';

const HomeBanner = () => {
  return (
    <View style={styles.containerBanner}>
      <LinearBackground radiusLiner={17} />
      <Text style={styles.textTitleBanner}>
        Coffee Townhouse With Ramp Capital
        <CacheImage
          imageStyle={styles.imageCoffee}
          source={require('../../../../assets/icon_coffee.png')}
        />
      </Text>

      <View style={styles.viewBottomBanner}>
        <Text style={styles.textTimeBanner}>
          <Icon size={CommonFonts.res14} name="calendar" />
          14/21{' '}
        </Text>
        <Text style={styles.textTimeBanner}>
          <Icon size={CommonFonts.res14} name="clock" />
          09:00 pm
        </Text>
      </View>
    </View>
  );
};

export default memo(HomeBanner);
