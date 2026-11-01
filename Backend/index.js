import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/DB/Connection.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();