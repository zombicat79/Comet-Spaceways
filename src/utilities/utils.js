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

export { minimizeDestinations };