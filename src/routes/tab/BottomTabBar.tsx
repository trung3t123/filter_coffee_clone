import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../names';
import HomeScreen from 'screens/HomeScreen';
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
      <Tab.Screen options={{}} name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen options={{}} name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
