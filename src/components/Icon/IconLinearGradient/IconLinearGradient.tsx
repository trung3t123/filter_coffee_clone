import React, { memo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { IconProps } from 'react-native-vector-icons/Icon';
import MaskedView from '@react-native-community/masked-view';

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
    <MaskedView maskElement={<Icon {...props} />}>
      <LinearGradient
        colors={props.linerColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Icon {...props} style={[props.style, { opacity: opacity }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default memo(IconLinearGradient);
