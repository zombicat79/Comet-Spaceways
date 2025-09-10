function minimizeDestinations(fullDestination) {
    switch(fullDestination) {
        case 'Earth (America)':
            return 'EAM';
        case 'Earth (Europe)':
            return 'EEU';
        case 'Earth (Asia)':
            return 'EAS'
        case 'Celestia Station':
            return 'CEL';
        case 'Moon':
            return 'LUN';
        case 'Mars':
            return 'MRS';
        case 'Ceres':
            return 'CRS'
        case 'Venus':
            return 'VEN';
        case 'Titan':
            return 'TTN'
        default:
            return '';
    }
}

function formatTimeUnits(timeUnit) {
    if (timeUnit.toString().length < 2) {
        return `0${timeUnit}`;
    }

    return timeUnit;
}

function getTimeSummaryFromSeconds(actualSeconds) {
    // UNDER CONSTRUCTION
    let rest = actualSeconds;

    function getMonths(secondRepo) {
        const SECONDS_IN_MONTH = 2592000;
        const rawAmountOfMonths = secondRepo / SECONDS_IN_MONTH;
        if (rawAmountOfMonths > 0) {
            rest = Math.abs(rawAmountOfMonths % 1) * SECONDS_IN_MONTH;
        } else {
            rest = Math.abs(rawAmountOfMonths % 1);
        }
        return Math.floor(rawAmountOfMonths);
    }

    function getDays(secondRepo) {
        const SECONDS_IN_DAY = 86400;
        const rawAmountOfDays = secondRepo / SECONDS_IN_DAY;
        if (rawAmountOfDays > 0) {
            rest = Math.abs(rawAmountOfDays % 1) * SECONDS_IN_DAY;
        } else {
            rest = Math.abs(rawAmountOfDays % 1);
        }
        return Math.floor(rawAmountOfDays);
    }

    function getHours(secondRepo) {
        const SECONDS_IN_HOUR = 3600;
        const rawAmountOfHours = secondRepo / SECONDS_IN_HOUR;
        if (rawAmountOfHours > 0) {
            rest = Math.abs(rawAmountOfHours % 1) * SECONDS_IN_HOUR;
        } else {
            rest = Math.abs(rawAmountOfHours % 1);
        }
        return Math.floor(rawAmountOfHours);
    }

    function getMinutes(secondRepo) {
        const SECONDS_IN_MINUTE = 60;
        const rawAmountOfMinutes = secondRepo / SECONDS_IN_MINUTE;
        if (rawAmountOfMinutes > 0) {
            rest = Math.abs(rawAmountOfMinutes % 1) * SECONDS_IN_MINUTE;
        } else {
            rest = Math.abs(rawAmountOfMinutes % 1);
        }
        return Math.floor(rawAmountOfMinutes);
    }

    const months = getMonths(rest);
    const days = getDays(rest);
    const hours = getHours(rest);
    const minutes = getMinutes(rest);

    return { months, days, hours, minutes }
}

function pickFromNumberRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomFromArray(array) {
    // Return a randomly selected member of the given array
    return array[Math.floor(Math.random() * array.length)];
}

function pickUniquesFromArray(array, outputLength) {
    let workArray = [...array];

    let iteration = 1;
    let selection = [];

    while (iteration <= outputLength) {
        const randomIndex = Math.floor(Math.random() * workArray.length);
        selection.push(workArray[randomIndex]);
        workArray.splice(randomIndex, 1);
        iteration++;
    }

    return selection;
}

export { minimizeDestinations, formatTimeUnits, getTimeSummaryFromSeconds, pickFromNumberRange, pickRandomFromArray, pickUniquesFromArray };