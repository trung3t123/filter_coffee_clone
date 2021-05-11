import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../names';
import Home from 'screens/Home';
import Profile from 'screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens
      lazy
      tabBarOptions={{
        keyboardHidesTabBar: true,
        adaptive: true,
      }}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen options={{}} name={ROUTES.HOME} component={Home} />
      <Tab.Screen options={{}} name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
