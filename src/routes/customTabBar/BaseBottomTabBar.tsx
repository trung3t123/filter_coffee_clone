import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CommonHeights from 'theme/CommonHeights';
import CommonStyles from 'theme/CommonStyles';

import Colors from 'utils/colors';

import ROUTES from 'routes/names';

import IconLinearGradient from 'components/Icon/IconLinearGradient/IconLinearGradient';
import Avatar from 'components/Image/Avatar';

import styles from './styles';

const BaseBottomTabBar = ({ state, descriptors, navigation }: any) => {
  const insets = useSafeAreaInsets();

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const isEnableBlurView = state.routeNames[state.index] === ROUTES.MEDIA;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isEnableBlurView
            ? Colors.transparent
            : Colors.mainBackgroundColorComponent,
        },
      ]}>
      {isEnableBlurView && (
        <BlurView
          blurRadius={0.1}
          style={StyleSheet.absoluteFillObject}
          blurType="dark"
          blurAmount={0.1}
        />
      )}
      <View style={CommonStyles.rowFlex}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={`${options.tabBarBadge}`}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.buttonContainer,
                {
                  paddingBottom: insets.top / 2,
                },
              ]}>
              {options.tabBarBadge === 'avatar' ? (
                <Avatar
                  isEnableGradient={isFocused}
                  avatarStyle={styles.avatar}
                />
              ) : (
                <IconLinearGradient
                  enableLiner={isFocused}
                  linerColor={CommonStyles.mainLinerGradientColor}
                  name={options.tabBarBadge}
                  size={CommonHeights.res22}
                  color="white"
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BaseBottomTabBar;
