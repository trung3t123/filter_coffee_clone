import React, { memo, useCallback } from 'react';
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
  const dispatch: ActionDispatcher = useDispatch();
  const loginLoading: boolean = useSelector(
    SessionSelector.isOnLoginProcessSelector,
  );

  const onLoginSuccess = useCallback(() => {
    navigation.navigate(ROUTES.BASE);
  }, [navigation]);

  const onNavigateToCreateName = useCallback(() => {
    navigation.navigate(ROUTES.CREATE_USER_NAME);
  }, [navigation]);

  const onSubmit = useCallback(
    async (values: LoginFormValues) => {
      try {
        const { email = '', password = '' } = values ?? {};
        const { error, success } = await dispatch(login({ email, password }));

        if (error === 'No Name') {
          onNavigateToCreateName();
          return;
        }

        if (error) {
          throw new Error(error);
        }

        if (success) {
          onLoginSuccess();
        }
      } catch (error) {
        console.warn('onSubmit LoginForm', { error });
      }
    },
    [dispatch, onLoginSuccess, onNavigateToCreateName],
  );

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: loginFormInitialValues,
    onSubmit,
    validateOnBlur: false,
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    // isSubmitting,
  } = formik;

  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const errorMessage = errors.password || errors.email;

  return (
    <>
      <ScrollView
        bounces={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
        contentContainerStyle={styles.contentContainerStyleFlatList}>
        <View style={styles.content}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.titleText}>{'Hey\nWelcome back'}</Text>
          </View>
          <View style={styles.contentForm}>
            <View>
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

              {errorMessage && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}

              {/* forgot password */}
              <TouchableWithoutFeedback onPress={doNothing}>
                <View style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordTxt}>
                    {'Forgot password?'}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            {/* submit button */}
            <View style={styles.viewButton}>
              <ActionButton
                loading={loginLoading}
                onPress={handleSubmit}
                text={'Login'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(Login);
