
export default interface IMessage {
    _id: string;
    text: string;
    createAt: number;
    senderId: string;
    conversationId: string;
    type: "text" | "image" | "audio" | "video";
}