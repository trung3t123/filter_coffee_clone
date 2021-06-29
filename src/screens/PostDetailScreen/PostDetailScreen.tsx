import React from 'react';
import { View, LayoutAnimation, ScrollView } from 'react-native';

import CommonStyles from 'theme/CommonStyles';
import PostDetailContent from './PostDetailContent';
import PostDetailHeader from './PostDetailHeader';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from 'routes/stacks/RootStack';
import DetailPost from './PostDetailContent/DetailPost';

LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

const PostDetailScreen = () => {
  const {
    params: { idPost, item },
  } = useRoute<RouteProp<RootStackParamsList, 'POST_DETAIL'>>();

  const isPostTypePreminum = item.group_type === 'premium';

  return (
    <View style={CommonStyles.container}>
      <PostDetailHeader />
      {!isPostTypePreminum ? (
        <PostDetailContent item={item} idPost={idPost} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <DetailPost isPostTypePreminum={isPostTypePreminum} item={item} />
        </ScrollView>
      )}
    </View>
  );
};

export default PostDetailScreen;
