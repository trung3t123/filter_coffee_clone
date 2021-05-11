import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ROUTES, { ROUTES_TYPES } from 'routes/names';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from 'routes/stacks/RootStack';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  ROUTES_TYPES.HOME
>;

type PropTypes = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<PropTypes> = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc88',
      }}>
      <Text>Home Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.LOGIN);
        }}>
        <Text>LOGIN NOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.PROFILE);
        }}>
        <Text>goto profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
