import express from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/user',userRoutes);
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});