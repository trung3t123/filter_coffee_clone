import React, { memo, useCallback } from 'react';
import { Keyboard, ScrollView, Text, View } from 'react-native';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import Colors from 'utils/colors';
import FormStyles from 'theme/FormStyles';
import SessionSelector from 'data/session/selectors';

import styles from '../styles';
import FormTextInput from '../FormTextInput';
import ActionButton from 'components/Theme/ActionButton';
import ROUTES from 'routes/names';

const FormSchema = Yup.object().shape({
  userName: Yup.string().required('User name should not be empty!'),
  fullName: Yup.string().required('Full name should not be empty!'),
});

interface LoginFormValues {
  userName: string;
  fullName: string;
}

const loginFormInitialValues: LoginFormValues = { userName: '', fullName: '' };

const CreateUserName = () => {
  const navigation = useNavigation();

  const loginLoading = useSelector(SessionSelector.isOnLoginProcessSelector);

  const onSubmit = async (values: LoginFormValues) => {
    console.log('LoginFormValues', values);
  };

  const navigateToCreateName = () => {
    navigation.navigate(ROUTES.LOGIN);
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
        <View style={styles.form}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.titleText}>
              {'Tell a bit about \nyourself'}
            </Text>
          </View>
          {/* userName field */}
          <View style={FormStyles.field}>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              value={values.userName}
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              placeholder={'Username'}
              placeholderTextColor={Colors.lightGrey}
            />
          </View>
          {/* fullName field */}
          <View style={FormStyles.field}>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              placeholder={'Full name'}
              placeholderTextColor={Colors.lightGrey}
              blurOnSubmit={false}
              onSubmitEditing={onSubmitEditing}
            />
          </View>
        </View>

        {/* submit button */}
        <View style={styles.buttonLogin}>
          <ActionButton
            loading={loginLoading}
            disabled={!isValid}
            onPress={navigateToCreateName}
            text={'Next'}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default memo(CreateUserName);
