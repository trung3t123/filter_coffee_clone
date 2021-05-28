import React, { memo, useState } from 'react';
import { TextInputProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import Colors from 'utils/colors';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes extends TextInputProps {
  nameIconLeft: string;
}

export interface PasswordInput extends React.FC<PropTypes> {}

const Password: PasswordInput = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEnableGradient, setEnableGradient] = useState(false);

  const onSetEnableGradient = () => setEnableGradient(state => !state);
  const toggleSecureTextEntry = () => setSecureTextEntry(state => !state);

  const onFocus = () => {
    onSetEnableGradient();
  };

  const onEndEditing = () => {
    onSetEnableGradient();
  };

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
      {props.nameIconLeft && (
        <Icon
          name={props.nameIconLeft}
          size={18}
          color={Colors.gray}
          style={styles.iconLeft}
          onPress={toggleSecureTextEntry}
        />
      )}
      <Icon
        name={secureTextEntry ? 'eye' : 'eye-off'}
        size={18}
        color={Colors.gray}
        style={styles.icon}
        onPress={toggleSecureTextEntry}
      />
      <TextInput
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        style={[
          styles.input,
          styles.passwordInput,
          props.nameIconLeft ? styles.paddingLeft : {},
        ]}
        {...props}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={false}
      />
    </View>
  );
};

Password.displayName = 'Password';

export default memo(Password);
