import dotenv from 'dotenv';
import express from 'express';
app.use(express.json());
import uniqid from 'uniqid'

import moviesRouter from './api/movies';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});