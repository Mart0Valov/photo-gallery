import express from "express";
const PORT = 3000;
const app = express();

// create and uplaod new photo
app.post('/api/create', (request, response) => {

});
// retrieve all photos
app.get('/api/photos', (request, response) => {

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