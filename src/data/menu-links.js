import WorkInProgress from "../components/infopieces/WorkInProgress";

const menuLinks = {
    topLeft: [
        /* { id: 1, text: 'book', action: 'navigate', path: '', decoration: null },
        { id: 2, text: 'search a voyage', action: 'navigate', path: '', decoration: null },
        { id: 3, text: 'launch status', action: 'navigate', path: '', decoration: null } */
        { id: 1, text: 'book', action: 'popup', payload: WorkInProgress(), decoration: null },
        { id: 2, text: 'search a voyage', action: 'popup', payload: WorkInProgress(), decoration: null },
        { id: 3, text: 'launch status', action: 'popup', payload: WorkInProgress(), decoration: null }
    ],
    topRight: [
        /* { id: 4, text: 'promos', action: 'navigate', path: '', decoration: null },
        { id: 5, text: 'cosmic club', action: 'navigate', path: '', decoration: null }, */
        { id: 4, text: 'promos', action: 'popup', payload: WorkInProgress(), decoration: null },
        { id: 5, text: 'cosmic club', action: 'popup', payload: WorkInProgress(), decoration: null },
        { id: 6, text: 'info', action: 'expand', path: null, decoration: null },
        { id: 7, text: 'log in', action: 'popup', payload: WorkInProgress(), decoration: 'primary' }
    ],
    bottomLeft: [
        /* { id: 8, text: 'Help centre', action: 'navigate', path: '', decoration: 'underline' },
        { id: 9, text: 'Fares', action: 'navigate', path: '', decoration: 'underline' },
        { id: 10, text: 'Cargo', action: 'navigate', path: '', decoration: 'underline' },
        { id: 11, text: 'Seats & cabins', action: 'navigate', path: '', decoration: 'underline' },
        { id: 12, text: 'Onboard experience', action: 'navigate', path: '', decoration: 'underline' },
        { id: 13, text: 'Destinations', action: 'navigate', path: '', decoration: 'underline' } */
        { id: 8, text: 'Help centre', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 9, text: 'Fares', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 10, text: 'Cargo', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 11, text: 'Seats & cabins', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 12, text: 'Onboard experience', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 13, text: 'Destinations', action: 'popup', payload: WorkInProgress(), decoration: 'underline' }
    ],
    bottomRight: [
        /* { id: 14, text: 'Check-in info', action: 'navigate', path: '', decoration: 'underline' },
        { id: 15, text: 'Special assistance', action: 'navigate', path: '', decoration: 'underline' },
        { id: 16, text: 'Travel docs', action: 'navigate', path: '', decoration: 'underline' },
        { id: 17, text: 'Additional services', action: 'navigate', path: '', decoration: 'underline' },
        { id: 18, text: 'Flexibility services', action: 'navigate', path: '', decoration: 'underline' },
        { id: 19, text: 'Traveling with NHEs', action: 'navigate', path: '', decoration: 'underline' },
        { id: 20, text: 'Spaceport transfer', action: 'navigate', path: '', decoration: 'underline' },
        { id: 21, text: 'Security', action: 'navigate', path: '', decoration: 'underline' }, */
        { id: 14, text: 'Check-in info', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 15, text: 'Special assistance', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 16, text: 'Travel docs', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 17, text: 'Additional services', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 18, text: 'Flexibility services', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 19, text: 'Traveling with NHEs', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 20, text: 'Spaceport transfer', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
        { id: 21, text: 'Security', action: 'popup', payload: WorkInProgress(), decoration: 'underline' },
    ]
}

export { menuLinks };