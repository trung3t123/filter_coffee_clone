import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageStyle } from 'react-native-fast-image';

import CommonStyles from 'theme/CommonStyles';
import CacheImage from '../CacheImage';

import styles from './styles';

type AvatarType = {
  uri?: string;
  avatarStyle: ImageStyle;
  isEnableGradient?: boolean;
};

const Avatar = ({ uri, avatarStyle, isEnableGradient }: AvatarType) => {
  const checkBorderRadiusLinearView = useMemo(
    () => ({ borderRadius: avatarStyle?.borderRadius || 0 }),
    [avatarStyle?.borderRadius],
  );

  return (
    <View>
      {isEnableGradient && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={CommonStyles.mainLinerGradientColor}
          style={[styles.linearGradient, checkBorderRadiusLinearView]}
        />
      )}
      <CacheImage uri={uri} imageStyle={avatarStyle} />
    </View>
  );
};

export default memo(Avatar);
