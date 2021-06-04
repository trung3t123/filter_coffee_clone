import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from 'theme/CommonStyles';
import Colors from 'utils/colors';
import CacheImage from 'components/Image/CacheImage';

const sizeViewOptionTheme =
  CommonWidths.windowWidth / 2 - CommonWidths.baseSpaceHorizontal * 1.5;

type OptimeThemeProps = {
  onPress?: () => void;
  isActive?: boolean;
  nameIcon: string;
  title: string;
  image?: boolean;
};

const imageIcon: {
  [key: string]: any;
} = {
  software: require('../../../assets/software.png'),
  ['food&drink']: require('../../../assets/food&drink.png'),
  network: require('../../../assets/network.png'),
  sports: require('../../../assets/sports.png'),
  eCommerce: require('../../../assets/eCommerce.png'),
  fintech: require('../../../assets/fintech.png'),
};

const OptionTheme: React.FC<OptimeThemeProps> = ({
  onPress,
  isActive,
  nameIcon,
  title,
  image,
}) => {
  const isOpacityActive = { opacity: isActive ? 1 : 0.75 };

  return (
    <View style={styles.container}>
      {isActive && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={CommonStyles.mainLinerGradientColor}
          style={styles.linearGradient}
        />
      )}
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.content}>
          {image ? (
            <CacheImage
              resizeMode="stretch"
              source={imageIcon[nameIcon] as any}
              imageStyle={{
                height: CommonWidths.res27,
                width: CommonWidths.res27,
                ...isOpacityActive,
              }}
            />
          ) : (
            <Icon
              name={nameIcon}
              size={CommonWidths.res27}
              color={Colors.white}
              style={isOpacityActive}
            />
          )}
          <Text style={[styles.text, isOpacityActive]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default memo(OptionTheme);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorComponent,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: sizeViewOptionTheme,
    height: sizeViewOptionTheme,
    margin: CommonWidths.res5,
    padding: 1,
  },
  text: {
    fontFamily: FontFamily.DMSans.medium,
    fontSize: CommonFonts.res15,
    fontWeight: '500',
    color: Colors.white,
    marginTop: CommonHeights.res20,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,

    width: sizeViewOptionTheme,
    height: sizeViewOptionTheme,
    borderRadius: 15,
  },
});
