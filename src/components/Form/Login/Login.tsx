import React, { memo, useCallback, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import Colors from 'utils/colors';
import FormStyles from 'theme/FormStyles';
import { login } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import { doNothing } from 'constants/default-values';
import { passwordValidator } from 'utils/validators';
import SessionSelector from 'data/session/selectors';

import styles from '../styles';
import FormTextInput from '../FormTextInput';
// import ROUTES from 'routes/names';
import ActionButton from 'components/Theme/ActionButton';

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email should not be empty!'),
  password: passwordValidator,
});

interface LoginFormValues {
  email: string;
  password: string;
}

const loginFormInitialValues: LoginFormValues = { email: '', password: '' };

const Login = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch: ActionDispatcher = useDispatch();
  const loginLoading = useSelector(SessionSelector.isOnLoginProcessSelector);

  const onSubmit = useCallback(
    async (values: LoginFormValues) => {
      console.log('LoginFormValues', values);
      try {
        const { email = '', password = '' } = values ?? {};
        const { error, success } = await dispatch(login({ email, password }));

        console.log('------->result', error, success);

        if (error) {
          throw new Error(error);
        }

        if (success) {
          navigation.goBack();
        }
      } catch (error) {
        console.warn('onSubmit LoginForm', { error });
        setErrorMessage(error.message);
      }
    },
    [navigation, dispatch],
  );

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: loginFormInitialValues,
    onSubmit,
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    // isSubmitting,
    isValid,
  } = formik;

  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <>
      <ScrollView
        bounces={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
        contentContainerStyle={styles.contentContainerStyleFlatList}>
        <View style={styles.form}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.titleText}>{'Hey\nWelcome back'}</Text>
          </View>
          {/* email field */}
          <View style={FormStyles.field}>
            <FormTextInput.IconLeftTextInput
              nameIconLeft="mail"
              autoCapitalize="none"
              autoCorrect={false}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder={'your.email@gmail.com'}
              placeholderTextColor={Colors.lightGrey}
              keyboardType="email-address"
            />
          </View>
          {/* password field */}
          <View style={FormStyles.field}>
            <FormTextInput.Password
              nameIconLeft="lock"
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
          </View>

          {/* forgot password */}
          <TouchableWithoutFeedback onPress={doNothing}>
            <View style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordTxt}>{'Forgot password?'}</Text>
            </View>
          </TouchableWithoutFeedback>
          {!!errorMessage && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
        </View>

        {/* submit button */}
        <View style={styles.buttonLogin}>
          <ActionButton
            loading={loginLoading}
            disabled={!isValid}
            onPress={handleSubmit}
            text={'Login'}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default memo(Login);
