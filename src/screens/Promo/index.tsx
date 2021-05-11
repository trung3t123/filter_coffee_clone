import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ROUTES from 'routes/names';

type PropTypes = {};

const Promo: React.FC<PropTypes> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Promo modal</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.push(ROUTES.CHART);
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Promo;
