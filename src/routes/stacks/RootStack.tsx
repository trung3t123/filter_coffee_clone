import { ParamListBase } from '@react-navigation/routers';
import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Chart from 'screens/Chart';
import LoginScreen from 'screens/LoginScreen';
import Promo from 'screens/Promo';
import ROUTES from '../names';
import BottomTabBar from '../tab/BottomTabBar';

// import {cardStyleInterpolator, gestureConfig, HEADER_CONFIG} from './config';

export interface RootStackParamsList extends ParamListBase {
  LOGIN: undefined;
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
      <Stack.Screen options={{}} name={ROUTES.CHART} component={Chart} />
      <Stack.Screen options={{}} name={ROUTES.PROMO} component={Promo} />
    </Stack.Navigator>
  );
};

export default RootStack;
