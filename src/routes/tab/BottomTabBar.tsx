import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../names';
import HomeScreen from 'screens/HomeScreen';
import Profile from 'screens/Profile';
import BaseBottomTabBar from '../customTabBar/BaseBottomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const tabBar = (props: any) => <BaseBottomTabBar {...props} />;

  return (
    <Tab.Navigator
      tabBar={(props: any) => <BaseBottomTabBar {...props} />}
      // detachInactiveScreens
      // lazy
      // tabBarOptions={{
      //   keyboardHidesTabBar: true,
      //   // adaptive: true,
      // }}
      screenOptions={{
        unmountOnBlur: true,
      }}>
      <Tab.Screen options={{}} name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen options={{}} name={ROUTES.EXPLORE} component={Profile} />
      <Tab.Screen options={{}} name={ROUTES.MEDIA} component={Profile} />
      <Tab.Screen options={{}} name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
