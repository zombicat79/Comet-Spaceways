function minimizeDestinations(fullDestination) {
    switch(fullDestination) {
        case 'Moon':
            return 'LUN';
        case 'Mars':
            return 'MRS';
        default:
            return '';
    }
}

export { minimizeDestinations };