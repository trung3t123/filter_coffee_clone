import React, { useMemo, useCallback, useState } from 'react';
import {
  View,
  FlatList as ListReplyComment,
  LayoutAnimation,
} from 'react-native';
import DetailPost from './DetailPost';
import { PostTypes } from 'data/home/types';
import CustomInputMessage from 'components/Input/CustomInputMessage';
import ReplyCommentItem from 'components/Item/ReplyCommetItem';
import CommonHeights from 'theme/CommonHeights';

type message = { id: string; message: string };

type listMessages = Array<message>;

const PostDetailContent = ({ detailPost }: { detailPost?: PostTypes }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  const [listReplyMessages, setListMessages] = useState<listMessages>([]); // create data to test feature comment

  const onSubmitComment = (event: any | string) => {
    setListMessages(
      [
        {
          id: `${Math.random() * 10}`,
          message: event?.nativeEvent?.text ?? event,
        },
      ].concat(listReplyMessages),
    );
  };

  const renderDetailPost = useMemo(() => <DetailPost item={detailPost} />, [
    detailPost,
  ]);

  const renderReplyCommentItem = useCallback(
    ({ item }) => <ReplyCommentItem message={item.message} />,
    [],
  );

  const keyExtractor = useCallback((item: any) => `${item.id}`, []);

  const ListFooterComponent = useCallback(
    () => <View style={{ height: CommonHeights.res100 }} />,
    [],
  );

  return (
    <>
      <ListReplyComment
        keyExtractor={keyExtractor}
        renderItem={renderReplyCommentItem}
        data={listReplyMessages}
        ListHeaderComponent={renderDetailPost}
        ListFooterComponent={ListFooterComponent}
      />
      <CustomInputMessage onSubmitEditing={onSubmitComment} />
    </>
  );
};

export default PostDetailContent;
