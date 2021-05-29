import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import Colors from 'utils/colors';
import { BlurView } from '@react-native-community/blur';
import ROUTES from 'routes/names';

const BaseBottomTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  console.log(state, 'state');
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const isEnableBlurView = state.routeNames[state.index] === ROUTES.MEDIA;

  return (
    <View
      style={{
        // backgroundColor: 'transparent',
        height: CommonHeights.res80,
        backgroundColor: isEnableBlurView
          ? 'transparent'
          : Colors.mainBackgroundColorComponent,

        bottom: 0,
        width: '100%',
        position: 'absolute',
        // zIndex: 8,
      }}>
      {isEnableBlurView && (
        <BlurView
          blurRadius={0.1}
          style={{ ...StyleSheet.absoluteFillObject }}
          blurType="ultraThinMaterialDark"
          blurAmount={0.1}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

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
              key={`${label}`}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{ color: isFocused ? 'red' : 'white' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BaseBottomTabBar;
