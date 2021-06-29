import axios from 'axios';
import {
  GetListMediaPostsParameters,
  ListMediaPostsResponse,
} from './mediaPost.types';
import qs from 'qs';

export function getListMediaPost(
  { offset, limit }: GetListMediaPostsParameters = { offset: 0, limit: 10 },
) {
  const parameterQueryListPosts = qs.parse({
    offset: `${offset}`,
    limit: `${limit}`,
  });

  return axios.get<ListMediaPostsResponse>(
    `posts?${parameterQueryListPosts}&where[group_type]=premium`,
  );
}

const mediaPost = {
  getListMediaPost: getListMediaPost,
};

export default mediaPost;
