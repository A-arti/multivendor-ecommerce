import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'; // Ensure you import cookie-parser
import { dbConnect } from "./utiles/db.js";

const app = express();
dotenv.config(); // Allow us to use .env variables as process.env.VARIABLE_NAME
const port = process.env.PORT; // Use a default port if PORT is not set
dbConnect() // Connects to database

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

// Body parser and cookie parser
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
