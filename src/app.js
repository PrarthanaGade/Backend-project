import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit: "16KB"}))
app.use(express.urlencoded({extended: true, limit: "16KB"}))
app.use(express.static("public"))
app.use(coookieParser())

export {app}


