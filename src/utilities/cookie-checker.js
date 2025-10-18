import Cookies from 'js-cookie';

function checkFlightCookies(departureObj, returnObj) {
    const compactDepartureDate = `${departureObj.date.getDate()}-${departureObj.date.getMonth()}-${departureObj.date.getFullYear()}`;
    if (returnObj) {
        const compactReturnDate = `${returnObj.date.getDate()}-${returnObj.date.getMonth()}-${returnObj.date.getFullYear()}`;
        if (Cookies.get(`${departureObj.origin}-${departureObj.destination}-${compactDepartureDate}`) === 'true' && 
            Cookies.get(`${returnObj.origin}-${returnObj.destination}-${compactReturnDate}`) === 'true') {
                return {
                    departures: JSON.parse(localStorage.getItem(`${departureObj.origin}-${departureObj.destination}-${compactDepartureDate}`)),
                    returns: JSON.parse(localStorage.getItem(`${returnObj.origin}-${returnObj.destination}-${compactReturnDate}`))
                };
            }
    } else {
        if (Cookies.get(`${departureObj.origin}-${departureObj.destination}-${compactDepartureDate}`) === 'true') {
            return { departures: JSON.parse(localStorage.getItem(`${departureObj.origin}-${departureObj.destination}-${compactDepartureDate}`)) };
        } else {
            return false;
        }
    }
}

function readFlightCookies(cookieName) {
    if (localStorage.getItem(cookieName)) return true;

    return false;
}

function writeFlightCookies(cookieName, value) {
    localStorage.setItem(cookieName, value);
    Cookies.set(cookieName, 'true', { expires: 1 });
}

export { checkFlightCookies, readFlightCookies, writeFlightCookies };