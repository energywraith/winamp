import express from 'express';
import path from 'path';
import cors from 'cors';

import youtubeController from './controllers/youtube.controller';

const view = path.join(__dirname, '../views');
const app = express();

app.use(cors());
app.use(express.static(view));

// Routes
app.use('/api/youtube/', youtubeController);

export default app;
