import { useEffect, useState } from "react";

const HomeView = ({ photos }) => {
    useEffect(() => {
        console.log(photos);
    })
    return (
        <div>
            {photos.length !== 0 && photos.map(photo => (
                <div key={photo._id}>
                    <h2>{photo.title}</h2>
                    <p>{photo.description}</p>
                    <img className="fixed-size" src={photo.imgUrl} />
                </div>
            ))}
        </div>
    );
};

export default HomeView;