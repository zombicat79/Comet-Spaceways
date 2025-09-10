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

function convertSeconds(totalSeconds) {
    // UNDER CONSTRUCTION
    let rest = totalSeconds;

    function getMonths(actualSeconds) {
        const secondsInMonth = 2592000;
        const rawAmountOfMonths = actualSeconds / secondsInMonth;
        rest = Math.abs(rawAmountOfMonths % 1) * secondsInMonth;
        return Math.floor(rawAmountOfMonths);
    }

    console.log(getMonths(rest));
    console.log(rest)
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

export { minimizeDestinations, convertSeconds, pickFromNumberRange, pickRandomFromArray, pickUniquesFromArray };