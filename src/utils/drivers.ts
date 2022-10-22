import fs from 'fs';
import {Driver} from './types';

export const drivers:Driver[] = JSON.parse(fs.readFileSync('./src/static/drivers.json', 'utf8'))

let usedNumbers = []
export const driversWithPlace = drivers.map((driver) => {
    for (let i = 0; i < 22; i++) {
        const number = Math.floor(Math.random()* 21 + 1);
        if(!usedNumbers.includes(number)) {
            usedNumbers.push(number);
            const result =  {
                ...driver,
                place: number,
                imgUrl: `/static/${driver.code.toLocaleLowerCase()}.png`
            }
            return result
        } else {
            i--
        }
        }
});



