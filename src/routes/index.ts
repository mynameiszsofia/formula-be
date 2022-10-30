import express, { Request, Response } from 'express';
import { randomizeDrivers } from '../utils/drivers';
import { Driver } from '../utils/types';
import { overtake } from '../controllers';
import NodeCache from 'node-cache';
const myCache = new NodeCache({ stdTTL: 0});
const router = express.Router();

router.get('/', (req:Request, res:Response) => {
    const drivers = randomizeDrivers();
    drivers.sort((a,b) => a.place - b.place);
    console.log('Let\'s check drivers sorted by place: ',drivers);
    myCache.set("driversKey", drivers);
    res.send(drivers);
})
  
router.post('/:driverId/overtake', (req:Request, res:Response) => {
    const driverId:number = Number(req.params.driverId);
    const drivers:Driver[] = myCache.get( "driversKey" );
    const result:Driver[] = overtake(driverId,drivers);
    result.sort((a,b) => a.place - b.place);
    myCache.set("driversKey", result);
    res.send(result);
})

export default router;