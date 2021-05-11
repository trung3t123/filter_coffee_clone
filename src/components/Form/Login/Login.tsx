import React, { memo, useCallback, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Yup from 'yup';
import Colors from 'utils/colors';
import { useFormik } from 'formik';
import FormStyles from 'theme/FormStyles';
import CommonStyles from 'theme/CommonStyles';
import { doNothing } from 'constants/default-values';
import { passwordValidator } from 'utils/validators';
import { Button } from 'react-native-paper';

import styles from './styles';
import FormTextInput from '../FormTextInput';

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email should not be empty!'),
  password: passwordValidator,
});

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (values: any) => {
    //
    console.log(values);
  };

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
    isValid,
  } = formik;

  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onReset = useCallback(() => {
    Keyboard.dismiss();
    setTimeout(() => {
      setErrorMessage('');
      handleReset(null);
      // handleRegisterClick();
    }, 100);
  }, [handleReset]);

  return (
    <>
      <ScrollView
        bounces={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        overScrollMode="always">
        <View style={styles.form}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.titleText}>{'LOGIN'}</Text>
          </View>
          {/* email field */}
          <View style={FormStyles.field}>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder={'your.email@gmail.com'}
              placeholderTextColor={Colors.lightGrey}
              keyboardType="email-address"
            />
            <Text style={FormStyles.errorText}>
              {touched.email ? errors.email : null}
            </Text>
          </View>
          {/* password field */}
          <View style={FormStyles.field}>
            <FormTextInput.Password
              autoCapitalize="none"
              autoCorrect={false}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder={'password'}
              placeholderTextColor={Colors.lightGrey}
              textContentType="password"
              blurOnSubmit={false}
              onSubmitEditing={onSubmitEditing}
            />
            <Text style={FormStyles.errorText}>
              {touched.password ? errors.password : null}
            </Text>
          </View>
          {/* forgot password */}
          <TouchableWithoutFeedback onPress={doNothing}>
            <View style={styles.mb20}>
              <Text style={styles.forgotPasswordTxt}>{'FORGOT PASSWORD'}</Text>
            </View>
          </TouchableWithoutFeedback>
          {!!errorMessage && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
          {/* submit button */}
          <Button
            loading={isSubmitting}
            disabled={!isValid}
            onPress={handleSubmit}
            mode="contained"
            color={Colors.main}
            labelStyle={FormStyles.buttonLabel}
            contentStyle={FormStyles.buttonContent}
            style={[FormStyles.button, styles.buttonSubmit]}>
            {'LOGIN'}
          </Button>

          {/* register navigate */}
          <View style={CommonStyles.rowSpaceBetween}>
            <Text>{'CREATE AN ACCOUNT'}</Text>
            <Button
              onPress={onReset}
              mode="contained"
              color={Colors.lightGrey}
              labelStyle={[FormStyles.buttonLabel, styles.buttonSecondaryLabel]}
              contentStyle={FormStyles.buttonContent}
              style={FormStyles.button}>
              {'REGISTER'}
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(Login);
