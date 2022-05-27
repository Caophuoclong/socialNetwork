import IUser from "./IUser";

export default interface IFriend extends IUser {
    isOnline: boolean;
    lastOnline: string | Date;
}
