import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ROUTES from '../names';

import HomeScreen from 'screens/HomeScreen';
import Profile from 'screens/Profile';
import MediaScreen from 'screens/MediaScreen';
import ExploreScreen from 'screens/ExploreScreen';

import BaseBottomTabBar from '../customTabBar/BaseBottomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const tabBar = (props: any) => <BaseBottomTabBar {...props} />;

  return (
    <Tab.Navigator
      tabBar={tabBar}
      detachInactiveScreens
      lazy
      tabBarOptions={{
        keyboardHidesTabBar: true,
        // adaptive: true,
      }}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        options={{
          tabBarBadge: 'home',
        }}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ tabBarBadge: 'search' }}
        name={ROUTES.EXPLORE}
        component={ExploreScreen}
      />
      <Tab.Screen
        options={{ tabBarBadge: 'tv' }}
        name={ROUTES.MEDIA}
        component={MediaScreen}
      />
      <Tab.Screen
        options={{ tabBarBadge: 'avatar' }}
        name={ROUTES.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
