import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { logout } from 'data/session/actions';
import { ActionDispatcher } from 'data/types';
import { useDispatch } from 'react-redux';
import Screen from 'utils/screen';
import Header from 'components/Header';
import Colors from 'utils/colors';

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
        <Text style={styles.textColor}>Profile Screen</Text>
        <TouchableOpacity onPress={onPressLogout}>
          <Text style={styles.textColor}>Log out</Text>
        </TouchableOpacity>
      </Header>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textColor: {
    color: Colors.white,
  },
});
