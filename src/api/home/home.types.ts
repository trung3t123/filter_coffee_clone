export type GetListPostsParameters = {
  offset: number;
  limit?: number;
};

export type ListPostsResponse = {
  data: {
    records: never[];
    total: number;
  };
  status: number;
};
