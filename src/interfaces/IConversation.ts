import IMessage from './IMessage';
import IUser from './IUser';

export default interface IConversation {
  conversationId: string;
  conversationName?: string;
  conversationCreateAt: string | Date;
  participants: Array<IUser>;
  owner?: IUser;
  adminstations?: Array<IUser>;
  conversationType: 'private' | 'group';
  imgUrl?: string;
  latestMessage?: IMessage;
  unReadMessages?: {
    // Key is senderId
    [key: string]: IMessage[];
  };
}
