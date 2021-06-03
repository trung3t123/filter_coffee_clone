import React from 'react';
import { View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import PostDetailContent from './PostDetailContent';
import PostDetailHeader from './PostDetailHeader';

const PostDetailScreen = () => {
  return (
    <View style={CommonStyles.container}>
      <PostDetailHeader />
      <PostDetailContent />
    </View>
  );
};

export default PostDetailScreen;
