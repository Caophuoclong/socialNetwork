
const readFileAsUrl = (file: File) => {
    return new Promise<string | null | ArrayBuffer>((resolve, reject) => {
        const fr = new FileReader();

        fr.onload = () => {
            resolve(fr.result)
        }
        fr.onerror = () => {
            reject("Read file Error")
        }
        fr.readAsDataURL(file);
    })
}

export default readFileAsUrl;