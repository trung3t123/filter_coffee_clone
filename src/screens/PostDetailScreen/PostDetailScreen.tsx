/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from 'react';
import { View } from 'react-native';

import { getDetailPost } from 'data/home/actions';
import CommonStyles from 'theme/CommonStyles';
import PostDetailContent from './PostDetailContent';
import PostDetailHeader from './PostDetailHeader';
import { useRoute } from '@react-navigation/native';
import { PostTypes } from 'data/home/types';

type RoutePrams = {
  params: {
    idPost: string;
  };
};

const PostDetailScreen = () => {
  const {
    params: { idPost },
  } = useRoute();

  const [detailPost, setDetailPost] = useState<PostTypes>();

  const onGetDetailPost = async () => {
    try {
      const { data, success, error } = await getDetailPost(idPost);

      if (error) {
        throw new Error(error);
      }

      if (success) {
        console.log(data, 'data');
        setDetailPost(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetDetailPost();
  }, []);

  return (
    <View style={CommonStyles.container}>
      <PostDetailHeader />
      <PostDetailContent detailPost={detailPost} />
    </View>
  );
};

export default memo(PostDetailScreen);
