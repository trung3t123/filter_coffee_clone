import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

import Header from 'components/Header';
import CommonFonts from 'theme/CommonFonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeHeader = () => {
  return (
    <Header>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Coffee 👋</Text>
        <Icon size={CommonFonts.res22} name="bell" color={Colors.white} />
      </View>
    </Header>
  );
};

export default memo(HomeHeader);
