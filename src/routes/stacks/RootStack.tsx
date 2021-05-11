import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Chart from 'src/screens/Chart';
import Promo from 'src/screens/Promo';
import ROUTES from '../names';
import MainStack from './MainStack';
// import ModalStack from './NativeModalStack';

// import {cardStyleInterpolator, gestureConfig, HEADER_CONFIG} from './config';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        stackPresentation: 'modal',
      }}>
      <Stack.Screen name={ROUTES.MAIN_STACK} component={MainStack} />
      {/* <Stack.Screen name={ROUTES.MODAL_STACK} component={ModalStack} /> */}
      <Stack.Screen options={{}} name={ROUTES.CHART} component={Chart} />
      <Stack.Screen options={{}} name={ROUTES.PROMO} component={Promo} />
    </Stack.Navigator>
  );
};

export default RootStack;
