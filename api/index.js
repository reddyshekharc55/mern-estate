import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js'
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to server");
});

const port = 4000;
const app = express();

app.use("/api/user",router)

app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});