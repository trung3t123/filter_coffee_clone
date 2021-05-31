import { logout } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Screen from 'utils/screen';
import Header from 'components/Header';

type PropTypes = {
  navigation: any;
};

const Profile: React.FC<PropTypes> = ({}) => {
  const dispatch: ActionDispatcher = useDispatch();

  const onPressLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <View style={{ height: Screen.height, width: Screen.width }}>
      <Header>
        <Text style={{ color: 'white' }}>Profile Screen</Text>
        <TouchableOpacity onPress={onPressLogout}>
          <Text style={{ color: 'white' }}>Log out</Text>
        </TouchableOpacity>
      </Header>
    </View>
  );
};

export default Profile;
