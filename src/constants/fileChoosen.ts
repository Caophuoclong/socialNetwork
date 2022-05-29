import { AiFillFileImage, AiFillPlusCircle, AiOutlineFileGif } from "react-icons/ai"
import { IFileChoosen } from "~/interfaces";
export default [
    {
        label: "all",
        Icon: AiFillPlusCircle,
        accept: "*"
    },
    {
        label: "image",
        Icon: AiFillFileImage,
        accept: ".jpg,.jpeg,.png"
    },
    {
        label: "gif",
        Icon: AiOutlineFileGif,
        accept: ".gif"
    }
] as Array<IFileChoosen>