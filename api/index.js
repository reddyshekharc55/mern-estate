import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to server");
});

const port = 4000;
const app = express();


app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});