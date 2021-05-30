import React, { memo, useCallback } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
// import ROUTES from 'routes/names';
import ActionButton from 'components/Theme/ActionButton';
import ROUTES from 'routes/names';

const Login = () => {
  const navigation = useNavigation();

  const navigateToSignUp = useCallback(() => {
    navigation.navigate(ROUTES.REGISTER);
  }, [navigation]);

  return (
    <>
      <ScrollView
        bounces={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        overScrollMode="always"
        contentContainerStyle={styles.contentContainerStyleFlatList}>
        <View>
          <View style={styles.viewContent} />
          <Text style={styles.titleText}>{'Filter Coffee'}</Text>
          <Text style={styles.subtitleText}>
            {'Connect • Understand • Invest'}
          </Text>
        </View>

        {/* submit button */}
        <View style={styles.viewButton}>
          <ActionButton onPress={navigateToSignUp} text={'Get Started'} />
        </View>
      </ScrollView>
    </>
  );
};

export default memo(Login);
