import React, { memo } from 'react';
import { MaskedViewIOS } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Colors from 'utils/colors';

const opacity = 0;

const IconLinearGradient = (props: any) => (
  <MaskedViewIOS maskElement={<Icon {...props} />}>
    <LinearGradient
      colors={[Colors.mainGradientStart, Colors.mainGradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <Icon {...props} style={[props.style, { opacity: opacity }]} />
    </LinearGradient>
  </MaskedViewIOS>
);

export default memo(IconLinearGradient);
