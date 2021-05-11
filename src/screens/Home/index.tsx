import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ROUTES, {ROUTES_TYPES} from 'src/routes/names';

import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamsList} from 'src/routes/stacks/MainStack';

type ProfileScreenNavigationProp = StackNavigationProp<
  MainStackParamsList,
  ROUTES_TYPES.HOME
>;

type PropTypes = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<PropTypes> = ({navigation}) => {
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
          navigation.navigate(ROUTES.PROMO);
        }}>
        <Text>show modal</Text>
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
