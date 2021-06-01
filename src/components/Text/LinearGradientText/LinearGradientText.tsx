import React, { memo } from 'react';
import { MaskedViewIOS, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'utils/colors';

const opacity = 0;

const GradientText = (props: any) => (
  <MaskedViewIOS maskElement={<Text {...props} />}>
    <LinearGradient
      colors={[Colors.mainGradientStart, Colors.mainGradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <Text {...props} style={[props.style, { opacity: opacity }]} />
    </LinearGradient>
  </MaskedViewIOS>
);

export default memo(GradientText);
