function findMatching(arr, str) {
    const matchedDrivers = arr.filter(driver => {
        if(driver.toLowerCase() === str.toLowerCase()) {
            return driver;
        }
    });
    return matchedDrivers;
}

function fuzzyMatch(arr, str) {
    const matchedDrivers = arr.filter(driver => {
        let beginningLetters = "";
        for (let i = 0; i <= str.length - 1; i++) {
            beginningLetters += driver[i];
        }
        if (beginningLetters === str) {
            return driver;
        }
    });
    return matchedDrivers;
}

function matchName(arr, str) {
    const matchedDrivers = arr.filter(driver => {
        if(driver.name === str) {
            return driver;
        }
    });
    return matchedDrivers;
}