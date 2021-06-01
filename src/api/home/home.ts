import axios from 'axios';
import { GetListPostsParameters, ListPostsResponse } from './home.types';
// import { CLIENT_ID, CLIENT_SECRET } from './constants';

export function getListPostsApi(
  { offset, limit }: GetListPostsParameters = { offset: 0, limit: 10 },
) {
  return axios.get<ListPostsResponse>(`posts?limit=${limit}&offset=${offset}`);
}

const HomeApi = {
  getListPosts: getListPostsApi,
};

export default HomeApi;
