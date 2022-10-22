import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = Number(process.env.PORT ?? 8080);

app.get('/api/drivers', (req: Request, res:Response) => {
  res.send('Hello World!')
})

app.post('/api/drivers/:driverId/overtake', (req:Request, res:Response) => {
  const driverId = req.params.driverId;
  res.send('Hello, driver! ' + driverId);
})

app.listen(port, () => {
  console.log(`Formula app listening on port ${port}`)
})