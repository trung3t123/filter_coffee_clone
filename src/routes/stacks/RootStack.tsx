import { ParamListBase } from '@react-navigation/routers';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import IntroduceScreen from 'screens/IntroduceScreen';
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
      initialRouteName={ROUTES.INTRODUCE}
      screenOptions={{
        stackPresentation: 'modal',
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name={ROUTES.BASE} component={BottomTabBar} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.INTRODUCE} component={IntroduceScreen} />
      <Stack.Screen name={ROUTES.PROMO} component={Promo} />
    </Stack.Navigator>
  );
};

export default RootStack;
