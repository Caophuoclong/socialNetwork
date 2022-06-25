import { EnumMessageType } from '.';

export default interface IMessage {
  messageId: string;
  messageContent: string;
  messageCreateAt: string | Date;
  sourceId: string;
  conversationId: string;
  messageType: EnumMessageType;
}
