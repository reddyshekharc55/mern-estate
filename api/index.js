import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to server");
});

const port = 4000;
const app = express();

app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});