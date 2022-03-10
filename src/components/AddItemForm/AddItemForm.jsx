import { useDispatch, } from "react-redux"
import { useState } from "react"

function AddItem() {
    
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')


    console.log(description, imageUrl);

    const handleSubmit = () => {
        console.log('clicked');
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