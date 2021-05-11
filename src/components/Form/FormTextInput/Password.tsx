import React, { memo, useState } from 'react';
import { TextInputProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import Colors from 'utils/colors';

import styles from './styles';

interface PropTypes extends TextInputProps {}

export interface PasswordInput extends React.FC<PropTypes> {}

const Password: PasswordInput = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureTextEntry = () => setSecureTextEntry(state => !state);
  return (
    <View style={styles.container}>
      <Icon
        name={secureTextEntry ? 'eye' : 'eye-off'}
        size={18}
        color={Colors.gray}
        style={styles.icon}
        onPress={toggleSecureTextEntry}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        {...props}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={false}
      />
    </View>
  );
};

Password.displayName = 'Password';

export default memo(Password);
