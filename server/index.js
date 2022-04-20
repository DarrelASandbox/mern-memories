import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(port, () => console.log(`Server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message));
