import React, { ReactElement, memo, useCallback } from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles';
import Colors from 'utils/colors';
import { HIT_SLOP } from 'theme/touch';
import CommonHeights from 'theme/CommonHeights';

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
          <TouchableWithoutFeedback
            hitSlop={HIT_SLOP.SIZE20}
            onPress={onGoBack}>
            <Icon
              size={CommonHeights.res25}
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
