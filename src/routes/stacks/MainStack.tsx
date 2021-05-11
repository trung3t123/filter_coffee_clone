import {ParamListBase} from '@react-navigation/routers';
import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Home from 'src/screens/Home';
import Profile from 'src/screens/Profile';
import ROUTES from '../names';

export interface MainStackParamsList extends ParamListBase {
  HOME: undefined;
}

const Stack = createNativeStackNavigator<Record<string, any>>();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen options={{}} name={ROUTES.HOME} component={Home} />
      <Stack.Screen options={{}} name={ROUTES.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}
export default MainStack;
