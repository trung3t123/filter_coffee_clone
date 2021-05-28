import { ParamListBase } from '@react-navigation/routers';
import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import IntroduceScreen from 'screens/IntroduceScreen';
import LoginScreen from 'screens/LoginScreen';
import RegisterScreen from 'screens/SignUpScreen';
import CreateUserNameScreen from 'screens/CreateUserNameScreen';

import ROUTES from '../names';
import BottomTabBar from '../tab/BottomTabBar';
import PickThemesScreen from 'screens/PickThemesScreen';

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
        stackPresentation: 'push',
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name={ROUTES.BASE} component={BottomTabBar} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.INTRODUCE} component={IntroduceScreen} />
      <Stack.Screen
        name={ROUTES.CREATE_USER_NAME}
        component={CreateUserNameScreen}
      />
      <Stack.Screen name={ROUTES.PICK_THEME} component={PickThemesScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
