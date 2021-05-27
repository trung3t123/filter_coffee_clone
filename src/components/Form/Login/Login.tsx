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
import { Button } from 'react-native-paper';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import Colors from 'utils/colors';
import FormStyles from 'theme/FormStyles';
import { login } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import CommonStyles from 'theme/CommonStyles';
import { doNothing } from 'constants/default-values';
import { passwordValidator } from 'utils/validators';
import SessionSelector from 'data/session/selectors';

import styles from '../styles';
import FormTextInput from '../FormTextInput';
import ROUTES from 'routes/names';

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
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    // isSubmitting,
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

  const onNavigateToRegister = useCallback(() => {
    onReset();
    navigation.navigate(ROUTES.REGISTER);
  }, [navigation, onReset]);

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
            loading={loginLoading}
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
            <Text>{"DON'T HAVE ACCOUNT?"}</Text>
            <Button
              onPress={onNavigateToRegister}
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
