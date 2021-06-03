/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useCallback, useState, useEffect } from 'react';
import {
  View,
  FlatList as ListReplyComment,
  LayoutAnimation,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import DetailPost from './DetailPost';
import { PostTypes } from 'data/home/types';
import CustomInputMessage from 'components/Input/CustomInputMessage';
import ReplyCommentItem from 'components/Item/ReplyCommetItem';
import CommonHeights from 'theme/CommonHeights';
import { useRoute } from '@react-navigation/native';
import { getDetailPost } from 'data/home/actions';
import Colors from 'utils/colors';

type message = { id: string; message: string };

type listMessages = Array<message>;

type RoutePrams = {
  params: {
    idPost: string;
  };
};

LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

const PostDetailContent = () => {
  const route: RoutePrams = useRoute();

  const [detailPost, setDetailPost] = useState<PostTypes>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onGetDetailPost = useCallback(async () => {
    setLoading(true);
    try {
      const { data, success, error } = await getDetailPost(route.params.idPost);

      if (error) {
        setLoading(false);
        throw new Error(error);
      }

      if (success) {
        setLoading(false);
        setDetailPost(data);
      }
    } catch (error) {
      setLoading(false);
    }
  }, [setLoading, setDetailPost]);

  useEffect(() => {
    onGetDetailPost();
  }, []);

  const [listReplyMessages, setListMessages] = useState<listMessages>([]); // create data to test feature comment

  const onSubmitReplyComment = useCallback(
    (text: string) => {
      setListMessages(
        [
          {
            id: `${Math.random() * 10}`,
            message: text,
          },
        ].concat(listReplyMessages),
      );
    },
    [setListMessages, listReplyMessages],
  );

  const renderDetailPost = useMemo(() => {
    return (
      <>
        {isLoading ? (
          <View style={styles.viewIndicator}>
            <ActivityIndicator size="large" color={Colors.white} />
          </View>
        ) : (
          <DetailPost item={detailPost} />
        )}
      </>
    );
  }, [detailPost, isLoading]);

  const renderReplyCommentItem = useCallback(
    ({ item }) => <ReplyCommentItem message={item.message} />,
    [],
  );

  const keyExtractor = useCallback((item: any) => `${item.id}`, [
    listReplyMessages.length,
  ]);

  const ListFooterComponent = useCallback(
    () => <View style={{ height: CommonHeights.res100 }} />,
    [],
  );

  const isInputReady = detailPost ?? detailPost;

  return (
    <>
      <ListReplyComment
        keyExtractor={keyExtractor}
        renderItem={renderReplyCommentItem}
        data={listReplyMessages}
        ListHeaderComponent={renderDetailPost}
        ListFooterComponent={ListFooterComponent}
      />
      <CustomInputMessage
        isInputReady={isInputReady as never}
        submitEditing={onSubmitReplyComment}
      />
    </>
  );
};

export default PostDetailContent;

const styles = StyleSheet.create({
  viewIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
