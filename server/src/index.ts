import express from 'express';
import dotenv from 'dotenv';

import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT;
const view = path.join(__dirname, '../views');

app.use(express.static(view));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
