import React, { useCallback, useMemo } from 'react';
import InfinityList from 'components/List/InfinityList';
import { TouchableOpacity } from 'react-native';

import { onGetListPosts } from 'data/home/actions';
import { useDispatch } from 'react-redux';
import { ActionDispatcher } from 'data/types';
import { itemType } from './types';

import styles from './styles';
import { HomeActionResultListData } from 'data/home/types';
import HomeBanner from '../HomeBanner';
import ItemPost from 'components/Item/Post';
import ROUTES from 'routes/names';
import { useNavigation } from '@react-navigation/native';

const HomeListPosts = () => {
  const dispatch: ActionDispatcher = useDispatch();

  const navigation = useNavigation();

  const navigateToDetailPost = useCallback(
    item => {
      navigation.navigate(ROUTES.POST_DETAIL, {
        idPost: item.id,
        item: item,
      });
    },
    [navigation],
  );

  const onFetchListPosts = useCallback(
    async (offset, limit): Promise<HomeActionResultListData> => {
      const response = await dispatch(onGetListPosts(offset, limit));
      return response;
    },
    [dispatch],
  );

  const renderItem = useCallback(
    (item: itemType) => {
      const { user, content, group_type } = item.item;
      return (
        <TouchableOpacity onPress={() => navigateToDetailPost(item.item)}>
          <ItemPost.MainPost
            imageUrl={user.image_url ?? ''}
            fullName={user.fullname ?? ''}
            userName={user.username ?? ''}
            content={content.content}
            groupType={group_type}
            totalComment={item.item.comment_posts.length ?? 0}
            createAt={content.createdAt}
          />
        </TouchableOpacity>
      );
    },
    [navigateToDetailPost],
  );

  const keyExtractor = useCallback((item: any) => `${item.id}`, []);

  const ListHeaderComponent = useMemo(() => <HomeBanner />, []);

  return (
    <InfinityList
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
      onEndReachedThreshold={0.2}
      fetchData={onFetchListPosts}
      style={styles.containerFlatList}
      keyExtractor={keyExtractor}
      emptyMessage="Not Found"
    />
  );
};

export default HomeListPosts;
