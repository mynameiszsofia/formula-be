import fs from 'fs';
import { Driver } from './types';

export const drivers:Driver[] = JSON.parse(fs.readFileSync('./src/datas/static/drivers.json', 'utf8'));

export const randomizeDrivers = ( ) => {
    let usedNumbers:number[] = [];
    const driversWithPlace = drivers.map((driver) => {
        for (let i = 0; i < 22; i++) {
            const number = Math.floor(Math.random()* 21 + 1);
            if (!usedNumbers.includes(number)) {
                usedNumbers.push(number);
                const result =  {
                    ...driver,
                    place: number,
                    imgUrl: `/static/${driver.code.toLocaleLowerCase()}.png`
                }
                return result;
            } else {
                i--;
            }
        }
    });
    return driversWithPlace;
}



