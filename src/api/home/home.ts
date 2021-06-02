import axios from 'axios';
import { GetListPostsParameters, ListPostsResponse } from './home.types';
import qs from 'qs';

export function getListPostsApi(
  { offset, limit }: GetListPostsParameters = { offset: 0, limit: 10 },
) {
  const parameterQueryListPosts = qs.parse({
    offset: `${offset}`,
    limit: `${limit}`,
  });

  return axios.get<ListPostsResponse>(`posts?${parameterQueryListPosts}`);
}

const HomeApi = {
  getListPosts: getListPostsApi,
};

export default HomeApi;
