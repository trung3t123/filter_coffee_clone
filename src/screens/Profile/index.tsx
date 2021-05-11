import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ROUTES from 'src/routes/names';

type PropTypes = {
  navigation: any;
};

const Profile: React.FC<PropTypes> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.CHART);
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
