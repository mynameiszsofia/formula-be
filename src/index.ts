import express, { Express } from 'express';
import cors from 'cors';
import driverRoute from './routes/index';

const app: Express = express();
const port = Number(process.env.PORT ?? 8080);

app.use(express.static('src/datas'));
app.use(cors());

app.use("/api/drivers/", driverRoute);

app.listen(port, () => {
  console.log(`Formula app listening on port ${port}`);
})