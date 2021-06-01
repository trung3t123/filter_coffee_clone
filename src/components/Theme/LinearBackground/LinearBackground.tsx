import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles from 'theme/CommonStyles';

var styles = StyleSheet.create({
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

type PropTypes = {
  radiusLiner?: number;
};

const LinearBackground: React.FC<PropTypes> = ({ radiusLiner }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={CommonStyles.mainLinerGradientColor}
      style={[styles.linearGradient, { borderRadius: radiusLiner }]}
    />
  );
};

export default memo(LinearBackground);
