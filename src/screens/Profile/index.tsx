import { logout } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import CommonStyles from 'theme/CommonStyles';
import Screen from 'utils/screen';

type PropTypes = {
  navigation: any;
};

const Profile: React.FC<PropTypes> = ({}) => {
  const dispatch: ActionDispatcher = useDispatch();

  const onPressLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  console.log(Screen.height, Screen.width);
  return (
    <View style={{ height: Screen.height, width: Screen.width }}>
      <Text style={{ color: 'white' }}>Profile Screen</Text>

      <TouchableOpacity onPress={onPressLogout}>
        <Text>Log out</Text>
      </TouchableOpacity>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          height: Screen.height,
          width: Screen.width,
        }}>
        <Image
          resizeMode="cover"
          source={require('../../../assets/Bitmap.png')}
          style={{ height: Screen.height, width: '100%' }}
        />
      </View>
    </View>
  );
};

export default Profile;
