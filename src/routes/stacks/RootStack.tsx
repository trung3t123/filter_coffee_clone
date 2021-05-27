import { ParamListBase } from '@react-navigation/routers';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Chart from 'screens/Chart';
import Promo from 'screens/Promo';
import LoginScreen from 'screens/LoginScreen';
import RegisterScreen from 'screens/RegisterScreen';

import ROUTES from '../names';
import BottomTabBar from '../tab/BottomTabBar';

export interface RootStackParamsList extends ParamListBase {
  LOGIN: undefined;
  REGISTER: undefined;
}

const Stack = createNativeStackNavigator<Record<string, any>>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        stackPresentation: 'modal',
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name={ROUTES.BASE} component={BottomTabBar} />
      <Stack.Screen options={{}} name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen
        options={{}}
        name={ROUTES.REGISTER}
        component={RegisterScreen}
      />
      <Stack.Screen options={{}} name={ROUTES.CHART} component={Chart} />
      <Stack.Screen options={{}} name={ROUTES.PROMO} component={Promo} />
    </Stack.Navigator>
  );
};

export default RootStack;
