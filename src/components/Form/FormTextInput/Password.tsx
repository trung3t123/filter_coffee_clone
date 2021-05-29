import React, { memo, useState, useCallback } from 'react';
import { TextInputProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import Colors from 'utils/colors';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from 'theme/CommonStyles';
import CommonFonts from 'theme/CommonFonts';

interface PropTypes extends TextInputProps {
  nameIconLeft: string;
}

export interface PasswordInput extends React.FC<PropTypes> {}

const Password: PasswordInput = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEnableGradient, setEnableGradient] = useState(false);

  const onSetEnableGradient = useCallback(
    () => setEnableGradient(state => !state),
    [setEnableGradient],
  );
  const toggleSecureTextEntry = useCallback(
    () => setSecureTextEntry(state => !state),
    [setSecureTextEntry],
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
          colors={CommonStyles.mainLinerGradientColor}
          style={styles.linearGradient}
        />
      ) : null}
      {props.nameIconLeft && (
        <Icon
          name={props.nameIconLeft}
          size={CommonFonts.res18}
          color={Colors.gray}
          style={styles.iconLeft}
          onPress={toggleSecureTextEntry}
        />
      )}
      <Icon
        name={secureTextEntry ? 'eye' : 'eye-off'}
        size={CommonFonts.res18}
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
