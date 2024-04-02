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
        return response.status(200).send(allPhotos);
    } catch (err) {
        console.log(err)
    }
});

// retrieve single photo by id
app.get('/api/photo/:id', (request, response) => {

});
// update photo by id
app.put('/api/photo/:id', (request, response) => {

});
// delete photo by id
app.delete('/api/photo/:id', (request, response) => {

});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})