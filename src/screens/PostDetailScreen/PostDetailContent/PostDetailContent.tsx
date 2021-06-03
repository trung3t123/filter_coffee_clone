import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import DetailPost from './DetailPost';
import { CommentPostsType } from 'data/home/types';
import CustomInputMessage from 'components/Input/CustomInputMessage';
import ReplyCommentItem from 'components/Item/ReplyCommentItem';
import CommonHeights from 'theme/CommonHeights';
import { onPostCommentPost, onGetListCommentOfPost } from 'data/home/actions';
import InfinityList from 'components/List/InfinityList';
import { HomeActionResultListData } from 'data/home/types';
import Colors from 'utils/colors';

type PostDetailContentProps = {
  idPost: string;
};

type refInfinityList = {
  addNewData: (ref: never) => void | null;
} | null;

class PostDetailContent extends Component<PostDetailContentProps> {
  state = {
    isOnProgressPostComment: false,
    totalComment: 0,
    isDetailPostReady: false,
  };

  refInfinityList: refInfinityList = null;

  stopLoading = () => {
    this.setState({
      isOnProgressPostComment: false,
    });
  };

  setDetailPostReady = () => {
    this.setState({
      isDetailPostReady: true,
    });
  };

  setTotalComment = (numberComment?: number) => {
    this.setState({ totalComment: numberComment || 0 });
  };

  onSubmitReplyComment = async (text: string) => {
    const { idPost } = this.props;
    const { totalComment } = this.state;
    this.setState({ isOnProgressPostComment: true });
    try {
      const { success, commentResponse, error } = await onPostCommentPost({
        contentReply: text,
        idPost: idPost,
      });

      if (error) {
        this.stopLoading();
      }

      if (success) {
        this.stopLoading();
        this.setTotalComment(totalComment + 1);

        commentResponse &&
          this.refInfinityList?.addNewData(commentResponse as never);
      }
    } catch {
      this.stopLoading();
    }
  };

  renderDetailPost = () => {
    const { idPost } = this.props;
    const { isOnProgressPostComment, totalComment } = this.state;
    return (
      <>
        <DetailPost
          setDetailPostReady={this.setDetailPostReady.bind(this)}
          totalComment={totalComment}
          idPost={idPost}
        />
        {isOnProgressPostComment && (
          <ActivityIndicator size="large" color={Colors.white} />
        )}
      </>
    );
  };

  renderReplyCommentItem = ({ item }: { item: CommentPostsType }) => {
    const { isDetailPostReady } = this.state;
    if (!isDetailPostReady) {
      return null;
    }
    return (
      <ReplyCommentItem
        linkAvatar={item.user.image_url}
        userName={item?.user?.fullname}
        message={item?.text}
      />
    );
  };

  keyExtractor = (item: any) => `${item.id}`;

  ListFooterComponent = () => <View style={{ height: CommonHeights.res100 }} />;

  onFetchListComment = async (
    offset: number = 0,
    limit: number = 0,
  ): Promise<HomeActionResultListData> => {
    const { idPost } = this.props;
    const response = await onGetListCommentOfPost({
      offset,
      limit,
      idPost: idPost,
    });
    this.setTotalComment(response.pagination?.total);
    return response;
  };

  getRefInfinityList = (ref: any) => {
    this.refInfinityList = ref;
  };

  render() {
    const { isDetailPostReady } = this.state;

    return (
      <>
        <InfinityList
          fetchData={this.onFetchListComment}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderReplyCommentItem}
          ListHeaderComponent={this.renderDetailPost}
          ListFooterComponent={this.ListFooterComponent}
          getRefInfinityList={this.getRefInfinityList}
        />

        <CustomInputMessage
          isInputReady={isDetailPostReady}
          submitEditing={this.onSubmitReplyComment}
        />
      </>
    );
  }
}

export default PostDetailContent;
