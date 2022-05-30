import { EnumMessageType } from "~/interfaces";
const converTypeToEnum = (str: string) => {

    let imageReg = /[\/.](gif|jpg|jpeg|png)$/i;
    let videoReg = /[\/.](mp4)$/i;
    if (str.match(imageReg)) {
        return EnumMessageType.IMAGE;
    } else if (str.match(videoReg)) {
        return EnumMessageType.MP4;
    }
    else {
        return EnumMessageType.OTHER;
    }
}
export default converTypeToEnum;