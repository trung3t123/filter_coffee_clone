import React, { memo } from 'react';
import {
  Text,
  View,
  Image,
  ViewStyle,
  ImageProps,
  TextStyle,
  ImageStyle,
} from 'react-native';

import styles from './styles';

export interface PropTypes {
  title?: string;
  style?: ViewStyle;
  iconStyle?: ImageStyle;
  image?: ImageProps;
  textStyle?: TextStyle;
}

const NotFound: React.FC<PropTypes> = ({
  title = '',
  style,
  iconStyle,
  image,
  textStyle,
}) => (
  <View pointerEvents="none" style={[styles.container, style]}>
    {!!image && (
      <Image
        resizeMethod="resize"
        resizeMode="contain"
        source={image}
        style={[styles.iconImage, iconStyle]}
      />
    )}
    <Text style={[styles.textEmpty, textStyle]}>{title}</Text>
  </View>
);

export default memo(NotFound);
