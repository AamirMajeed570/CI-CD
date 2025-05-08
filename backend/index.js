import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { router } from './routes/index.js';
connectDB().then(() => console.log("DB Connected Succesfully")).catch((error) => console.log("Some Error Ocurred in DB", error));
const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());
app.use('/api/v1',router)

app.listen(PORT, console.log(`Server is Listening at http://localhost:${PORT}`))