import Cookies from 'js-cookie';
import { getYear, getMonth, getDate } from "date-fns";

function checkFlightCookies(departureObj, returnObj) {
    const compactDepartureDate = `${getDate(departureObj.date)}-${getMonth(departureObj.date)}-${getYear(departureObj.date)}`;
    if (returnObj) {
        const compactReturnDate = `${getDate(returnObj.date)}-${getMonth(returnObj.date)}-${getYear(returnObj.date)}`;
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

function clearFlightSearchStorage() {
    for (const fligthSearchRecord in localStorage) {
        if (!Cookies.get(fligthSearchRecord)) localStorage.removeItem(fligthSearchRecord);
    }
}

export { checkFlightCookies, readFlightCookies, writeFlightCookies, clearFlightSearchStorage };