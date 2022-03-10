import { useDispatch, } from "react-redux"
import { useState } from "react"

function AddItem() {
    
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const dispatch = useDispatch()

    console.log(description, imageUrl);

    const handleSubmit = () => {
        console.log('clicked');

        dispatch({
            type: 'POST_ITEM',
            payload: {description: description, image_url: imageUrl}
        })

        setDescription('')
        setImageUrl('')
    }

    return (
        <>
            <input 
            type="text"
            value={description}
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}/>
            <input 
            type="text"
            placeholder="Image Url(OPTIONAL)"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}/>
            <button onClick={handleSubmit}>Add To Shelf</button>
        </>
    )
}

export default AddItem