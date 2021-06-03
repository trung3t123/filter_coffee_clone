export type GetListMediaPostsParameters = {
  offset: number;
  limit?: number;
};

export type ListMediaPostsResponse = {
  data: {
    records: never[];
    total: number;
  };
  status: number;
};
