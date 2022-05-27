export default interface INotification {
    type: "comment" | "share" | "follow" | "like" | "request" | "sendFriendRequest" | "acceptFriendRequest";
    _id: string;
    content: string;
}
