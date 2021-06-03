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
};
export interface PostTypes {
  id: string;
  content: {
    content: string;

    createdAt: string;
    image_urls: string[];
    post_id: string;
    updatedAt: string;
  };
  description: string;
  user_id: string;

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
