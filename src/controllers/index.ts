export const overtake = (driverId,drivers) => {
    const result = drivers.map((driver,i) => {
        if (driver.place === 1) {
            console.log(`${driver.firstname} ${driver.lastname} is the number one.`);
            return driver;
        }

        if (driver && driver.id === driverId) {
            const place = driver.place;
            driver.place = drivers[i-1].place;
            drivers[i-1].place = place;
            console.log(`${driver.firstname} ${driver.lastname} overtake ${drivers[i-1].firstname} ${drivers[i-1].lastname} so ${driver.lastname} place are ${driver.place}.`);
        } 
        return driver;

    })
    
    return result;
}