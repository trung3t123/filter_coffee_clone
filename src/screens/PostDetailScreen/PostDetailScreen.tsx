import React from 'react';
import { View, LayoutAnimation } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import PostDetailContent from './PostDetailContent';
import PostDetailHeader from './PostDetailHeader';
import { useRoute } from '@react-navigation/native';

type RouteTypes = {
  params?: {
    idPost?: string;
  };
};

const PostDetailScreen = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  const route: RouteTypes = useRoute();

  return (
    <View style={CommonStyles.container}>
      <PostDetailHeader />
      <PostDetailContent idPost={route?.params?.idPost || ''} />
    </View>
  );
};

export default PostDetailScreen;
