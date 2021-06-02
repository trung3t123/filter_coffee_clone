import { PostTypes } from 'data/home/types';

export type GetListPostsParameters = {
  offset: number;
  limit?: number;
};

export type DetailPostParameter = {
  id: string;
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
