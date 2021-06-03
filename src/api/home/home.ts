import axios from 'axios';
import {
  GetListPostsParameters,
  ListPostsResponse,
  DetailPostParameter,
  DetailPostResponse,
  PostReplyPostParameter,
  GetCommentOfPostResponse,
  PostCommentResponse,
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

export function postCommentApi({ text, post_id }: PostReplyPostParameter) {
  return axios.post<PostCommentResponse>('comments', {
    text,
    post_id,
  });
}

export function getCommentOfPostApi({
  post_id,
  limit,
  offset,
}: {
  limit: number;
  offset: number;
  post_id: string;
}) {
  // const parameterQueryListComment = qs.parse({
  //   offset: `${offset}`,
  //   limit: `${limit}`,
  //   ['where[post_id]']: post_id,
  // });

  return axios.get<GetCommentOfPostResponse>(
    `comments?offset=${offset}&limit=${limit}&where[post_id]=${post_id}`,
  );
}

const HomeApi = {
  getListPosts: getListPostsApi,
  getDetailPost: getDetailPostWithIdApi,
  postReplyPost: postCommentApi,
  getCommentOfPost: getCommentOfPostApi,
};

export default HomeApi;
