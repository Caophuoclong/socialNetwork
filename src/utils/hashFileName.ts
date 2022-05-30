import crypto from "crypto-js";
const hashName = (name: string, lastModified: number) => {
    let hashString = crypto.HmacSHA512(name, lastModified.toString())
    return hashString.toString()

}
export default hashName;