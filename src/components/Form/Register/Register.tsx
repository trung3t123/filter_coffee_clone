import React, { memo, Ref, useCallback, useState } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';

import ROUTES from 'routes/names';
import Colors from 'utils/colors';
import FormStyles from 'theme/FormStyles';
import { ActionDispatcher } from 'data/types';
import CommonStyles from 'theme/CommonStyles';
import { passwordValidator } from 'utils/validators';
import SessionSelector from 'data/session/selectors';

import styles from '../styles';
import FormTextInput from '../FormTextInput';

const FormSchema = Yup.object().shape({
  password: passwordValidator,
  confirmPassword: Yup.string()
    .required('Confirm password can not be empty!')
    .oneOf(
      [Yup.ref('password'), null],
      'Your Confirm password not match password',
    ),
  email: Yup.string()
    .email('Invalid email')
    .required('Email can not be empty!'),
  first_name: Yup.string().required('First name can not be empty!'),
  last_name: Yup.string().required('Last name can not be empty!'),
});

interface RegisterFormValues {
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  middle_name: string;
  last_name: string;
}

const registerFormInitialValues: RegisterFormValues = {
  email: '',
  password: '',
  confirm_password: '',
  first_name: '',
  middle_name: '',
  last_name: '',
};

const RegisterForm = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch: ActionDispatcher = useDispatch();
  const loading = useSelector(SessionSelector.isOnRegisterProcessSelector);
  const scrollViewRef: Ref<ScrollView> = React.useRef(null);

  const onSubmit = useCallback(async (values: RegisterFormValues) => {
    setErrorMessage('');
    try {
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  const formik = useFormik({
    validationSchema: FormSchema,
    initialValues: registerFormInitialValues,
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
    isValid,
  } = formik;

  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onReset = useCallback(() => {
    Keyboard.dismiss();
    scrollViewRef?.current?.scrollTo({ y: 0 });
    setTimeout(() => {
      setErrorMessage('');
      handleReset(null);
    }, 100);
  }, [handleReset]);

  const onNavigateToLogin = useCallback(() => {
    onReset();
    navigation.navigate(ROUTES.LOGIN);
  }, [navigation, onReset]);

  return (
    <ScrollView
      bounces={false}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      ref={scrollViewRef}
      overScrollMode="always">
      <View style={FormStyles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{'REGISTER'}</Text>
        </View>

        <View style={FormStyles.field}>
          <FormTextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder={'your.email@gmail.com'}
            placeholderTextColor={Colors.lightGrey}
          />
          <Text style={FormStyles.errorText}>
            {touched.email ? errors.email : null}
          </Text>
        </View>

        <View style={FormStyles.field}>
          <FormTextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={values.first_name}
            onChangeText={handleChange('first_name')}
            onBlur={handleBlur('first_name')}
            placeholder={'Thuan'}
            placeholderTextColor={Colors.lightGrey}
          />
          <Text style={FormStyles.errorText}>
            {touched.first_name ? errors.first_name : null}
          </Text>
        </View>

        <View style={FormStyles.field}>
          <FormTextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={values.middle_name}
            onChangeText={handleChange('middle_name')}
            onBlur={handleBlur('middle_name')}
            placeholder={'Duc'}
            placeholderTextColor={Colors.lightGrey}
          />
          <Text style={FormStyles.errorText}>
            {touched.middle_name ? errors.middle_name : null}
          </Text>
        </View>

        <View style={FormStyles.field}>
          <FormTextInput
            autoCapitalize="none"
            autoCorrect={false}
            value={values.last_name}
            onChangeText={handleChange('last_name')}
            onBlur={handleBlur('last_name')}
            placeholder={'Nguyen'}
            placeholderTextColor={Colors.lightGrey}
          />
          <Text style={FormStyles.errorText}>
            {touched.last_name ? errors.last_name : null}
          </Text>
        </View>

        <View style={FormStyles.field}>
          <FormTextInput.Password
            autoCapitalize="none"
            autoCorrect={false}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder={'password'}
            placeholderTextColor={Colors.lightGrey}
            textContentType="newPassword"
            blurOnSubmit={false}
            onSubmitEditing={onSubmitEditing}
          />
          <Text style={FormStyles.errorText}>
            {touched.password ? errors.password : null}
          </Text>
        </View>

        <View style={FormStyles.field}>
          <FormTextInput.Password
            autoCapitalize="none"
            autoCorrect={false}
            value={values.confirm_password}
            onChangeText={handleChange('confirm_password')}
            onBlur={handleBlur('confirm_password')}
            placeholder={'Confirm password'}
            placeholderTextColor={Colors.lightGrey}
            textContentType="password"
            blurOnSubmit={false}
            onSubmitEditing={onSubmitEditing}
          />
          <Text style={FormStyles.errorText}>
            {touched.confirm_password ? errors.confirm_password : null}
          </Text>
        </View>

        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <Button
          loading={loading}
          disabled={!isValid}
          onPress={handleSubmit}
          mode="contained"
          color={Colors.main}
          labelStyle={FormStyles.buttonLabel}
          contentStyle={FormStyles.buttonContent}
          style={[FormStyles.button, styles.buttonSubmit]}>
          {'REGISTER'}
        </Button>

        <View style={CommonStyles.rowSpaceBetween}>
          <Text>{'ALREADY HAVE AN ACCOUNT?'}</Text>
          <Button
            onPress={onNavigateToLogin}
            mode="contained"
            color={Colors.lightGrey}
            labelStyle={[FormStyles.buttonLabel, styles.buttonSecondaryLabel]}
            contentStyle={FormStyles.buttonContent}
            style={FormStyles.button}>
            {'LOGIN'}
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(RegisterForm);
