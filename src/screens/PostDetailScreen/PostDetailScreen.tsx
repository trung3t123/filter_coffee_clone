import React from 'react';
import { View } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import PostDetailContent from './PostDetailContent';
import PostDetailHeader from './PostDetailHeader';
import { useRoute } from '@react-navigation/native';

const PostDetailScreen = () => {
  const route = useRoute();

  return (
    <View style={CommonStyles.container}>
      <PostDetailHeader />
      <PostDetailContent idPost={route.params.idPost} />
    </View>
  );
};

export default PostDetailScreen;
