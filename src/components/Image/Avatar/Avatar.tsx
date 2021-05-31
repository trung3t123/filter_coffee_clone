import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles from 'theme/CommonStyles';
import CacheImage from '../CacheImage';
import { ImageStyle } from 'react-native-fast-image';

import styles from './styles';

type AvatarType = {
  uri?: string;
  avatarStyle: ImageStyle;
  radiusAvatar?: number;
  isEnableGradient?: boolean;
};

const Avatar = ({
  uri,
  avatarStyle,
  isEnableGradient,
  radiusAvatar,
}: AvatarType) => {
  const radiusBorder = useMemo(() => ({ borderRadius: radiusAvatar || 0 }), [
    radiusAvatar,
  ]);

  const imageStyle = useMemo(() => ({ ...avatarStyle, ...radiusBorder }), [
    avatarStyle,
    radiusBorder,
  ]);

  return (
    <View>
      {isEnableGradient && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={CommonStyles.mainLinerGradientColor}
          style={[styles.linearGradient, radiusBorder]}
        />
      )}
      <CacheImage uri={uri} imageStyle={imageStyle} />
    </View>
  );
};

export default memo(Avatar);
