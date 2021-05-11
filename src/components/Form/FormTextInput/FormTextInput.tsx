import React from 'react';
import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Password, { PasswordInput } from './Password';
import styles from './styles';

interface PropTypes extends TextInputProps {}

interface FormTextInputType extends React.FC<PropTypes> {
  Password: PasswordInput;
}

const FormTextInput: FormTextInputType = (props: any) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

FormTextInput.Password = Password;

export default FormTextInput;
