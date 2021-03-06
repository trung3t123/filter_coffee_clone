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
import SessionSelector from 'data/session/selectors';
import { useSelector } from 'react-redux';
import PostDetailScreen from 'screens/PostDetailScreen';
import { PostTypes } from 'data/home/types';

export interface RootStackParamsList extends ParamListBase {
  POST_DETAIL: { idPost: string; item: PostTypes };
  REGISTER: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStack = () => {
  const isAuthorized = useSelector(SessionSelector.isLoggedInSelector);

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.INTRODUCE}
      screenOptions={{
        stackPresentation: 'push',
        headerShown: false,
        gestureEnabled: true,
      }}>
      {isAuthorized ? (
        <>
          <Stack.Screen name={ROUTES.BASE} component={BottomTabBar} />
          <Stack.Screen
            name={ROUTES.POST_DETAIL}
            component={PostDetailScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
          <Stack.Screen name={ROUTES.INTRODUCE} component={IntroduceScreen} />
          <Stack.Screen
            name={ROUTES.CREATE_USER_NAME}
            component={CreateUserNameScreen}
          />
          <Stack.Screen name={ROUTES.PICK_THEME} component={PickThemesScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
