import MainPost, { MainPostProps } from './MainPost';
import ReplyComment, { ItemPostProps } from './ReplyComment';

declare type ItemPostTypes = {
  MainPost: React.FC<MainPostProps>;
  ReplyComment: React.FC<ItemPostProps>;
};

const ItemPost: ItemPostTypes = {
  MainPost: MainPost,
  ReplyComment: ReplyComment,
};

export default ItemPost;
