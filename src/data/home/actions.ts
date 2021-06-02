import * as homeReducerTypes from './action_reducer_types';
import { AsyncAction } from 'data/types';
import {
  // PostTypes,
  ApiResultListData,
} from './types';
import ActionErrorHandler from 'utils/error-handler/action';
import HomeApi from 'api/home/home';
import API_STATUS from 'constants/response-status';

const onRequestListPosts = () => ({
  type: homeReducerTypes.REQUEST_LIST_POSTS,
});

// const setListPosts = (listPosts: Array<PostTypes>) => ({
//   type: homeReducerTypes.REQUEST_LIST_POSTS_SUCCESS,
//   payload: { listPosts },
// });

const onRequestListPostFailed = () => ({
  type: homeReducerTypes.REQUEST_LIST_POSTS_FAILURE,
});

export const onGetListPosts = (
  offset: number,
  limit?: number,
): AsyncAction<Promise<ApiResultListData>> => async dispatch => {
  let result: ApiResultListData = {
    data: [],
    pagination: {
      total: 0,
    },
    error: '',
  };

  try {
    dispatch(onRequestListPosts());

    const data = await HomeApi.getListPosts({
      offset,
      limit,
    });

    if (data.status === API_STATUS.SUCCESS) {
      result = {
        data: data?.data?.data?.records || [],
        pagination: {
          total: data?.data?.data?.total,
        },
      };

      return result;
    }

    result.error = 'error';

    return result;
  } catch (error) {
    dispatch(onRequestListPostFailed());
    ActionErrorHandler.handleFunction(error, 'authorize', {
      breadCrumb: true,
    });
    return { error: error?.data?.response?.data?.message || '' };
  }
};
