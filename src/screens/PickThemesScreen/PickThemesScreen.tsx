/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import styles from './styles';
import Header from 'components/Header';
import ListOptionThemes from './ListOptionThemes';
import ActionButton from 'components/Theme/ActionButton';
import { useDispatch } from 'react-redux';
import { updateFollowTheme } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'routes/names';

const PickThemesScreen = () => {
  const [optionThemePicked, pickOptionTheme] = useState<string[]>([]);
  const [isOnProgressPickTheme, setIsOnProgressPickTheme] = useState<boolean>();
  const dispatch: ActionDispatcher = useDispatch();
  const navigation = useNavigation();

  const pickThemeCompleted = useCallback(async () => {
    if (optionThemePicked.length === 0) {
      Alert.alert('Notice', 'Please pick a theme to continue');
      return;
    }
    setIsOnProgressPickTheme(true);
    try {
      const { success, error } = await dispatch(
        updateFollowTheme({ themeKey: optionThemePicked }),
      );

      if (success) {
        navigation.navigate(ROUTES.BASE);
      }

      if (error) {
        setIsOnProgressPickTheme(false);
        navigation.navigate(ROUTES.BASE);
        throw new Error(error);
      }
    } catch (error) {
      setIsOnProgressPickTheme(false);
      navigation.navigate(ROUTES.BASE);
      Alert.alert('Error', error);
    }
  }, [
    dispatch,
    optionThemePicked.length,
    setIsOnProgressPickTheme,
    navigation,
  ]);

  const onPickOptionTheme = useCallback(
    (value: string) => {
      pickOptionTheme(state => {
        if (state.includes(value)) {
          return state.filter(optionTheme => optionTheme !== value);
        }
        return [...state, value];
      });
    },
    [pickOptionTheme],
  );

  return (
    <View style={styles.container}>
      <Header isGoBack />
      <ScrollView contentContainerStyle={styles.contentContainerStyleFlatList}>
        <View style={styles.header}>
          <Text style={styles.textTitle}>
            {'Pick theme you\nwant to follow'}
          </Text>
        </View>
        <ListOptionThemes
          onPickOptionTheme={onPickOptionTheme}
          optionThemePicked={optionThemePicked}
        />
        <View style={styles.viewButton}>
          <ActionButton
            loading={isOnProgressPickTheme}
            onPress={pickThemeCompleted}
            text={'Next'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PickThemesScreen;
