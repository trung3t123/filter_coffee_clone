import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'utils/colors';
import CommonFonts from 'theme/CommonFonts';
import CommonWidths from 'theme/CommonWidths';
import FastImage from 'react-native-fast-image';

declare type Source = {
  uri?: string;
  headers?: {
    [key: string]: string;
  };
};

type IconWithText = {
  styleContainerIcon?: ViewStyle;
  iconColor: string;
  iconName: string;
  sizeIcon?: number;
  textStyle?: TextStyle;
  textPosition?: 'right' | 'left';
  title: string | number;
  isLoading?: boolean;
  image?: boolean;
};

const imageLink: {
  [key: string]: string;
} = {
  heart: require('../../../../assets/heart.png'),
  ['message-circle']: require('../../../../assets/comment.png'),
  ['share-2']: require('../../../../assets/network.png'),
};

const IconWithText = ({
  styleContainerIcon,
  iconColor,
  iconName,
  sizeIcon,
  textStyle,
  textPosition = 'right',
  title,
  isLoading,
  image,
}: IconWithText) => {
  const isTextPositionOnLeftIcon = textPosition === 'left';

  const sourceImage =
    iconName in imageLink ? imageLink[iconName] : imageLink.heart;

  return (
    <View style={[styles.containerIcon, styleContainerIcon]}>
      {isTextPositionOnLeftIcon && (
        <>
          {isLoading ? (
            <View style={{ width: CommonWidths.baseSpaceHorizontal }}>
              <ActivityIndicator size="small" color={Colors.white} />
            </View>
          ) : (
            <Text style={[styles.textStyle, textStyle]}>{title}</Text>
          )}
        </>
      )}

      {image ? (
        <FastImage
          resizeMode="contain"
          style={{
            height: CommonFonts.res23,
            width: CommonFonts.res23,
          }}
          source={sourceImage as Source}
        />
      ) : (
        <Icon name={iconName} color={iconColor} size={sizeIcon} />
      )}

      {!isTextPositionOnLeftIcon && (
        <>
          {isLoading ? (
            <View style={{ width: CommonWidths.baseSpaceHorizontal }}>
              <ActivityIndicator size="small" color={Colors.white} />
            </View>
          ) : (
            <Text style={[styles.textStyle, textStyle]}>{title}</Text>
          )}
        </>
      )}
    </View>
  );
};

export default memo(IconWithText);

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontSize: CommonFonts.res15,
    fontWeight: '500',
  },
});
