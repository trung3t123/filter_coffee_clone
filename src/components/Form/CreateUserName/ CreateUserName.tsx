import React, { memo, useCallback } from 'react';
import { Keyboard, ScrollView, Text, View } from 'react-native';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/core';

import Colors from 'utils/colors';
import FormStyles from 'theme/FormStyles';

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

  const onSubmit = useCallback((values: LoginFormValues) => {
    console.log('LoginFormValues', values);
  }, []);

  const navigateToCreateName = useCallback(() => {
    navigation.navigate(ROUTES.PICK_THEME);
  }, [navigation]);

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
            <Text style={styles.titleText}>
              {'Tell a bit about \nyourself'}
            </Text>
          </View>
          <View style={styles.contentForm}>
            {/* userName field */}
            <View>
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
            <View style={styles.viewButton}>
              <ActionButton
                // loading={loginLoading} // waiting API
                disabled={!isValid}
                onPress={navigateToCreateName}
                text={'Next'}
              />
            </View>
          </View>
        </View>

        {/* submit button */}
      </ScrollView>
    </>
  );
};

export default memo(CreateUserName);
