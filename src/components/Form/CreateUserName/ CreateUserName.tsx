import React, { memo, useCallback, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { updateUserName } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';

const FormSchema = Yup.object().shape({
  userName: Yup.string().required('User name should not be empty!'),
  fullName: Yup.string().required('Full name should not be empty!'),
});

interface updateUserNameValue {
  userName: string;
  fullName: string;
}

const loginFormInitialValues: updateUserNameValue = {
  userName: '',
  fullName: '',
};

const CreateUserName = () => {
  const navigation = useNavigation();
  const [
    isOnProgressUpdateUserName,
    setIsOnProgressUpdateUserName,
  ] = useState<boolean>();
  const dispatch: ActionDispatcher = useDispatch();

  const onSubmit = useCallback(
    async (values: updateUserNameValue) => {
      try {
        setIsOnProgressUpdateUserName(true);
        const { userName = '', fullName = '' } = values ?? {};
        const { success, error } = await dispatch(
          updateUserName({ userName, fullName }),
        );

        if (error) {
          setIsOnProgressUpdateUserName(false);
          throw new Error(error);
        }

        if (success) {
          setIsOnProgressUpdateUserName(false);
          navigation.navigate(ROUTES.PICK_THEME);
        }
      } catch (error) {
        setIsOnProgressUpdateUserName(false);
      }
    },
    [navigation, dispatch, setIsOnProgressUpdateUserName],
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
    errors,
  } = formik;

  const onSubmitEditing = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const errorMessage = errors.userName || errors.fullName;

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
              {errorMessage && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              )}
            </View>
            <View style={styles.viewButton}>
              <ActionButton
                loading={isOnProgressUpdateUserName}
                onPress={handleSubmit}
                text={'Next'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(CreateUserName);
