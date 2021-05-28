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
import { passwordValidator } from 'utils/validators';
import SessionSelector from 'data/session/selectors';

import styles from '../styles';
import FormTextInput from '../FormTextInput';
// import ROUTES from 'routes/names';
import ActionButton from 'components/Theme/ActionButton';
import ROUTES from 'routes/names';
import { HIT_SLOP } from 'theme/touch';

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

const SignUp = () => {
  const navigation = useNavigation();
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
      }
    },
    [navigation, dispatch],
  );

  const navigateToCreateName = () => {
    navigation.navigate(ROUTES.CREATE_USER_NAME); // Real
  };

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: loginFormInitialValues,
    onSubmit,
  });

  const {
    values,
    handleChange,
    handleBlur,
    // handleSubmit,
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
            </View>
            {/* submit button */}
            <View style={styles.viewButton}>
              <ActionButton
                loading={loginLoading}
                disabled={!isValid}
                onPress={navigateToCreateName}
                text={'Sign Up'}
              />
              <TouchableWithoutFeedback
                hitSlop={HIT_SLOP.SIZE20}
                onPress={() => console.log(123)}>
                <Text style={styles.subtitleText}>
                  Already an member? <Text>Login</Text>
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(SignUp);
