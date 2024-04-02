import express from "express";
import mongoose from "mongoose";
import { Photo } from "./databaseSchemas/photo.js";

const PORT = 3000;
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/photo-gallery-api-db')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));

// create and uplaod new photo
app.post('/api/create', async (request, response) => {
    const { body } = request;
    const newPhoto = new Photo(body);

    try {
        const savedPhoto = await newPhoto.save();
        return response.status(201).send({ msg: "Success", photoId: savedPhoto._id });
    } catch (err) {
        console.log(err);
        return response.status(400).send({ msg: "error occured" });
    }

});
// retrieve all photos
app.get('/api/photos', async (request, response) => {
    try {
        const allPhotos = await Photo.find();
        if (!photo) throw new Error(`Currently there are no photos uploaded`);
        return response.status(200).send(allPhotos);
    } catch (err) {
        console.log(err);
        return response.status(404).send({ msg: err.message });
    }
});

// retrieve single photo by id
app.get('/api/photo/:id', async (request, response) => {
    const photoId = request.url.split('/')[3];
    try {
        const photo = await Photo.findById(photoId);
        if (!photo) throw new Error(`Photo with id ${photoId} not found`);
        return response.status(200).send(photo);
    } catch (err) {
        return response.status(404).send({ msg: err.message });
    }
});
// update photo by id
app.put('/api/photo/:id', async (request, response) => {
    const photoId = request.url.split('/')[3];
    console.log(photoId);
    const { body } = request;

    try {
        const photo = await Photo.findByIdAndUpdate(photoId, { ...body });
        if (!photo) throw new Error(`Photo with id ${photoId} not found`);
        return response.status(200).send({ msg: "Photo edited successfully" });
    } catch (err) {
        return response.status(404).send({ msg: err.message });
    }
});
// delete photo by id
app.delete('/api/photo/:id', async (request, response) => {
    const photoId = request.url.split('/')[3];
    try {
        const photo = await Photo.findByIdAndDelete(photoId);
        if (!photo) throw new Error(`Photo with id ${photoId} not found`);
        return response.status(200).send({ msg: "Photo deleted successfully" });
    } catch (err) {
        return response.status(404).send({ msg: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})