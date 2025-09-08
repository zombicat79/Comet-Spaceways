import { pickRandomFromArray, pickUniquesFromArray } from "./utils";

function getFlightsPerDate(routeInfo, date) {
    const { daily, weekly, monthly } = routeInfo.frequency;

    const targetedFlightMonth = new Date(date).getMonth() + 1;
    if (!(monthly.includes(targetedFlightMonth))) {
        return null;
    }

    const targetedFlightDay = new Date(date).getDay();
    if (!(weekly.includes(targetedFlightDay))) {
        return null;
    }

    let potentialFlightOccurrences = [];
    for (let i = daily.min; i <= daily.max; i++) {
        potentialFlightOccurrences.push(i);
    }
    console.log(potentialFlightOccurrences)

    const flightOccurrences = pickRandomFromArray(potentialFlightOccurrences);

    console.log(flightOccurrences)
    const flights = pickUniquesFromArray(routeInfo.flight_profiles, flightOccurrences)

    return flights;
}

function calculateAvailability(schedule, departureObj, returnObj = null, outputBuild = null) {
    const { origin, destination, date } = departureObj;
    const originRoutes = schedule.find(el => el.port === origin);
    const routeInfo = originRoutes.flight_schedule.find(el => el.destination_port === destination);

    if (!routeInfo.direct_flight) {
        // No direct flight --> Search for indirect routings
        const { intermediate_ports } = routeInfo;
        // Recursive availability calculation via intermediate ports
    } else {
        console.log(getFlightsPerDate(routeInfo, date));
    }

    /* let output;
    if (outputBuild) {
        output = { depart: { ...outputBuild }, return: {} }
    } else  {
        output = { depart: {} }
    }
    
    if (returnObj) {
        output = calculateAvailability(schedule, returnObj, null, output);
    }

    return output; */
}

export default calculateAvailability;