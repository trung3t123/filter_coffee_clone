import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Chart from 'src/screens/Chart';
import Promo from 'src/screens/Promo';
import ROUTES from '../names';

const Stack = createNativeStackNavigator();

function ModalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTranslucent: true,
        stackPresentation: 'modal',
        headerShown: false,
      }}>
      <Stack.Screen options={{}} name={ROUTES.CHART} component={Chart} />
      <Stack.Screen options={{}} name={ROUTES.PROMO} component={Promo} />
    </Stack.Navigator>
  );
}
export default ModalStack;
