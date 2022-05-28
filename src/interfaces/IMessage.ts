
export default interface IMessage {
    _id: string;
    text: string;
    createAt: string | Date;
    senderId: string;
    conversationId: string;
    type: "text" | "image" | "audio" | "video";
}