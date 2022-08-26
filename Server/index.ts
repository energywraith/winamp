import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const path = __dirname + '/app/views/';

app.use(express.static(path));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path + "index.html");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});