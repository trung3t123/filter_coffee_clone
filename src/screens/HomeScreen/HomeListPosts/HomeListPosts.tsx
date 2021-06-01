import React, { memo, useCallback } from 'react';
import InfinityList from 'components/List/InfinityList';

import { onGetListPosts } from 'data/home/actions';
import { useDispatch } from 'react-redux';
import { ActionDispatcher } from 'data/types';
import ItemPost from './ItemPost';
import { itemType } from './types';

import styles from './styles';
import { ApiResultListData } from 'data/home/types';

const HomeBanner = () => {
  const dispatch: ActionDispatcher = useDispatch();

  const onFetchListPosts = useCallback(
    async (offset: number, limit?: number): Promise<ApiResultListData> => {
      const response = await dispatch(onGetListPosts(offset, limit));
      return response;
    },
    [dispatch],
  );

  const renderItem = useCallback(
    (item: itemType) => <ItemPost item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: any) => `${item.id}`, []);

  return (
    <InfinityList
      renderItem={renderItem}
      onEndReachedThreshold={0.2}
      fetchData={onFetchListPosts}
      style={styles.containerFlatList}
      keyExtractor={keyExtractor}
      emptyMessage="Not Found"
    />
  );
};

export default memo(HomeBanner);
