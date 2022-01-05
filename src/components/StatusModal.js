import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import { createPost, updatePost } from '../redux/actions/postAction'
const StatusModal = () => {
    const { auth, status } = useSelector(state => state)
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [images, setImages] = useState([])
    const handleChangeImages = e => {
        const files = [...e.target.files]
        console.log(files)
        let err = ""
        let newImages = []
        files.forEach(file => {
            if (!file) return err = "File does not exist."
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                return err = "Image Format is incorrect."
            }
            return newImages.push(file)
        })
        if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } })
        setImages([...images, ...newImages])
    }
    const deleteImage = (index) => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (images.length === 0)
            return dispatch({
                type: GLOBALTYPES.ALERT, payload: { error: "Please add your photo." }
            })
        if (status.onEdit) {
            dispatch(updatePost({ content, images, auth , status}))
        } else {
            dispatch(createPost({ content, images, auth }))
        }
        setContent("")
        setImages([])
    }
    useEffect(() => {
        if (status.onEdit) {
            setContent(status.content)
            setImages(status.images)
        }
    }, [status])
    return (
        <div className='status_modal'>
            <form onSubmit={handleSubmit}>
                <div className='status_header'>
                    <h5 className='m-0'>
                        Create Post </h5>
                    <span onClick={() => dispatch({
                        type: GLOBALTYPES.STATUS, payload: false
                    })}>&times;</span>
                </div>
                <div className='status_body'>
                    <textarea name="content" value={content}
                        placeholder={`${auth.user.username}, What are you thinking?`}
                        onChange={e => setContent(e.target.value)} />
                    <div className='show_images'>
                        {
                            images.map((img, index) => (
                                <div key={index} id="file_img">
                                    <img src={
                                        img.url ? img.url : URL.createObjectURL(img)}
                                        alt="images" className='"img-thunbnail' />
                                    <span onClick={() => deleteImage(index)}>&times;</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="input_images">
                        <i className="fas fa-camera" />
                        <div className='file_upload'>
                            <i className="fas fa-image" />
                            <input type="file" name="file" id="file"
                                multiple accept="image/*,video/*" onChange={handleChangeImages} />
                        </div>
                    </div>
                </div>
                <div className="status_footer">
                    <button className="btn btn-secondary w-100" type="submit">
                        Post
                    </button>
                </div>
            </form >
        </div >
    )
}

export default StatusModal
