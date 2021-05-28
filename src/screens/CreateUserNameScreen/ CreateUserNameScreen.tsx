import React, { memo } from 'react';
import { View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import Header from 'components/Header';
import CreateUserName from 'components/Form/CreateUserName';

const CreateUserNameScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <Header isGoBack />
      <CreateUserName />
    </View>
  );
};

export default memo(CreateUserNameScreen);
