import React, { ReactElement, memo, useCallback } from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import Colors from 'utils/colors';
import { useNavigation } from '@react-navigation/native';

type PropTypes = {
  children?: ReactElement<any, any>;
  isGoBack?: Boolean;
};

const Header: React.FC<PropTypes> = ({ children, isGoBack }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const onGoBack = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  return (
    <View style={[styles.container, { paddingTop: Math.max(insets.top, 15) }]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        {isGoBack && (
          <Icon
            size={20}
            color={Colors.white}
            name="arrow-left"
            // style={styles.icon}
            onPress={onGoBack}
          />
        )}
        {children}
      </View>
    </View>
  );
};

export default memo(Header);
