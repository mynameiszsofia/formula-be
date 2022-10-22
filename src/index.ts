import express, { Express, Request, Response } from 'express';
import { driversWithPlace } from './utils/drivers'
import cors from 'cors';;

const app: Express = express();
app.use(express.static('src'));
app.use(cors())
const port = Number(process.env.PORT ?? 8080);

app.get('/api/drivers', (req: Request, res:Response) => {
  const drivers = driversWithPlace;
  drivers.sort((a,b) => a.place - b.place);
  console.log('Let\'s check drivers sorted by place: ',drivers)
  res.send(drivers);
})

app.post('/api/drivers/:driverId/overtake', (req:Request, res:Response) => {
  const driverId:Number = Number(req.params.driverId);
  const drivers = driversWithPlace;
  drivers.sort((a,b) => a.place - b.place);
  const overtake = drivers.map((e,i) => {
    if (e.place === 1) {
      console.log(`${e.firstname} ${e.lastname} is the number one`)
      return e
    }
    if(e && e.id === driverId){
        let place = e.place
        e.place = drivers[i-1].place
        drivers[i-1].place = place
        console.log(`${e.firstname} ${e.lastname} overtake ${drivers[i-1].firstname} ${drivers[i-1].lastname} so ${e.lastname} place are ${e.place}.`)
     } 
    return e
  })

  res.send(overtake); 
})

app.listen(port, () => {
  console.log(`Formula app listening on port ${port}`)
})