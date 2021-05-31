import React, { memo } from 'react';
import { MaskedViewIOS } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { IconProps } from 'react-native-vector-icons/Icon';

const opacity = 0;

interface IconLinearGradient extends IconProps {
  linerColor: any;
  enableLiner?: boolean;
}

const IconLinearGradient = (props: IconLinearGradient) => {
  if (!props?.enableLiner) {
    return <Icon {...props} />;
  }

  return (
    <MaskedViewIOS maskElement={<Icon {...props} />}>
      <LinearGradient
        colors={props.linerColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Icon {...props} style={[props.style, { opacity: opacity }]} />
      </LinearGradient>
    </MaskedViewIOS>
  );
};

export default memo(IconLinearGradient);
