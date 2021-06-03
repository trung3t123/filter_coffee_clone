export interface PostTypes {
  image_urls: string;
  id: string;
  content: {
    content: string;
  };
}

export interface HomeStates {
  listPosts: Array<PostTypes>;
  listIdPosts: Array<string>;
  getListPostsStatus: string;
}

export type ApiResultListData = {
  data?: never[];
  pagination?: {
    total?: number;
  };

  error?: string;
};
