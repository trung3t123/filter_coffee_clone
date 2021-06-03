import { UserInfoTypes } from 'data/session/types';

export type CommentPostsType = {
  id: string;
  text: string;
  parent_id: string;
  user: {
    fullname?: string;
    username?: string;
    image_url?: string;
  };
  createdAt: string;
  parrent_id: null;
  post_id: string;
  updatedAt: string;
  user_id: string;
};
export interface PostTypes {
  image_urls: string;
  id: string;
  content: {
    content: string;

    createdAt: string;
    image_urls: string[];
    thumbnail_url: string;

    post_id: string;
    updatedAt: string;
  };
  description: string;
  user_id: string;

  thumbnail_url: string;
  group_type: string;

  theme_ids: string[];
  user: UserInfoTypes;

  comment_posts: CommentPostsType[];
}

export type HomeActionResult = {
  data?: PostTypes;
  success?: boolean;
  error?: string;
};

export type PostCommentActionResult = {
  commentResponse?: CommentPostsType;
  success?: boolean;
  error?: string;
};

export interface HomeStates {
  listPosts: Array<PostTypes>;
  listIdPosts: Array<string>;
  getListPostsStatus: string;
}

export type HomeActionResultListData = {
  data?: never[];
  pagination?: {
    total?: number;
  };

  error?: string;
};
