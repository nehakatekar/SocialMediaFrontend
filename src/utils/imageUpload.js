export const checkImage = (file) => {
    let err = ""
    if (!file) return err = "filedoes not exist"
    if(file.size > 1024 * 1024)
    err = "The largest image size is 1mb." 
    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        err = "Image format incorrect"
    return err
}
export const imageUpload = async (images) => {
    let imgArr = [];
    for (const item of images) {
        const formData = new FormData()
        formData.append("file", item)
        formData.append("upload_preset", "syhw7qys")
        formData.append("cloud_name", "dyqsryies")
        const res = await fetch("https://api.cloudinary.com/v1_1/dyqsryies/image/upload", {
            method: "POST",
            body: formData
        })
        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr;
}