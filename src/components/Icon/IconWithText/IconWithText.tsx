import React, { memo } from 'react';
import { View, StyleSheet, TextStyle, ViewStyle, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'utils/colors';
import CommonFonts from 'theme/CommonFonts';

type IconWithText = {
  styleContainerIcon?: ViewStyle;
  iconColor: string;
  iconName: string;
  sizeIcon?: number;
  textStyle?: TextStyle;
  textPosition?: 'right' | 'left';
  title?: string;
};

const IconWithText = ({
  styleContainerIcon,
  iconColor,
  iconName,
  sizeIcon,
  textStyle,
  textPosition = 'right',
  title,
}: IconWithText) => {
  const isTextPositionOnLeftIcon = textPosition === 'left';

  return (
    <View style={[styles.containerIcon, styleContainerIcon]}>
      {isTextPositionOnLeftIcon && (
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      )}

      <Icon name={iconName} color={iconColor} size={sizeIcon} />

      {!isTextPositionOnLeftIcon && (
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
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
