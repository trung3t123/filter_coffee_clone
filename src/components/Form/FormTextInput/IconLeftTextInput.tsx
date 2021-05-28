import React, { memo, useState, useCallback } from 'react';
import { TextInputProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import Colors from 'utils/colors';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes extends TextInputProps {
  nameIconLeft: string;
}

export interface IconLeftProps extends React.FC<PropTypes> {}

const IconLeftTextInput: IconLeftProps = props => {
  const [isEnableGradient, setEnableGradient] = useState(false);

  const onSetEnableGradient = useCallback(
    () => setEnableGradient(state => !state),
    [setEnableGradient],
  );

  const onFocus = useCallback(() => {
    onSetEnableGradient();
  }, [onSetEnableGradient]);

  const onEndEditing = useCallback(() => {
    onSetEnableGradient();
  }, [onSetEnableGradient]);

  return (
    <View style={styles.container}>
      {isEnableGradient ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#00AEFF', '#875BFF']}
          style={styles.linearGradient}
        />
      ) : null}
      <Icon
        name={props.nameIconLeft}
        size={18}
        color={Colors.gray}
        style={styles.iconLeft}
      />
      <TextInput
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        style={[styles.input, styles.paddingLeft]}
        {...props}
      />
    </View>
  );
};

IconLeftTextInput.displayName = 'IconLeftTextInput';

export default memo(IconLeftTextInput);
