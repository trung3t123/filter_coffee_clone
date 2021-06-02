import axios from 'axios';
import {
  GetListPostsParameters,
  ListPostsResponse,
  DetailPostParameter,
  DetailPostResponse,
} from './home.types';
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

export function getDetailPostWithIdApi({ id }: DetailPostParameter) {
  return axios.get<DetailPostResponse>(`posts/${id}`);
}

const HomeApi = {
  getListPosts: getListPostsApi,
  getDetailPost: getDetailPostWithIdApi,
};

export default HomeApi;
