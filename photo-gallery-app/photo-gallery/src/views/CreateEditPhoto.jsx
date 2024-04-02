import { useState } from "react";


const CreateEditPhoto = () => {
    const [photoData, setPhotoData] = useState({
        title: "",
        description: "",
        imgUrl: ""
    });


    const onPhotoUpload = async () => {
        console.log(' here');
        try {
            const response = await fetch('http://localhost:3000/api/create', {
                method: 'POST',
                body: JSON.stringify(photoData)
            });
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div>
            <input value={photoData.title} onChange={(ev) => setPhotoData({ ...photoData, title: ev.target.value })} type="text" placeholder="Enter title" />
            <input value={photoData.description} onChange={(ev) => setPhotoData({ ...photoData, description: ev.target.value })} type="text" placeholder="Enter description" />
            <input value={photoData.imgUrl} onChange={(ev) => setPhotoData({ ...photoData, imgUrl: ev.target.value })} type="text" placeholder="Choose..." />
            <input type="submit" onClick={onPhotoUpload} value="Upload" />
        </div>
    );
}

export default CreateEditPhoto;