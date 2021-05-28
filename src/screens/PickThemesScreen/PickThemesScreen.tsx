import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Header from 'components/Header';
import ListOptionThemes from './ListOptionThemes';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'routes/names';
import ActionButton from 'components/Theme/ActionButton';

const PickThemesScreen = () => {
  const [optionThemePicked, pickOptionTheme] = useState('');
  const navigation = useNavigation();

  const onPickOptionTheme = useCallback(
    value => {
      pickOptionTheme(value);
    },
    [pickOptionTheme],
  );

  const navigateToLogin = useCallback(() => {
    navigation.navigate(ROUTES.LOGIN);
  }, [navigation]);

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
          <ActionButton onPress={navigateToLogin} text={'Next'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PickThemesScreen;
