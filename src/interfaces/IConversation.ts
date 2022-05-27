import IMessage from "./IMessage";
import IUser from "./IUser";

export default interface IConversation {
    _id: string;
    createAt: string | Date;
    participants: Array<IUser>
    owner?: IUser
    adminstations?: Array<IUser>
    type: "private" | "group";
    imgUrl?: string;
}