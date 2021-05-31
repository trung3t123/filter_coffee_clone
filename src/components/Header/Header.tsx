import React, { memo, useCallback } from 'react';
import { View, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Colors from 'utils/colors';
import { HIT_SLOP } from 'theme/touch';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';

type PropTypes = {
  children?: any;
  isGoBack?: boolean;
  isAbsolute?: boolean;
};

const Header: React.FC<PropTypes> = ({ children, isGoBack, isAbsolute }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const onGoBack = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, CommonHeights.res40),
        },
        isAbsolute && styles.absoluteHeader,
      ]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        {isGoBack && (
          <TouchableWithoutFeedback
            hitSlop={HIT_SLOP.SIZE20}
            onPress={onGoBack}>
            <Icon
              size={CommonFonts.res25}
              color={Colors.white}
              name="arrow-left"
            />
          </TouchableWithoutFeedback>
        )}
        {children}
      </View>
    </View>
  );
};

export default memo(Header);
