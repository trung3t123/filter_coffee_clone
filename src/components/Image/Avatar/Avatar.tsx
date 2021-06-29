import React, { memo, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageStyle } from 'react-native-fast-image';

import CommonStyles from 'theme/CommonStyles';
import CacheImage from '../CacheImage';

import styles from './styles';
import Colors from 'utils/colors';

type AvatarType = {
  uri?: string | null | undefined;
  avatarStyle: ImageStyle;
  isEnableGradient?: boolean;
  isLoading?: boolean;
};

const Avatar = ({
  uri,
  avatarStyle,
  isEnableGradient,
  isLoading,
}: AvatarType) => {
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
      {isLoading ? (
        <ActivityIndicator
          style={avatarStyle}
          size="small"
          color={Colors.white}
        />
      ) : (
        <CacheImage uri={uri} imageStyle={avatarStyle} />
      )}
    </View>
  );
};

export default memo(Avatar);
