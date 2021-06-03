import React, { memo, useCallback } from 'react';
import InfinityList from 'components/List/InfinityList';

import { onGetListPosts } from 'data/home/actions';
import { useDispatch } from 'react-redux';
import { ActionDispatcher } from 'data/types';
import { itemType } from './types';

import styles from './styles';
import { HomeActionResultListData } from 'data/home/types';
import PostItem from 'components/Item/PostItem';
import HomeBanner from '../HomeBanner';

const HomeListPosts = () => {
  const dispatch: ActionDispatcher = useDispatch();

  const onFetchListPosts = useCallback(
    async (
      offset: number = 0,
      limit: number = 0,
    ): Promise<HomeActionResultListData> => {
      const response = await dispatch(onGetListPosts(offset, limit));
      return response;
    },
    [dispatch],
  );

  const renderItem = useCallback(
    (item: itemType) => <PostItem item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: any) => `${item.id}`, []);

  const ListHeaderComponent = useCallback(() => <HomeBanner />, []);

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

export default memo(HomeListPosts);
