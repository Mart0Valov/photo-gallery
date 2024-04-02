import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    imgUrl: {
        type: mongoose.Schema.Types.String,
        required: true
    }
    // TODO: implementing field for local photo url
});

export const Photo = mongoose.model("Photo", PhotoSchema);