import { createSelector } from 'reselect';

import { PostTypes } from './types';
import { RootStates } from '../types';
import { ACTION_STATES } from 'data/config';

const getHomeState = (state: RootStates) => state.home;

const getLisPosts = (state: RootStates) => getHomeState(state).listPosts;

const getListIdPosts = (state: RootStates) => getHomeState(state).listIdPosts;

const getStatusListPosts = (state: RootStates) =>
  getHomeState(state).getListPostsStatus;

const selectPostWithId = createSelector(
  getLisPosts,
  (_: never, idPost: string) => idPost,
  (listPosts, idPost) => {
    const filterPost = listPosts.filter(
      (post: PostTypes) => post.id === idPost,
    );
    return filterPost.length > 0 ? filterPost[1] : null;
  },
);

const isOnLoadingListPosts = createSelector(
  getStatusListPosts,
  statusListPosts => {
    statusListPosts === ACTION_STATES.LOADING;
  },
);

const HomeSelector = {
  getLisPosts,
  getListIdPosts,
  selectPostWithId,
  isOnLoadingListPosts,
};

export default HomeSelector;
