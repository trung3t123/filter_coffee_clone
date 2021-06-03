import { PostTypes, CommentPostsType } from 'data/home/types';

export type GetListPostsParameters = {
  offset: number;
  limit?: number;
};

export type DetailPostParameter = {
  id: string;
};

export type PostReplyPostParameter = {
  text: string;
  post_id: string;
};

export type ListPostsResponse = {
  data: {
    records: never[];
    total: number;
  };
  status: number;
};

export type DetailPostResponse = {
  data?: {
    record: PostTypes;
  };
  status: number;
};

export type PostCommentResponse = {
  data?: {
    record: CommentPostsType;
  };
  status: number;
};

export type GetCommentOfPostResponse = {
  data?: {
    records?: never[];
    total: number;
  };
  status: number;
};
