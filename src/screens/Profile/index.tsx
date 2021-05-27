import { logout } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import CommonStyles from 'theme/CommonStyles';

type PropTypes = {
  navigation: any;
};

const Profile: React.FC<PropTypes> = ({}) => {
  const dispatch: ActionDispatcher = useDispatch();

  const onPressLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <View style={CommonStyles.container}>
      <SafeAreaView style={CommonStyles.flex1}>
        <Text>Profile Screen</Text>

        <TouchableOpacity onPress={onPressLogout}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
