import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env"});

//to connect the backend with the frontend
app.use(
    cors({
    // origin: [process.env.FRONTEND_URL],
    origin: 'http://localhost:5173',
    methods: ["POST"],
    credentials: true,

}));

//to convert the string object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;