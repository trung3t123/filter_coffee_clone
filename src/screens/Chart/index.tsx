import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ROUTES from 'src/routes/names';

export default function Chart({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Chart Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.PROMO);
        }}>
        <Text>goto Promo modal</Text>
      </TouchableOpacity>
    </View>
  );
}
