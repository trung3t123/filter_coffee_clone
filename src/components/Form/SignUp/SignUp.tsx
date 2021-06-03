import React, { memo, useCallback } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import Colors from 'utils/colors';
import FormStyles from 'theme/FormStyles';
import { signUp } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import { passwordValidator } from 'utils/validators';
import SessionSelector from 'data/session/selectors';

import styles from '../styles';
import FormTextInput from '../FormTextInput';
// import ROUTES from 'routes/names';
import ActionButton from 'components/Theme/ActionButton';
import ROUTES from 'routes/names';
import { HIT_SLOP } from 'theme/touch';
import GradientText from 'components/Text/LinearGradientText/LinearGradientText';

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email should not be empty!'),
  password: passwordValidator,
});

interface SignUpValues {
  email: string;
  password: string;
}

const loginFormInitialValues: SignUpValues = { email: '', password: '' };

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch: ActionDispatcher = useDispatch();

  const signUpLoading: boolean = useSelector(
    SessionSelector.isOnRegisterProcessSelector,
  );

  const navigateToCreateName = useCallback(() => {
    navigation.navigate(ROUTES.CREATE_USER_NAME);
  }, [navigation]);

  const navigateToLogin = useCallback(() => {
    navigation.navigate(ROUTES.LOGIN);
  }, [navigation]);

  const onSubmit = useCallback(
    async (values: SignUpValues) => {
      try {
        const { email = '', password = '' } = values ?? {};
        const { error, success } = await dispatch(signUp({ email, password }));

        if (error) {
          throw new Error(error);
        }

        if (success) {
          navigateToCreateName();
        }
      } catch (error) {
        console.warn('onSubmit Register', { error });
      }
    },
    [navigateToCreateName, dispatch],
  );

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: loginFormInitialValues,
    onSubmit,
    validateOnBlur: false,
  });

  const { values, handleChange, handleBlur, handleSubmit, errors } = formik;
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
            <Text style={styles.titleText}>{'Let’s\nget started'}</Text>
          </View>
          <View style={styles.contentForm}>
            {/* email field */}
            <View>
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
            </View>

            {/* submit button */}
            <View style={styles.viewButton}>
              <ActionButton
                loading={signUpLoading}
                onPress={handleSubmit}
                text={'Sign Up'}
              />

              <View style={styles.viewGoLogin}>
                <Text style={styles.subtitleText}>Already an member?</Text>
                <TouchableOpacity
                  hitSlop={HIT_SLOP.SIZE20}
                  onPress={navigateToLogin}>
                  <GradientText style={styles.subtitleText}>Login</GradientText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(SignUp);
