import React, { useState, useCallback } from 'react';
import { TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Password, { PasswordInput } from './Password';
import IconLeftTextInput, { IconLeftProps } from './IconLeftTextInput';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from 'theme/CommonStyles';

interface PropTypes extends TextInputProps {}

interface FormTextInputType extends React.FC<PropTypes> {
  Password: PasswordInput;
  IconLeftTextInput: IconLeftProps;
}

const FormTextInput: FormTextInputType = (props: any) => {
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
          colors={CommonStyles.mainLinerGradientColor}
          style={styles.linearGradient}
        />
      ) : null}
      <TextInput
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

FormTextInput.Password = Password;
FormTextInput.IconLeftTextInput = IconLeftTextInput;

export default FormTextInput;
